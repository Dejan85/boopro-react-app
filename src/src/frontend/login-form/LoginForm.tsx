import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginPageUi } from "src/ui/login-layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface LoginFormI {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LoginForm: React.FC = (): JSX.Element => {
  const [serverError, setServerError] = useState<string | null>(null!);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormI>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormI) => {
    try {
      const { email, password } = data;
      const user = await signInWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem("auth", user.user.refreshToken);
      setServerError(null);
      navigate("/");
    } catch (error: any) {
      const err = error.message
        .replace("Firebase: Error (auth/", "")
        .replace(").", "")
        .replaceAll("-", " ");
      setServerError(`${err}!`);
    }
  };

  return (
    <LoginPageUi
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      serverError={serverError}
    />
  );
};

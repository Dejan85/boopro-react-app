import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginPageUi } from "src/ui/login-layout";
import { login } from "src/api/methods";

export interface LoginFormI {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LoginForm: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormI>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormI) => {
    try {
      const response = await login(data);
    } catch (error) {
      console.log("test error", error);
    }
  };

  return (
    <LoginPageUi
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

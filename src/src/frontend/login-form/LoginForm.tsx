import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginPageUi } from "src/ui/login-page";

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

  console.log("test errors", errors);

  const onSubmit = (data: LoginFormI) => {
    // console.log("test", data);
    // const api = "http://dev.api.kabox.io/api/auth/login"
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

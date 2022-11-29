import { Button } from "../button";
import { Center } from "../container";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  SubmitHandler,
  FieldErrorsImpl,
} from "react-hook-form";
import { LoginFormI } from "src/frontend/login-form";
import { Form } from "../form";
import { Input } from "../input";
import { Content } from "./enum";
import { ErrorText } from "../paragraph";

interface PropsI {
  register: UseFormRegister<LoginFormI>;
  handleSubmit: UseFormHandleSubmit<LoginFormI>;
  onSubmit: SubmitHandler<LoginFormI>;
  errors: Partial<FieldErrorsImpl<LoginFormI>>;
  serverError: string | null;
}

export const LoginPageUi: React.FC<PropsI> = ({
  errors,
  register,
  handleSubmit,
  onSubmit,
  serverError,
}): JSX.Element => {
  console.log("test errors", errors);

  return (
    <Center>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ErrorText style={{ color: "red" }}>{serverError}</ErrorText>
        <Input
          error={errors?.email?.message}
          placeholder={errors?.email?.message || "Email"}
          {...register("email")}
        />
        <Input
          error={errors?.password?.message}
          placeholder={errors?.password?.message || "Password"}
          {...register("password")}
        />

        <Button>{Content.loginButton}</Button>
      </Form>
    </Center>
  );
};

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

interface PropsI {
  register: UseFormRegister<LoginFormI>;
  handleSubmit: UseFormHandleSubmit<LoginFormI>;
  onSubmit: SubmitHandler<LoginFormI>;
  errors: Partial<FieldErrorsImpl<LoginFormI>>;
}

export const LoginPageUi: React.FC<PropsI> = ({
  errors,
  register,
  handleSubmit,
  onSubmit,
}): JSX.Element => {
  console.log("test errors", errors);

  return (
    <Center>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Email" {...register("email")} />
        <Input placeholder="Password" {...register("password")} />
        <Button>{Content.loginButton}</Button>
      </Form>
    </Center>
  );
};

import { Button } from "../button";
import { Container, ContainerCenter, ContainerColumn } from "../container";
import { Input } from "../input";

export const LoginPageUi: React.FC = (): JSX.Element => {
  return (
    <ContainerCenter>
      <ContainerColumn gap="10px">
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" />
        <Button text="Login" />
      </ContainerColumn>
    </ContainerCenter>
  );
};

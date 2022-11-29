import { Oval } from "react-loader-spinner";
import { Wrapper } from "./SpinnerLoader.style";

export const SpinnerLoader: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Oval
        height={40}
        width={40}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Wrapper>
  );
};

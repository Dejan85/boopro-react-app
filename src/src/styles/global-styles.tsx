import { css, Global } from "@emotion/react";

export const globalStyles = (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Lato", sans-serif;
        }
      `}
    />
  </>
);

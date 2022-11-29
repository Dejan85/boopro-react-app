import { css, Global } from "@emotion/react";
import { paddings, colors, gap } from "./variables";

export const globalStyles = (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }

        html,
        body {
          height: 100%;
          box-sizing: border-box;
        }

        body {
          font-family: "Lato", sans-serif;
          ${paddings}
          ${gap}
          ${colors}
        }

        #root {
          position: relative;
          height: 100%;
        }
      `}
    />
  </>
);

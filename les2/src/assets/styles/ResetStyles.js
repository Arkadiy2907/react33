import { Global, css } from '@emotion/react';

const ResetStyles = () => (
  <Global
    styles={css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
    `}
  />
);

export default ResetStyles;

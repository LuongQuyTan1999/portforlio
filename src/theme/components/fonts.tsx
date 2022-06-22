import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Graphik';
        font-weight: 700;
        src: url('../../fonts/Graphik/GraphikBold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Graphik';
        font-weight: 400;
        src: url('../../fonts/Graphik/GraphikRegular.otf') format('opentype');
      }
      `}
  />
);

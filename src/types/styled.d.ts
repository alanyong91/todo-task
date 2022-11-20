import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basic: {
      containerWidth: string;
    };
    colors: {
      font: string;
      greyBackground: string;
      whiteBackground: string;
      border: string;
      heading: string;
      input: string;
      placeholder: string;
      button: string;
    };
    breakpoint: {
      mobileMaxWidth: string;
      desktopMinWidth: string;
    };
  }
}

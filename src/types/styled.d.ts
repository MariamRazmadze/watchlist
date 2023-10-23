import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    accent: string;
    red: string;
    userRating: string;
    imdbRating: string;
    darkRed: string;
    text: string;
    textDark: string;
    background: string;
    box: string;
    list: string;
  }
}

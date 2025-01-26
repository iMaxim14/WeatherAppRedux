import { Global, css } from "@emotion/react";
const globalStyles = css`
* {
  box-sizing: border-box;
}
body,
html {
  background-image: url('https://hotelvittoria.info/wp-content/uploads/2023/06/Cose-da-fare-in-Val-di-Sole-quando-piove.jpeg');
  height: 100%;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
#root {
  display: flex;
  min-height: 100%;
}
`;
function GlobalStyles() {
  return <Global styles={globalStyles} />
}
export default GlobalStyles;
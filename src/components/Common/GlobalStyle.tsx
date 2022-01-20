import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('http://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'SUIT', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: React.FC = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;

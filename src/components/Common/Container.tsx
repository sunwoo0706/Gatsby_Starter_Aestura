import { css } from '@emotion/react';
import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Header } from './Header';

interface ContainerProps {
  children: React.ReactNode;
}

const MainStyle = css`
  width: 100%;
  @media (max-width: 54rem) {
    padding: 0 4vw;
  }
`;

const SectionStyle = css`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding-top: 2.2rem;
`;

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main css={MainStyle}>
        <section css={SectionStyle}>{children}</section>
      </main>
    </React.Fragment>
  );
};

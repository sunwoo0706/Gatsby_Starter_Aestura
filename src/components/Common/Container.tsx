import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { SocialIdType } from 'shared/type';
import GlobalStyle from './GlobalStyle';
import { Header } from './Header';

interface ContainerProps extends SocialIdType {
  siteTitle: string;
  title: string;
  description: string;
  url: string;
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
`;

export const Container: React.FC<ContainerProps> = ({
  siteTitle,
  title,
  description,
  url,
  githubId,
  linkedInId,
  twitterId,
  children,
}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>

        {/* Logo */}
        <link
          rel="icon"
          href="https://github.com/sunwoo0706/Gatsby_Starter_Aestura/raw/master/resource/AesturaLogo.png"
        />

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* <meta name="twitter:image" content={image} /> */}
        <meta name="twitter:site" content={`@${twitterId}`} />
        <meta name="twitter:creator" content={`@${twitterId}`} />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      <Header
        githubId={githubId}
        linkedInId={linkedInId}
        twitterId={twitterId}
        title={siteTitle}
      />
      <main css={MainStyle}>
        <section css={SectionStyle}>{children}</section>
      </main>
    </div>
  );
};

import { css } from '@emotion/react';
import { ArticleList } from './ArticleList';
import { CategoryList } from './CategotyList';

const MainStyle = css`
  width: 100%;
`;

const SectionStyle = css`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding-top: 2.2rem;
`;

export const Main: React.FC = () => {
  return (
    <main css={MainStyle}>
      <section css={SectionStyle}>
        <CategoryList />
        <ArticleList />
      </section>
    </main>
  );
};

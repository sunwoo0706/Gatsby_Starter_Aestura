import { css } from '@emotion/react';
import { ArticleList } from './ArticleList';
import { CategoryList } from './CategotyList';
import { CategoryListProps } from 'utils/Type';

interface MainProps extends CategoryListProps {}

const MainStyle = css`
  width: 100%;
`;

const SectionStyle = css`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding-top: 2.2rem;
`;

export const Main: React.FC<MainProps> = ({
  selectedCategory,
  categoryList,
}) => {
  return (
    <main css={MainStyle}>
      <section css={SectionStyle}>
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <ArticleList />
      </section>
    </main>
  );
};
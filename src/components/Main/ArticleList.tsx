import styled from '@emotion/styled';
import { Article } from './Article';
import { ArticleType } from 'utils/Type';
import { useMemo } from 'react';

interface ArticleListProps {
  selectedCategory: string;
  articles: ArticleType[];
}

const ArticleSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 4rem;
  gap: 4rem;
`;

export const ArticleList: React.FC<ArticleListProps> = ({
  selectedCategory,
  articles,
}) => {
  const articleListData = useMemo(
    () =>
      articles.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: ArticleType) =>
          selectedCategory !== '모두보기'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  return (
    <ArticleSection>
      {articleListData.map(({ node: { id, frontmatter } }: ArticleType) => (
        <Article {...frontmatter} link="https://github.com" key={id} />
      ))}
    </ArticleSection>
  );
};

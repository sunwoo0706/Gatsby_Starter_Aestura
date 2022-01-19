import styled from '@emotion/styled';
import { Article } from './Article';
import { ArticleType } from 'utils/Type';

interface ArticleListProps {
  articles: ArticleType[];
}

const ArticleSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  margin-top: 4rem;
  gap: 4rem;
`;

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <ArticleSection>
      {articles.map(({ node: { id, frontmatter } }: ArticleType) => (
        <Article {...frontmatter} link="https://github.com" key={id} />
      ))}
    </ArticleSection>
  );
};

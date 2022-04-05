import styled from '@emotion/styled';
import { Article } from './Article';
import { ArticleType } from 'shared/Type';
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll';

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
  const { containerRef, articleList }: useInfiniteScrollType =
    useInfiniteScroll(selectedCategory, articles);

  return (
    <ArticleSection ref={containerRef}>
      {articleList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: ArticleType) => (
          <Article {...frontmatter} link={slug} key={id} />
        ),
      )}
    </ArticleSection>
  );
};

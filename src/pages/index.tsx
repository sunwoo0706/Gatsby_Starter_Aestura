import GlobalStyle from 'components/Common/GlobalStyle';
import { Header } from 'components/Common/Header';
import { Main } from 'components/Main';
import { ArticleType, CategoryListProps } from 'utils/Type';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { useMemo } from 'react';

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: ArticleType[];
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? '모두보기'
      : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: ArticleType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['모두보기']++;

          return list;
        },
        { 모두보기: 0 },
      ),
    [],
  );

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main
        selectedCategory={selectedCategory}
        categoryList={categoryList}
        articles={edges}
      />
    </div>
  );
};

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD")
            categories
          }
        }
      }
    }
  }
`;

export default IndexPage;

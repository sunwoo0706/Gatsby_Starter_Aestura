import GlobalStyle from 'components/Common/GlobalStyle';
import { Header } from 'components/Common/Header';
import { Main } from 'components/Main';
import { ArticleType } from 'utils/Type';
import { graphql } from 'gatsby';

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: ArticleType[];
    };
  };
}

const CATEGORY_LIST = {
  모두보기: 5,
  typescript: 3,
  javascript: 2,
  github: 9,
  storybook: 2,
  회고록: 5,
  '헤르만 헤세': 3,
  '이탈로 칼비노': 5,
  '밀란 쿤데라': 2,
  '참을수 없는 존재의 가벼움': 2,
};

const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main
        selectedCategory={'모두보기'}
        categoryList={CATEGORY_LIST}
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

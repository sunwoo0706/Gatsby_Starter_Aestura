import { Container } from 'components/Common/Container';
import { graphql } from 'gatsby';

interface ArticleTemplateProps {
  children: React.ReactNode;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ArticleTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
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

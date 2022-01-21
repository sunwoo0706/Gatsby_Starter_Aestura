import { Container } from 'components/Common/Container';
import { graphql } from 'gatsby';
import { ArticleHeader } from 'components/Article/ArticleHeader';
import ArticleContent from 'components/Article/ArticleContent';
import { ArticleFrontmatterType } from 'shared/type';
import CommentWidget from 'components/Article/CommentWidget';

interface ArticlePageType {
  node: {
    html: string;
    frontmatter: ArticleFrontmatterType;
  };
}

interface ArticleTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: ArticlePageType[];
    };
  };
  location: {
    href: string;
  };
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) => {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, categories },
    },
  } = edges[0];

  return (
    <Container title={title} description={summary} url={href}>
      <ArticleHeader title={title} date={date} categories={categories} />
      <ArticleContent html={html} />
      <CommentWidget />
    </Container>
  );
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

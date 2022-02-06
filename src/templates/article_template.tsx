import { Container } from 'components/Common/Container';
import { graphql } from 'gatsby';
import { ArticleHeader } from 'components/Article/ArticleHeader';
import ArticleContent from 'components/Article/ArticleContent';
import { ArticleFrontmatterType, SocialIdType } from 'shared/type';
import CommentWidget from 'components/Article/CommentWidget';
import { WhoMakeThis } from 'components/WhoMakeThis/WhoMakeThis';

interface SiteMetaDateType extends SocialIdType {
  siteTitle: string;
  siteRepo: string;
}

interface ArticlePageType {
  node: {
    html: string;
    frontmatter: ArticleFrontmatterType;
  };
}

interface ArticleTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetaDateType;
    };
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
    site: {
      siteMetadata: { siteTitle, siteRepo, githubId, linkedInId, twitterId },
    },
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
    <Container
      siteTitle={siteTitle}
      title={title}
      description={summary}
      githubId={githubId}
      linkedInId={linkedInId}
      twitterId={twitterId}
      url={href}
    >
      <ArticleHeader title={title} date={date} categories={categories} />
      <ArticleContent html={html} />
      <CommentWidget repo={siteRepo} />
      <WhoMakeThis />
    </Container>
  );
};

export default ArticleTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    site {
      siteMetadata {
        siteTitle
        siteRepo
        githubId
        linkedInId
        twitterId
      }
    }
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

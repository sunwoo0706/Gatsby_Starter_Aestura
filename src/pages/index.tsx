import { Main } from 'components/Main';
import { ArticleType, CategoryListProps } from 'shared/Type';
import { graphql } from 'gatsby';
import queryString, { ParsedQuery } from 'query-string';
import { useMemo } from 'react';
import { Container } from 'components/Common/Container';
import { SocialIdType } from 'shared/type';
import { WhoMakeThis } from 'components/WhoMakeThis/WhoMakeThis';

interface siteMetaDateType extends SocialIdType {
  siteTitle: string;
  description: string;
  siteUrl: string;
}

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: siteMetaDateType;
    };
    allMarkdownRemark: {
      edges: ArticleType[];
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({
  location: { search },
  data: {
    site: {
      siteMetadata: {
        siteTitle,
        description,
        githubId,
        linkedInId,
        twitterId,
        siteUrl,
      },
    },
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
    <Container
      siteTitle={siteTitle}
      title={siteTitle}
      description={description}
      githubId={githubId}
      linkedInId={linkedInId}
      twitterId={twitterId}
      url={siteUrl}
    >
      <Main
        selectedCategory={selectedCategory}
        categoryList={categoryList}
        articles={edges}
      />
      <WhoMakeThis />
    </Container>
  );
};

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        siteTitle
        description
        siteUrl
        githubId
        linkedInId
        twitterId
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
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

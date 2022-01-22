export interface ArticleFrontmatterType {
  title: string
  summary: string
  date: string
  categories: string[]
}

/**
 * Blog content type
 */
export interface ArticleType {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: ArticleFrontmatterType
  }
}

/**
 * CategoryList Props type
 */
export interface CategoryListProps {
    selectedCategory: string;
    categoryList: {
      [key: string]: number;
    };
}

/**
 * Social Id types
 */
export interface SocialIdType {
  githubId: string | null
  linkedInId: string | null
  twitterId: string | null
}
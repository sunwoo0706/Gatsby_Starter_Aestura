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
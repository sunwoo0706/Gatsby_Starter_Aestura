/**
 * CategoryList Props type
 */
export interface CategoryListProps {
    selectedCategory: string;
    categoryList: {
      [key: string]: number;
    };
}
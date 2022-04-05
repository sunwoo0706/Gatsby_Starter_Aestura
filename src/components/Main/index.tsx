import { ArticleList } from './ArticleList';
import { CategoryList } from './CategotyList';
import { CategoryListProps, ArticleType } from 'shared/Type';
import React from 'react';

interface MainProps extends CategoryListProps {
  articles: ArticleType[];
}

export const Main: React.FC<MainProps> = ({
  selectedCategory,
  categoryList,
  articles,
}) => {
  return (
    <React.Fragment>
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <ArticleList selectedCategory={selectedCategory} articles={articles} />
    </React.Fragment>
  );
};

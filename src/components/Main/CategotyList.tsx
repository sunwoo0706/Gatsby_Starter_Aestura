import { css } from '@emotion/react';
import { CategoryTag } from './CategoryTag';
import { CategoryListProps } from 'utils/Type';

const CategoryListStyle = css`
  position: sticky;
  top: 6.25rem;
  display: flex;
  gap: 0.75rem;
  height: fit-content;
  background: white;
  box-shadow: rgb(255, 255, 255) 0 10px 12px 6px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryList: React.FC<CategoryListProps> = ({
  categoryList,
  selectedCategory,
}) => {
  return (
    <div css={CategoryListStyle}>
      {Object.entries(categoryList).map(([name, cnt], i) => (
        <CategoryTag
          name={name}
          selected={name === selectedCategory}
          cnt={cnt}
          key={i}
        />
      ))}
    </div>
  );
};

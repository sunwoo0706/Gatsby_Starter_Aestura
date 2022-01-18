import { css } from '@emotion/react';
import { CategoryTag } from './CategoryTag';

const CategoryListStyle = css`
  position: sticky;
  top: 6.25rem;
  display: flex;
  gap: 0.75rem;
  height: fit-content;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryList: React.FC = () => {
  return (
    <div css={CategoryListStyle}>
      {[...Array(16)].map((n, idx) => (
        <CategoryTag />
      ))}
    </div>
  );
};

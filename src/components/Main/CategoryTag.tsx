import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { pallete } from 'shared/Theme';

interface CategoryTagProps {
  name: string;
  cnt: number;
  selected: boolean;
}

interface CategoryTagWrapperProps {
  selected: boolean;
}

interface GatsbyLinkProps extends CategoryTagWrapperProps {
  children: ReactNode;
  className?: string;
  to: string;
}

const focusCategoryTagStyle = css`
  transition: background 0.4s ease, color 0.4s ease;
  background: #10316b;
  color: white;
`;

const CategoryTagWrapper = styled(({ selected, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryTagWrapperProps>`
  background: white;
  border: 0.125rem solid #10316b;
  color: ${pallete.scheme.secondary};
  border-radius: 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  word-break: keep-all;
  &:hover {
    ${focusCategoryTagStyle}
  }
  ${({ selected }) => selected && focusCategoryTagStyle}
`;

export const CategoryTag: React.FC<CategoryTagProps> = ({
  name,
  cnt,
  selected,
}) => {
  return (
    <CategoryTagWrapper
      selected={selected}
      to={`/?category=${name}`}
      key={name}
    >
      {name.replace(/\s/g, '')}&nbsp;{cnt}
    </CategoryTagWrapper>
  );
};

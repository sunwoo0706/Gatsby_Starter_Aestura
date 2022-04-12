import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Date } from 'components/Common/Date';
import { pallete } from 'shared/Theme';
import { ArticleFrontmatterType } from 'shared/type';

interface ArticleHeaderProps extends Omit<ArticleFrontmatterType, 'summary'> {}

const ArticleHeaderWrapper = styled.div`
  margin-top: 1.5rem;
`;

const H1Style = css`
  font-weight: 600;
  font-size: 3rem;
`;

const ListWrapper = styled.ul`
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  word-break: keep-all;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &,
  li {
    list-style: none;
  }

  li {
    display: inline-block;

    color: ${pallete.scheme.secondary};
    margin-right: 0.75rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  categories,
  date,
}) => {
  return (
    <ArticleHeaderWrapper>
      <h1 css={H1Style}>{title}</h1>
      <ListWrapper>
        {categories.map((category: string, i: number) => (
          <li key={i}>#&nbsp;{category}</li>
        ))}
      </ListWrapper>
      <Date date={date} />
    </ArticleHeaderWrapper>
  );
};

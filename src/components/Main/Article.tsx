import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { ArticleFrontmatterType } from 'shared/type';
import { Date } from 'components/Common/Date';
import { pallete } from 'shared/Theme';

interface ArticleProps extends ArticleFrontmatterType {
  link: string;
}

const Container = styled.article`
  width: inherit;
  &:hover {
    cursor: pointer;
    & > h2 {
      transition: color 0.4s ease;
      color: ${pallete.scheme.secondary};
    }
  }
`;

const H2Style = css`
  width: inherit;
  margin-bottom: 1.4rem;
  font-weight: 600;
  font-size: 2rem;
`;

const PreviewStyle = css`
  width: inherit;
  height: fit-content;
  margin-bottom: 1.4rem;
  font-weight: 400;
  font-size: 1.1rem;
  color: #000;
`;

export const Article: React.FC<ArticleProps> = ({
  title,
  summary,
  date,
  categories,
  link,
}) => {
  return (
    <Link to={link}>
      <Container>
        <h2 css={H2Style}>{title}</h2>
        <p css={PreviewStyle}>{summary}</p>
        <Date date={date} />
      </Container>
    </Link>
  );
};

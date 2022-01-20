import { css } from '@emotion/react';

interface DateProps {
  date: string;
}

const DateStyle = css`
  font-weight: 400;
  font-size: 0.875rem;
  color: #646464;
`;

export const Date: React.FC<DateProps> = ({ date }) => {
  return (
    <p css={DateStyle}>
      <time dateTime={date}>{date.replace(/-/g, '. ')}</time>
    </p>
  );
};

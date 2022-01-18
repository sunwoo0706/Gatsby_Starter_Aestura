import { css } from '@emotion/react';

const ButtonStyle = css`
  background: white;
  border: 0.125rem solid #10316b;
  color: #0b409c;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  word-break: keep-all;
`;

export const CategoryTag: React.FC = () => {
  return <button css={ButtonStyle}>{'typescript'}</button>;
};

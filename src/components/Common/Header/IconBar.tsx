import { css } from '@emotion/react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from 'components/Asset';

const IconBarStyle = css`
  height: 1.875rem;
  display: flex;
  justify-content: space-between;
  gap: 0.875rem;
`;

export const IconBar: React.FC = () => {
  return (
    <nav css={IconBarStyle}>
      <GithubIcon />
      <LinkedInIcon />
      <TwitterIcon />
    </nav>
  );
};

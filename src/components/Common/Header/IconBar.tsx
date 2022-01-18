import { css } from '@emotion/react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from 'components/Asset';

const IconBarStyle = css`
  height: 30px;
  display: flex;
  justify-content: space-between;
  gap: 14px;
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

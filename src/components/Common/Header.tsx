import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { SocialIdType } from 'shared/type';
import { GithubIcon, LinkedInIcon, TwitterIcon } from 'components/Asset';

interface HeaderProps extends SocialIdType {
  title: string;
}

const Container = styled.header`
  position: sticky;
  background: white;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 6.25rem;
  display: grid;
  place-items: center;
  @media (max-width: 54rem) {
    padding: 0 4vw;
  }
`;

const IconBarStyle = css`
  height: 1.875rem;
  display: flex;
  justify-content: space-between;
  gap: 0.875rem;
`;

const Nav = styled.nav`
  width: 100%;
  height: inherit;
  max-width: 50rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H1Style = css`
  font-size: 1.75rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

export const Header: React.FC<HeaderProps> = ({
  title,
  githubId,
  linkedInId,
  twitterId,
}) => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <h1 css={H1Style}>{title}</h1>
        </Link>
        <div css={IconBarStyle}>
          {githubId && (
            <a
              href={`https://github.com/${githubId}`}
              target="_blank"
              rel="nofollow"
              aria-label="깃허브 프로필 바로가기 버튼"
            >
              <GithubIcon />
            </a>
          )}
          {linkedInId && (
            <a
              href={`https://linkedin.com/in/${linkedInId}`}
              target="_blank"
              rel="nofollow"
              aria-label="링크드인 프로필 바로가기 버튼"
            >
              <LinkedInIcon />
            </a>
          )}
          {twitterId && (
            <a
              href={`https://twitter.com/${twitterId}`}
              target="_blank"
              rel="nofollow"
              aria-label="트위터 프로필 바로가기 버튼"
            >
              <TwitterIcon />
            </a>
          )}
        </div>
      </Nav>
    </Container>
  );
};

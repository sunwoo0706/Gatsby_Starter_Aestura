import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IconBar } from 'components/Common/Header/IconList';
import { Link } from 'gatsby';

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

export const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <h1 css={H1Style}>{'이선우'}의 블로그</h1>
        </Link>
        <IconBar />
      </Nav>
    </Container>
  );
};

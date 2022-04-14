import styled from '@emotion/styled';
import { pallete } from 'shared/Theme';

const WhoMakeThisWrapper = styled.div`
  width: 100%;
  margin-top: 1.875rem;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  a {
    transition: color 0.4s;
    color: ${pallete.scheme.secondary};
    text-decoration: underline;
    padding-bottom: 2px;
  }
`;

export const WhoMakeThis: React.FC = () => {
  return (
    <WhoMakeThisWrapper>
      ⓒ sunwoo0706, Built with Gatsby and&nbsp;
      <a
        href={`https://github.com/sunwoo0706/Gatsby_Starter_Aestura`}
        target="_blank"
        rel="nofollow"
      >
        gatsby-starter-aestura
      </a>
      &nbsp;theme.
    </WhoMakeThisWrapper>
  );
};

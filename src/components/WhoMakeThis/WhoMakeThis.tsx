import styled from '@emotion/styled';

const WhoMakeThisWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  a:hover {
    transition: color 0.4s;
    color: #646464;
  }
`;

export const WhoMakeThis: React.FC = () => {
  return (
    <WhoMakeThisWrapper>
      <a
        href={`https://github.com/sunwoo0706/Gatsby_Starter_Aestura`}
        target="_blank"
        rel="nofollow"
      >
        Designed by Gastby_Starter_Aestura
      </a>
    </WhoMakeThisWrapper>
  );
};

import styled from '@emotion/styled';

const WhoMakeThisWrapper = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 22px;
  right: 36px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 70px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 8%);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: scale(1.1);
  }
`;

export const WhoMakeThis: React.FC = () => {
  return (
    <a
      href={`https://github.com/sunwoo0706/Gatsby_Starter_Aestura`}
      target="_blank"
      rel="nofollow"
    >
      <WhoMakeThisWrapper>made by Aestura</WhoMakeThisWrapper>
    </a>
  );
};

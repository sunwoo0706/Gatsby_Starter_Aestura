import styled from '@emotion/styled';
import { Article } from './Article';

const ArticleDummyData = {
  title: '2021년 회고',
  summary:
    '키보드에 없는 한글의 가운데 점(·) 문자를 어떻게 입력하시나요? 특수문자 입력하는 걸 그리 좋아하지 않는데, 자꾸 그럴 일이 생깁니다.',
  date: '2004-07-06',
  link: 'https://github.com/sunwoo0706',
};

const ArticleSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  margin-top: 4rem;
  gap: 4rem;
`;

export const ArticleList: React.FC = () => {
  return (
    <ArticleSection>
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
      <Article {...ArticleDummyData} />
    </ArticleSection>
  );
};

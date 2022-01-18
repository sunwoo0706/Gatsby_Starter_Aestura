import GlobalStyle from 'components/Common/GlobalStyle';
import { Header } from 'components/Common/Header';
import { Main } from 'components/Main';

const IndexPage: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
};

export default IndexPage;

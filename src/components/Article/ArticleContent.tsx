import styled from '@emotion/styled';

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;

  // Markdown Style
  line-height: 1.8;
  font-size: 1rem;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 0.2rem 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 700;
    margin-bottom: 1.875rem;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 5rem;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h1,
  h2,
  h3 {
    word-break: break-word;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 1.875rem 0;
    padding: 0.25rem 0.875rem;
    border-left: 0.125rem solid #000000;
    font-weight: 700;
    word-break: break-word;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 1.25rem;
    padding: 1.875rem 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 6.25rem 0;
  }

  // Adjust Link Element Style
  a {
    color: #0b409c;
    text-decoration: underline;
    word-break: break-word;
  }

  img {
    width: 100%;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 1.875rem 0;
    padding: 0.875rem;
    font-size: 0.875rem;
    border-radius: 0.5rem;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 0.25rem;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }
`;

const ArticleContent: React.FC<PostContentProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ArticleContent;

import { createRef, useEffect } from 'react';
import { css } from '@emotion/react';

interface CommentWidgetProps {
  repo: string;
}

interface UtterancesAttributesType {
  src: string;
  repo: string;
  'issue-term': string;
  label: string;
  theme: string;
  crossorigin: string;
  async: string;
}

const src = 'https://utteranc.es/client.js';

const CommentWidgetWrapper = css`
  padding: 4rem 0;

  p {
    width: 100%;
    padding: 1rem 0;
    font-weight: 800;
    font-size: 1.2rem;
    color: #0b409c;
  }
`;

const CommentWidget: React.FC<CommentWidgetProps> = ({ repo }) => {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'title',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    element.current.appendChild(utterances);
  }, []);

  return (
    <div css={CommentWidgetWrapper}>
      <p>Comments</p>
      <div ref={element} />
    </div>
  );
};

export default CommentWidget;

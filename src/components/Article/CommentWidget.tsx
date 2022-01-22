import { createRef, useEffect } from 'react';

const src = 'https://utteranc.es/client.js';

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

const CommentWidget: React.FC<CommentWidgetProps> = ({ repo }) => {
  const element = createRef<HTMLDivElement>();

  useEffect(() => {
    if (element.current === null || repo === null) return;

    const utterances: HTMLScriptElement = document.createElement('script');

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
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

  return <div ref={element} />;
};

export default CommentWidget;

import { css } from '@emotion/react';
import { pallete } from './Theme';

export const codeHighlightTheme = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #00193a;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1rem;
    margin: 0.5rem 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #eaeef3;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.2rem 0.32rem;
    border-radius: 0.3rem;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #00193a;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: ${pallete.scheme.secondary};
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: ${pallete.scheme.secondary};
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${pallete.scheme.secondary};
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #00193a;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #4c81c9;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: ${pallete.scheme.secondary};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: ${pallete.scheme.secondary};
  }
`;

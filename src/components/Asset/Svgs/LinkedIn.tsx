import { css } from '@emotion/react';
import { pallete } from 'shared/Theme';

const SvgStyle = css`
  &:hover {
    cursor: pointer;
    & > path {
      transition: fill 0.4s ease;
      fill: ${pallete.scheme.secondary};
    }
  }
`;

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={SvgStyle}
  >
    <path
      d="M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15Zm-2.5 20H10v-7.5h2.5V20Zm-1.25-8.614A1.38 1.38 0 0 1 9.875 10a1.38 1.38 0 0 1 1.375-1.386c.76 0 1.375.621 1.375 1.386a1.38 1.38 0 0 1-1.375 1.386Zm10 8.614h-2.497v-3.576c0-2.351-2.503-2.153-2.503 0V20h-2.5v-7.5h2.5v1.366c1.09-2.02 5-2.17 5 1.935V20Z"
      fill="#000"
    />
  </svg>
);

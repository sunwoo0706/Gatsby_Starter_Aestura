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

export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={SvgStyle}
  >
    <path
      d="M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15Zm7.582 12.056c.23 5.05-3.537 10.68-10.205 10.68-2.027 0-3.913-.595-5.502-1.614a7.223 7.223 0 0 0 5.315-1.486 3.598 3.598 0 0 1-3.355-2.494 3.6 3.6 0 0 0 1.622-.06c-1.726-.348-2.918-1.903-2.88-3.567a3.58 3.58 0 0 0 1.627.449A3.596 3.596 0 0 1 8.092 9.17a10.19 10.19 0 0 0 7.4 3.751c-.523-2.245 1.18-4.409 3.5-4.409 1.03 0 1.964.437 2.62 1.134a7.162 7.162 0 0 0 2.28-.871 3.605 3.605 0 0 1-1.58 1.986 7.16 7.16 0 0 0 2.062-.566 7.207 7.207 0 0 1-1.791 1.861Z"
      fill="#000"
    />
  </svg>
);

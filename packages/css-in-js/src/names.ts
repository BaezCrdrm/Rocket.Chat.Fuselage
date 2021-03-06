import hash from '@emotion/hash';

export const createAnimationName = (content: string): string =>
  (content ? `rcx-@${ hash(content) }` : 'none');

export const createClassName = (content: string): string =>
  `rcx-@${ hash(content) }`;

export const escapeName = (animationOrClassName: string): string =>
  animationOrClassName.replace(/@|#|:/g, (char) => `\\${ char }`);

import { ImageProps } from 'next/image';

import CustomCode, { Pre } from '@/components/Code';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

const HeaderImage = (props: ImageProps) => {
  return (
    <NextImage
      alt={props.alt ?? 'header image'}
      className={`w-full max-w-full rounded-md ${props.className ?? ''}`}
      imgClassName='rounded-md'
      width={props.width ?? '100%'}
      height={props.height ?? 'auto'}
      {...props}
    />
  );
};

const RoundedImage = (props: ImageProps) => {
  return (
    <NextImage
      alt={props.alt ?? 'header image'}
      className='mx-auto mt-4 mb-12 max-w-prose rounded-md'
      imgClassName='rounded-md'
      width={props.width ?? '100%'}
      height={props.height ?? 'auto'}
      {...props}
    />
  );
};

const MDXComponents = {
  a: UnderlineLink,
  Image: RoundedImage,
  HeaderImage,
  pre: Pre,
  code: CustomCode,
};

export default MDXComponents;

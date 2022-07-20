import { ImageProps } from 'next/image';

import CustomCode, { Pre } from '@/components/Code';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';

const HeaderImage = (props: ImageProps) => {
  return (
    <NextImage
      alt={props.alt ?? 'header image'}
      className={'w-full' + props.className}
      imgClassName='rounded-md'
      width={props.width ?? '100%'}
      height={props.height ?? 'auto'}
      {...props}
    />
  );
};

const MDXComponents = {
  a: PrimaryLink,
  Image: NextImage,
  HeaderImage,
  pre: Pre,
  code: CustomCode,
};

export default MDXComponents;

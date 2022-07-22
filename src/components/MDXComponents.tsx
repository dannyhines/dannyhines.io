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
      alt={props.alt ?? 'image'}
      className='mx-auto mt-8 mb-12 max-w-prose rounded-md'
      imgClassName='rounded-md'
      width={props.width ?? '100%'}
      height={props.height ?? 'auto'}
      {...props}
    />
  );
};

const MdxRow = (props: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-1 items-start gap-4 sm:grid-cols-2'>
      {props.children}
    </div>
  );
};

const MdxCol = (props: { children: React.ReactNode }) => {
  return <div className='!mb-0 flex flex-col space-y-4'>{props.children}</div>;
};

const MDXComponents = {
  a: UnderlineLink,
  Image: NextImage,
  RoundedImage,
  HeaderImage,
  pre: Pre,
  code: CustomCode,
  MdxRow,
  MdxCol,
};

export default MDXComponents;

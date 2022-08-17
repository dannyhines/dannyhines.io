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

const MdxRow = (props: { children: React.ReactNode }) => {
  return (
    <div className='w-prose grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:items-center'>
      {props.children}
    </div>
  );
};

const MdxCol = (props: { children: React.ReactNode }) => {
  return (
    <div className='not-prose !mb-0 flex flex-col space-y-1 sm:space-y-0'>
      {props.children}
    </div>
  );
};

const GrayBox = (props: { children: React.ReactNode }) => {
  return (
    <div className='mx-1 my-6 rounded-lg border border-gray-300 bg-gray-200 px-4 py-0 text-sm dark:border-gray-700 dark:bg-gray-600/25 md:mx-auto md:w-11/12'>
      {props.children}
    </div>
  );
};

const RoundedImage = (props: ImageProps & { caption?: string }) => {
  return (
    <div className='mx-auto max-w-prose rounded-md'>
      <NextImage
        alt={props.alt ?? 'image'}
        className='w-full'
        imgClassName='rounded-md'
        width={props.width ?? '100%'}
        height={props.height ?? 'auto'}
        {...props}
      />
      {props.caption && (
        <p className='w-prose float-right mx-auto italic'>{props.caption}</p>
      )}
    </div>
  );
};

const MDXComponents = {
  a: UnderlineLink,
  Image: RoundedImage,
  HeaderImage,
  pre: Pre,
  code: CustomCode,
  MdxRow,
  MdxCol,
  GrayBox: GrayBox,
};

export default MDXComponents;

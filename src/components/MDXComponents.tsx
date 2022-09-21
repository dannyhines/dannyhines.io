import CloudinaryImg from '@/components/CloudinaryImage';
import CustomCode, { Pre } from '@/components/Code';
import UnderlineLink from '@/components/links/UnderlineLink';

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

const MDXComponents = {
  a: UnderlineLink,
  CloudinaryImg,
  pre: Pre,
  code: CustomCode,
  MdxRow,
  MdxCol,
  GrayBox: GrayBox,
};

export default MDXComponents;

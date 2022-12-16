import React, { useEffect, useState } from 'react';

import CloudinaryImg from '@/components/CloudinaryImage';
import UnderlineLink from '@/components/links/UnderlineLink';

const imageList = [
  'ai-image1',
  'ai-image3',
  'ai-image6',
  'ai-image7',
  'ai-image2',
  'ai-image9',
  'ai-image4',
  'ai-image5',
  'ai-image8',
  'ai-image10',
];

const TRANSITION_SECONDS = 5;

export const DynamicProfileImage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % imageList.length);
    }, TRANSITION_SECONDS * 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  return (
    <div className='flex w-1/2 max-w-[300px] flex-col sm:w-1/4'>
      <CloudinaryImg
        publicId={'/dannyhines.io/ai-images/' + imageList[currentImageIndex]}
        alt='Portrait of me created using AI'
        className='rounded-full sm:rounded-md sm:p-0'
        width={512}
        height={512}
      />
      <figcaption className='hidden pt-2 text-center text-xs md:block'>
        AI-generated with{' '}
        <UnderlineLink href='https://ai.pfpmaker.com/'>pfpmaker</UnderlineLink>
      </figcaption>
    </div>
  );
};

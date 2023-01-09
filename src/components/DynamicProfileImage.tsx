import React, { useEffect, useState } from 'react';

import CloudinaryImg from '@/components/CloudinaryImage';
import UnderlineLink from '@/components/links/UnderlineLink';

const imageList: string[] = [];
const NUM_IMAGES = 29; // images stored in Cloudinary

for (let i = 0; i < NUM_IMAGES; i++) {
  imageList[i] = `ai-image${i + 1}`;
}

const TRANSITION_SECONDS = 6;

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
    <div>
      <CloudinaryImg
        publicId={'/dannyhines.io/profile-imgs/' + imageList[currentImageIndex]}
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

import { ImageProps } from "next/image";

import NextImage from "@/components/NextImage";

export const RoundedImage = (props: ImageProps) => {
  return (
    <NextImage
      alt={props.alt ?? "image"}
      className="mx-auto mt-4 mb-8 max-w-prose rounded-md"
      imgClassName="rounded-md"
      width={props.width ?? "100%"}
      height={props.height ?? "auto"}
      {...props}
    />
  );
};

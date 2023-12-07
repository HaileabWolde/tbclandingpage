import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

type CardProps = {
  clientName: string | null;
  cardClass: string;
  imageWrapperClass: string;
  imageAlt: string;
  imageSrc: string;
  textWrapperClass?: string;
  cover?: string;
  children?: React.ReactNode;
};

export const Card = ({
  clientName,
  cardClass,
  imageWrapperClass,
  imageAlt,
  imageSrc,
  textWrapperClass,
  children,
  cover,
  ...rest
}: CardProps) => {
  return (
    <>
      <div className={cardClass} {...rest} style={{ marginRight: "25px" }}>
        <Image
          className={imageWrapperClass}
          objectCover={cover}
          alt={imageAlt}
          image={imageSrc}
        />

        <div className={textWrapperClass}>{children}</div>
      </div>
      <Text
        as="h1"
        className="lg:text-3xl md:text-2xl text-2xl text-color5 font-medium pl-10"
      >
        {clientName}
      </Text>
    </>
  );
};

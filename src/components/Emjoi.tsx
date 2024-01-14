import bullseye from "../assets/bullseye.webp";
import thumbUp from "../assets/thumbsUp.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emjoi = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emjoiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emjoiMap[rating]} marginTop={1} />;
};

export default Emjoi;

import { Heading } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import usePlatfrom from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { genreId, platformId } = useGameQueryStore(
    useShallow((s) => ({
      genreId: s.gameQuery.genreId,
      platformId: s.gameQuery.platformId,
    }))
  );
  const genre = useGenre(genreId);
  const platform = usePlatfrom(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatfrom from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const {
    data: { results: platforms },
    error,
  } = usePlatforms();

  const { selectedPlatformId, setSelectedPlatformId } = useGameQueryStore(
    useShallow((s) => ({
      selectedPlatformId: s.gameQuery.platformId,
      setSelectedPlatformId: s.setPlatformId,
    }))
  );

  const selectedPlatform = usePlatfrom(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      {" "}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

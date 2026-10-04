import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { type Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;
  if (isLoading) return <Spinner size="sm" />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      {/* Scrollable list matching the Genre dropdown style */}
      <MenuList maxHeight="300px" overflowY="auto">
        <MenuItem onClick={() => onSelectPlatform(null)}>
          All Platforms
        </MenuItem>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            fontWeight={
              platform.id === selectedPlatform?.id ? "bold" : "normal"
            }
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

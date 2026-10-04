// import {
//   Button,
//   Heading,
//   HStack,
//   Image,
//   List,
//   ListItem,
//   Spinner,
// } from "@chakra-ui/react";
// import useGenres, { type Genre } from "../hooks/useGenres";
// import getCroppedImageUrl from "../assets/image-url";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenre: Genre | null;
// }
// const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
//   const { data, isLoading, error } = useGenres();

//   if (error) return null;

//   if (isLoading) return <Spinner></Spinner>;

//   return (
//     <>
//       <Heading fontSize="2xl" marginBottom={3}>
//         Genres
//       </Heading>
//       <List>
//         {data.map((genre) => (
//           <ListItem key={genre.id} paddingY="5px">
//             <HStack>
//               <Image
//                 boxSize="32px"
//                 borderRadius={8}
//                 objectFit="cover"
//                 src={getCroppedImageUrl(genre.image_background)}
//               ></Image>
//               <Button
//                 whiteSpace="normal"
//                 textAlign="left"
//                 fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
//                 onClick={() => onSelectGenre(genre)}
//                 fontSize="lg"
//                 variant="link"
//               >
//                 {genre.name}
//               </Button>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default GenreList;

import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../assets/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (error) return null;
  if (isLoading) return <Spinner />;

  // Render Mobile Dropdown Selector
  if (isMobile) {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedGenre?.name || "Genres"}
        </MenuButton>
        <MenuList maxHeight="300px" overflowY="auto">
          <MenuItem onClick={() => onSelectGenre(null as unknown as Genre)}>
            All Genres
          </MenuItem>
          {data.map((genre) => (
            <MenuItem
              key={genre.id}
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              <HStack spacing={3}>
                <Image
                  boxSize="24px"
                  borderRadius={4}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <span>{genre.name}</span>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  // Render Desktop Vertical Sidebar
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

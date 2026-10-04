import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        {/* Sidebar visible ONLY on desktop screens */}
        <GridItem
          area="aside"
          paddingX={5}
          display={{ base: "none", lg: "block" }}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>

        <GridItem area="main">
          <Box paddingX={{ base: 4, lg: 2 }}>
            {/* Centered Heading on Mobile, Left-aligned on Desktop */}
            <Box textAlign={{ base: "center", lg: "left" }}>
              <GameHeading gameQuery={gameQuery} />
            </Box>

            {/* Filter Bar */}
            <Flex
              marginBottom={5}
              flexWrap="wrap"
              gap={3}
              justifyContent={{ base: "center", lg: "flex-start" }}
            >
              {/* Dropdown Genre Selector for Mobile */}
              <Box display={{ base: "block", lg: "none" }}>
                <GenreList
                  selectedGenre={gameQuery.genre}
                  onSelectGenre={(genre) =>
                    setGameQuery({ ...gameQuery, genre })
                  }
                />
              </Box>

              {/* Scrollable Platform Dropdown */}
              <Box>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>

              {/* Sort Order Dropdown */}
              <Box>
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </Box>
            </Flex>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

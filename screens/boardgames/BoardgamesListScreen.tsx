import React from "react";
import { useInfiniteQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { Text, Card, Heading, Pressable, Button, Box } from "native-base";

import { getBoardGamesList } from "@services/api/bgg";
import Container from "@components/common/Container";
import { IBoardgame } from "@ts/interfaces/IBoardgame";

const BoardgamesListScreen = () => {
  const [page, setPage] = React.useState(0);
  const navigation = useNavigation();

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    "boardgames",

    ({ pageParam = 1 }) => getBoardGamesList(pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => lastPage.page,
    }
  );

  console.log(data?.pages);

  return (
    <Container>
      <Text>Boardgames List</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error</Text>
      ) : (
        <Box>
          {data?.pages?.games.map((game: IBoardgame, i: number) => {
            const bgColor = i % 2 === 0;
            const extraPadding = i % 2 === 0;

            return (
              <Pressable
                key={game.id}
                onPress={() =>
                  navigation.navigate("Boardgame", {
                    boardgameId: game.id,
                    boardgame: game,
                  })
                }
              >
                <Card>
                  <Heading>{game.name}</Heading>
                  <Text></Text>
                  <Text></Text>
                </Card>
              </Pressable>
            );
          })}
        </Box>
      )}
      <Button
        onPress={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </Button>
      <Text>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</Text>
    </Container>
  );
};

export default BoardgamesListScreen;

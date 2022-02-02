import React from "react";
import { View, Text } from "react-native";
import Container from "@components/common/Container";
import { useQuery } from "react-query";
import { getBoardGamesList } from "@services/api/bgg";

const BoardgamesListScreen = () => {
  const [page, setPage] = React.useState(0);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery<any[], Error>(
      ["boardgames", page],
      () => getBoardGamesList(page),
      {
        keepPreviousData: true,
      }
    );

  console.log(data);

  return (
    <Container>
      <View>
        <Text>Boardgames List</Text>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text>Error: {error?.message}</Text>
        ) : (
          <View>
            {data?.games?.map((game) => (
              <Text key={game.id}>{game.name}</Text>
            ))}
          </View>
        )}
      </View>
    </Container>
  );
};

export default BoardgamesListScreen;

import { useQuery } from "react-query";
import { FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { FeatureContainer, Image, Title } from "./style";
import { api } from "../../axiosConfig/api";

type Props = {
  title: string;
  params: string;
};

type Data = {
  id: number;
  poster_path: string;
};

export default function FeatureMovieTV({ title, params }: Props) {
  const { data, isLoading } = useQuery<Data[]>([title], async () => {
    const response = await api.get(params);
    return response.data.results;
  });

  return (
    <FeatureContainer>
      <Title>{title}</Title>
      {isLoading && <ActivityIndicator size="large" color="#00b9e7" />}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.poster_path}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              resizeMode="center"
              borderRadius={11}
              source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </FeatureContainer>
  );
}

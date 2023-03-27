import { useQuery } from "react-query";

import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  DestaquesContainer,
  ImageDestaque,
  LogoContainer,
  MenuContainer,
  MenuTitle,
  PrimeText,
  StyledView,
  VideoText,
} from "./style";
import { api } from "../../axiosConfig/api";

import FeatureMovieTV from "../../components/Features";

type Data = {
  id: number;
  original_title: string;
  poster_path: string;
};

export default function Home() {
  const { data, isLoading } = useQuery<Data[]>(["/movie/top_rated"], async () => {
    const response = await api.get("movie/top_rated");
    return response.data.results;
  });

  return (
    <StyledView>
      <LogoContainer>
        <PrimeText>prime</PrimeText>
        <VideoText>video</VideoText>
      </LogoContainer>

      <MenuContainer>
        <ScrollView horizontal>
          <TouchableOpacity>
            <MenuTitle>Home</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>Originals</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>TV</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>Movies</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>Kids</MenuTitle>
          </TouchableOpacity>
        </ScrollView>
      </MenuContainer>

      <DestaquesContainer>
        {isLoading && <ActivityIndicator size="large" color="#00b9e7" />}
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={5}
          keyExtractor={(item) => item.poster_path}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ImageDestaque
                resizeMode="stretch"
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </DestaquesContainer>

      <FeatureMovieTV title='Amazon Originals' params='/movie/upcoming' />

      <FeatureMovieTV title='Amazon TV' params='/tv/popular' />

      <FeatureMovieTV title='Top Rated' params='/tv/top_rated' />
    

    </StyledView>
  );
}

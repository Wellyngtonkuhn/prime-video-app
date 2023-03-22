import { useQuery } from "react-query";

import { FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
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

type Data = {
  id: Number;
  original_title: String;
  backdrop_path: String;
  poster_path: String;
};

export default function Home() {
  const { data, isLoading } = useQuery(["movie/now_playing"], async () => {
    const response = await api.get("movie/now_playing");
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
            <MenuTitle>Página inicial</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>Originais</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>Séries</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>Filmes</MenuTitle>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuTitle>Infantil</MenuTitle>
          </TouchableOpacity>
        </ScrollView>
      </MenuContainer>

      <DestaquesContainer>
        {isLoading && <ActivityIndicator size="large" color="#00b9e7" /> }
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={5}
          keyExtractor={(item) => item.id}
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


      
    </StyledView>
  );
}

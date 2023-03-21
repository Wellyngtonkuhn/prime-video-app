import { TouchableOpacity, Text } from 'react-native'
import { DestaquesContainer, LogoContainer, MenuContainer, MenuTitle, PrimeText, StyledView, VideoText } from './style'


export default function Home() {

  return (
    <StyledView>
        <LogoContainer>
            <PrimeText>prime</PrimeText>
            <VideoText>video</VideoText>
        </LogoContainer>  

        <MenuContainer>
          <TouchableOpacity>
            <MenuTitle>
                Página inicial
            </MenuTitle>
          </TouchableOpacity>  
          <TouchableOpacity>
            <MenuTitle>
                Séries
            </MenuTitle>
          </TouchableOpacity>  
          <TouchableOpacity>
            <MenuTitle>
                Filmes
            </MenuTitle>
          </TouchableOpacity>  
          <TouchableOpacity>
            <MenuTitle>
                Infantil
            </MenuTitle>
          </TouchableOpacity>  
        </MenuContainer>  

        <DestaquesContainer>
          {/* Carrossel de destaques */}
        </DestaquesContainer>


    </StyledView>
  )
}
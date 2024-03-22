import { View, StyleSheet } from "react-native";
import TouristLocation from "./src/components/TouristLocation";
export default function App() {
  const ImgLocal = {
    uri: "https://fuinessaviagem.com/wp-content/uploads/2019/03/tamanho-beto-carrero-world-1024x614.jpg",
  };
  return (
    <TouristLocation
      name={"Beto Carrero World"}
      imageSource={ImgLocal}
      address={
        "Endereço: Rod. Beto Carrero World - Praia de Armação do Itapocorói, Penha - SC, 88385-000"
      }
      description={
        "o Beto Carrero World é um complexo de divertimento temático com teatros que apresentam espetáculos diários, brinquedos radicais e um zoológico. Trabalham ali mais de 1 100 pessoas, entre artistas e funcionários."
      }
    />
  );
}
export const styles = StyleSheet.create({
  nome: {
    fontSize: 30,
    margin: 10,
  },
  imagem: {
    height: 500,
    width: 500,
  },
  endereço: {
    fontSize: 25,
    color: "#add8e6",
    margin: 10,
  },
  descrição: {
    fontSize: 20,
    color: "#a9a9a9",
    marginHorizontal: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

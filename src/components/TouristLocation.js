import { Text, Image, View } from "react-native";
import { styles } from "../../App";

export default function TouristLocation({
  name,
  address,
  description,
  imageSource,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{name}</Text>
      <Image source={imageSource} style={styles.imagem} />
      <Text style={styles.endereço}>{address}</Text>
      <Text style={styles.descrição}>{description}</Text>
    </View>
  );
}

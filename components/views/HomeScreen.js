import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={estilos.container}>
      <View style={{backgroundColor: "blue", width: "100%", alignItems: "center"}}><Image
        style={{ height: 50, width: 100}}
        source={{
          uri: 'https://funbbe.br/wp-content/uploads/2023/01/Sem-nome-1920-%C3%97-900-px-5.png',
        }}
      /></View>
      <Text style={estilos.titulo}>SEJA BEM-VINDO A FUNBBE!</Text>


      {/*Inicio da imagem*/}
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            height: 200,
            width: 200,
            display: "flex",
          }}
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20240218/original/pngtree-3d-kids-go-to-school-vector-transparent-background-png-image_14353716.png',
          }}
        />
      </View>
      {/*Fim da imagem*/}

      <Text style={estilos.titulo}>A MELHOR ESCOLA</Text>

      <View><Text style={estilos.corpo}>A Escolas Integradas ”Prof. Nivaldo Salch Stipp” é mantida pela FunBBE (Fundação Barra Bonita de Ensino), e tem sua sede na cidade de Barra Bonita, no interior do estado de São Paulo. Fundada em 1963, era conhecida como Colégio Comercial de Barra Bonita, não possuindo ainda uma estrutura bem definida. Somente em 1966 surge como personalidade jurídica, adequando-se à Lei 493 do ano em vigência, sancionada pelo então prefeito da época, Dr. Clodoaldo Antonângelo. Passa então a dispor sobre a criação da Fundação Barra Bonita de Ensino, ou como é popularmente conhecida, FunBBE, que passa a ser a instituição mantenedora do Colégio Comercial e dos demais cursos implementados por ela.</Text></View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    alignItems: "center",
    paddingRight: 10
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 23,
    display: "flex",
    textAlign: "center",
    padding: 20
  },
  corpo: {
    display: "flex",
    textAlign: "justify",
    padding: 15,
    fontSize: 15
  }

})
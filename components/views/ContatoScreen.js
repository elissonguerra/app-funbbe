import { Image, StyleSheet, Text, View } from "react-native";

export default function ContatoScreen(props) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>CONTATO</Text>
            <Text style={estilos.titulo}>FALE CONOSCO</Text>
            <Text style={estilos.corpo}>contato@funbbe.br</Text>
            <Text style={{textAlign: "center"}}>(14) 3641-2100</Text>
            <Text style={{textAlign: "center"}}>(14) 3641-9711</Text>

            <View style={estilos.localizacao}>
            <Text style={estilos.titulo}>LOCALIZAÇÃO</Text>
            <Text style={estilos.corpo}>Rua João Gerin, Nº 275 – Vila Operária Barra Bonita | 17340-190 | São Paulo, Brasil.</Text>
            <View style={estilos.imagem}>
                <Image
                style={{ height: 200, width: 200, display: "flex", alignItems: "center", justifyContent: "center" }}
                source={{
                    uri: 'https://img.freepik.com/vetores-premium/mapa-de-localizacao-dobrado-com-marcador-mapa-da-cidade-com-ponteiro-de-alfinete_349999-746.jpg',
                }}
            /></View></View>

        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 50,
        backgroundColor: "white"
    },

    titulo: {
        fontWeight: "bold",
        fontSize: 23,
        display: "flex",
        textAlign: "center",

    },
    subtitulo: {
        fontWeight: "bold",
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    corpo: {
        paddingTop: 10,
        textAlign: "center"
    },
    localizacao: {
        paddingTop: 100
    },
    imagem: {
        paddingTop: 50,
        height: 200,
        width: "100%",
        display: "flex",
        alignItems: "center"
    }
})
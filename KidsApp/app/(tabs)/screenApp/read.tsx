import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function Read() {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/read.png")} style={styles.image} />
            <Text style={styles.textRead}>Read</Text>
            <Text style={styles.textInterest}>A lot of interesting books on your favorite topics!</Text>
            <Image style={styles.ellipseBackground} source={require("../../../assets/images/background-ellipse.png")} />
            <TouchableOpacity style={styles.buttonContinueRead}>
                <LinearGradient
                    colors={['#8142EF', '#B566F2']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonContinueRead}>
                    <Text style={styles.textButtonContinueRead}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.textSkip}>Skip</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: 450,
        height: 844,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 40
    },
    image: {
        width: 340,
        height: 323,
    },
    textRead: {
        color: "#461D8D",
        fontSize: 30,
        textAlign: "center",
        fontFamily: "Nunito",
        fontWeight: 700,
    },
    textInterest: {
        textAlign: "center",
        fontWeight: 700,
        fontFamily: "Nunito",
        width: 270,
        height: 50
    },
    ellipseBackground: {
        position: "absolute",
        left: 0,
        bottom: 80,
    },
    buttonContinueRead: {
        width: 317,
        height: 63,
        boxShadow: "0px 6px 23px 0px #7A39EB5C",
        borderRadius: 40,
    },
    textButtonContinueRead: {
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily:"Nunito",
        fontSize:23,
        fontWeight:700
    },
    textSkip:{
        color:"#461D8D",
        fontFamily:"Nunito",
        fontWeight:500,
        fontSize:22,

    }
})
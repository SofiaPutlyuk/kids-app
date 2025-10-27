import { TouchableOpacity , Text , Image , StyleSheet  , View} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
export default function onBoarding(){
const [step , setStep] = useState(0)
const router = useRouter()
const screen = [
    {
        title:"Read",
        image:require("../assets/images/read.png"),
        text:"A lot of interesting books on your favorite topics!"
    },
    {
        title:"Explore",
        image:require("../assets/images/explore.png"),
        text:"Big library of different articles and videos!"
    },
    {
        title:"Grow",
        image:require("../assets/images/grow.png"),
        text:"Earn start and grow your own mosnter!"
    }
]
  const handleContinue = () => {
    if (step < 2) setStep(step + 1);
    else router.push("/home"); // після останнього екрана перехід далі
  };
const current = screen[step]
return(
    <View style={styles.container}>
    <Image source={current.image} style={styles.image}/>
    <Text style={styles.title}>{current.title}</Text>
    <Text style={styles.textInterest}>{current.text}</Text>
     <Image style={styles.ellipseBackground} source={require("../assets/images/background-ellipse.png")} />

      <TouchableOpacity onPress={handleContinue} style={styles.button}>
        <LinearGradient
          colors={["#8142EF", "#B566F2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {step === 2 ? "Finish" : "Continue"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        width:450,
        height:844,
        backgroundColor:"white",
        display:"flex",
        alignItems:"center",
        gap:20,
    },
    image:{
         width: 340,
        height: 323,
    },
      title: {
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
        height: 50,
    },
       ellipseBackground: {
        position: "absolute",
        left: 0,
        bottom: 80,
    },
    button: {
        width: 317,
        height: 63,
        boxShadow: "0px 6px 23px 0px #7A39EB5C",
        borderRadius: 40,
    },
     buttonText: {
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
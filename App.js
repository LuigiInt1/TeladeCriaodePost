import React, { useState, useEffect, useRef } from "react";
import {Text, Animated,View,StyleSheet,Image,TextInput,SafeAreaView,ScrollView,TouchableOpacity, Linking
} from "react-native";
import DescricaoComponent from "./TextoDescrição";


export default function App(){
  const [viewIndex, setViewIndex] = useState(1); // estado inicial é a view 1

  const handleButtonPress = (index) => {
    setViewIndex(index); // atualiza o estado com o index do botão pressionado
  };
return(
  
<View style = {styles.container}>

  <View style = {styles.topo}>
    <View style = {styles.viewLogo}>
          <Image
            style={styles.logo}
            source={require("./assets/logo.png")}
          />
    </View>

    <View style = {styles.viewTitulo}>
      <Text style = {styles.titulo}>WorkPlus</Text>
    </View>
  </View>

  <View style = {styles.viewBotoesNavegacao}>

          <View style = {styles.viewBotaoServico}>
          <TouchableOpacity onPress={() => handleButtonPress(2)}
          >
            <Text style={styles.BotaoServicos}>Trabalho</Text>
          </TouchableOpacity>
          </View>

          <View style = {styles.viewBotaoTrabalho}>
          <TouchableOpacity onPress={() => handleButtonPress(3)}
          >
            <Text style={styles.BotaoTrabalho}>Serviço</Text>
          </TouchableOpacity>
          </View>

  </View>

  <View style = {styles.containerCriação}>


  {viewIndex === 2 && (
    <View style = {styles.viewCriarPostTrabalho}>
      <View style = {styles.viewMaior}>
        <View style = {styles.viewTipoServiço}>
        <Text style = {styles.BaseTipoDeServiço}>Tipo de Serviço</Text>
        </View>

        <View style = {styles.viewImputTipoServiço}>
          <TextInput multiline style = {styles.BaseImputTipoDeServiço}>

          </TextInput>
        </View>
        <View style = {styles.viewImagemTipoServiço}>
        <Image
            style={styles.logo}
            source={require("./assets/Engrenagem.png")}
          />
        </View>
        
      </View>
      <View style = {styles.viewMaior}>
        <View style = {styles.viewEndereço}>
        <Text style = {styles.BaseEndereço}>Endereço</Text>
        </View>
        <View style = {styles.viewImputEndereço}>
          <TextInput multiline style = {styles.BaseImputEndereço}>

          </TextInput>
        </View>
        <View style = {styles.viewImagemTipoServiço}>
        <Image
            style={styles.ImagemLozalização}
            source={require("./assets/Localização.png")}
          />
        </View>
      </View>

      <View style = {styles.viewForaMenor}>
        <View style = {styles.viewMenor}>
        <View style = {styles.viewData}>
        <Text style = {styles.BaseData}>Data de Início</Text>
        </View>
        <View style = {styles.viewImputData}>
          <TextInput multiline style = {styles.BaseImputData}>

          </TextInput>
        </View>
        <View style = {styles.viewImagemData}>
        <Image
            style={styles.ImagemData}
            source={require("./assets/Calendario.png")}
          />
        </View>
        </View>
      </View>
      <View style = {styles.viewMaior}>

      </View>
      <View style = {styles.viewMaior}>

      </View>
      <View style = {styles.viewTextoDescrição}>
        <Text style = {styles.TextoDescrição}>Descrição</Text>
      </View>
      <View style = {styles.viewDescrição}>
      <DescricaoComponent/>
      </View>
    </View>
  )}

{viewIndex === 3 && (
    <View style = {styles.viewCriarPostServiço}>

    </View>
  )}
  </View>
  <View style={styles.baixo}>
        <View style={styles.suasOfertas}>
          <TouchableOpacity
            onPress={() => console.log("Custom button pressed")}
          >
            <Text style={styles.botaoSuasOfertas}>Suas Ofertas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.casinha}>
          <Image
            style={styles.iconeCasinha}
            source={require("./assets/casinha.png")}
          />
        </View>
        <View style={styles.suasDemandas}>
          <TouchableOpacity
            onPress={() => console.log("Custom button pressed")}
          >
            <Text style={styles.botaoSuasPrestacoes}>Suas Prestações</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.usuarioBaixo}>
          <Image
            style={styles.iconeUsuario}
            source={require("./assets/Menu.png")}
          />
        </View>
      </View>
</View>
)}

const styles = StyleSheet.create({

container:{
height:800,
width:'100%',
//backgroundColor: 'blue'
},
topo:{
  paddingRight:'1%',
  paddingTop:'18%',
  alignItems:"center",
  justifyContent:'center',
  height:'22%',
  width:'100%',
  flexDirection: "row",
  //backgroundColor: 'red'
},
viewTitulo:{
  alignItems:"center",
  justifyContent:'center',
  height:'100%',
  width:'55%',
  //backgroundColor: 'red'

},
titulo:{
fontSize:50
},
viewLogo:{
  alignItems:"center",
  justifyContent:'center',
  height:'100%',
  width:'31%',
  //backgroundColor: 'blue'
 
},
logo:{
  height:'77%',
  width:'77%',
},
viewBotoesNavegacao:{
  justifyContent:'space-evenly',
  marginTop:"6%",
  flexDirection:'row',
  height: "7%",
  width: "100%",
 
 },
 viewBotaoServico:{
  paddingLeft:"3%",
  height: "100%",
  width: "33.3%",
   alignItems:'center',
  justifyContent:'center',
  
 },
 viewBotaoInfo:{
  alignItems:'center',
  justifyContent:'center',
  height: "100%",
  width: "33.4%",
  paddingLeft:"1%",
 },
 viewBotaoTrabalho:{
  
  height: "100%",
  width: "33.3%",
   alignItems:'center',
  justifyContent:'center',

 },
 BotaoServicos: {
  width: "100%",
  fontSize: 20.5,
  borderRadius: 12,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 15,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BotaoTrabalho: {
  width: "100%",
  fontSize: 21.5,
  borderRadius: 12,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 15,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
ImagemUsuario:{
  height:55 ,
  width:55
},
containerCriação:{
flex:10,
justifyContent:'center',
alignItems:'center',
},
viewCriarPostTrabalho:{
  paddingTop:'8%',
  height:'100%',
  width:'100%',
  alignItems:'center',
},
viewCriarPostServiço:{
  paddingTop:'8%',
  height:'100%',
  width:'100%',
  backgroundColor: '#AECAFF'
},
viewMaior:{
  flexDirection:'row',
  marginBottom:'5%',
  borderRadius: 7,
  height:'8%',
  width:'90%',
  backgroundColor: '#AECAFF',
  opacity: 0.5
},
viewForaMenor:{
  marginBottom:'5%',
  height:'8%',
  width:'100%',
},
viewMenor:{
  flexDirection:'row',
  marginLeft:'5%',
  marginBottom:'5%',
  borderRadius: 7,
  height:'100%',
  width:'68%',
  backgroundColor: '#AECAFF',
  opacity: 0.5
},
viewTextoDescrição:{
  paddingLeft:'6%',
  justifyContent:'center',
  width:'100%',
  height:'5%',
},
TextoDescrição:{
fontSize:17,
fontWeight: 'bold'
},
viewDescrição:{
  fontSize:44,
  paddingLeft:'3%',
  paddingRight:'3%',
  paddingBottom:'4%',
  paddingTop:'2%',
  marginBottom:'5%',
  borderRadius: 7,
  width:'90%',
  flex:1,
  backgroundColor: '#AECAFF',
  opacity: 0.5
},
viewTipoServiço:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'40%',
  
},
viewImputTipoServiço:{
  paddingBottom:'0.77%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'50%',
},
viewImagemTipoServiço:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'10%',
 // backgroundColor: 'blue'
},
BaseTipoDeServiço: {
  fontWeight: 'bold',
  width: "93%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputTipoDeServiço: {
  fontWeight: 'bold',
  width: "93%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
viewEndereço:{
  //backgroundColor:'red',
  paddingLeft:'1.5%',
  justifyContent:'center',
  height:'100%',
  width:'30%',
  
},
viewImputEndereço:{
  //backgroundColor: 'blue',
  paddingBottom:'0.77%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'60%',
},
viewImagemEndereço:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'10%',
 // backgroundColor: 'blue'
},
BaseEndereço: {
  fontWeight: 'bold',
  width: "90%",
  fontSize: 17.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputEndereço: {
  fontWeight: 'bold',
  width: "96%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
ImagemLozalização:{
  height:'80%',
  width:'57%',
},
viewData:{
  
  paddingLeft:'1.5%',
  justifyContent:'center',
  height:'100%',
  width:'48%',
  
},
viewImputData:{
  
  paddingBottom:'0.77%',
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'38%',
},
viewImagemData:{
  alignItems:'center',
  justifyContent:'center',
  height:'100%',
  width:'15%',
  
},
BaseData: {
  fontWeight: 'bold',
  width: "95%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputData: {
  fontWeight: 'bold',
  width: "96%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
ImagemData:{
  height:'80%',
  width:'69%',
},


BaseTipoDeServiço: {
  fontWeight: 'bold',
  width: "93%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  paddingTop: 2,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
BaseImputTipoDeServiço: {
  fontWeight: 'bold',
  width: "93%",
  fontSize: 16.5,
  borderRadius: 4,
  paddingLeft: 8,
  paddingRight: 6,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},













baixo: {
  flex: 1,
  flexDirection: "row",
  backgroundColor: "#A5C4FF",
  borderRadius:15,
  borderBottomLeftRadius: 0, 
  borderBottomRightRadius: 0 
},
suasOfertas: {
  height: "100%",
  width: "34%",
  justifyContent: "center",
  alignItems: "center",
},
casinha: {
  paddingRight: "2%",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "15%",
},
suasDemandas: {
  height: "100%",
  width: "35%",
  justifyContent: "center",
  alignItems: "center",
},
usuarioBaixo: {
  height: "100%",
  width: "16%",
  justifyContent: "center",
  alignItems: "center",
},
botaoSuasPrestacoes: {
  width: "100%",
  fontSize: 16.5,
  borderRadius: 12,
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 14,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
iconeCasinha: {
  height: "73%",
  width: "70%",
},
botaoSuasOfertas: {
  width: "100%",
  fontSize: 16,
  borderRadius: 12,
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 15,
  borderBottomColor: "#1A397B",
  borderBottomWidth: 2,
  backgroundGradient: {
    colors: ["black", "#ffffff"],
    start: { x: 1, y: 2 },
    end: { x: 1, y: 1 },
  },
},
iconeUsuario: {
  height: "55%",
  width: "60%",
},
})
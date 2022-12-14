import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import Card  from "../components"
import { COLORS, SIZES, FONTS, SHADOW } from "../constants"

//Paginas

//firebase
import firebase from '../../config/firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

//navigation
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        //paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F2E9E4",
        paddingTop: 50
    },
    textBoxWrapper: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 19
    },
    textInput: {
        shadowColor:"#D8BD8A",
        elevation: 5,
        shadowOffset: { width: 2, height: 12 },
        shadowRadius: 12,
        borderRadius: 25,
        backgroundColor: "#D8BD8A",
        height: 60,
        paddingLeft: 15,
        width: "90%",
        color: "#F2E9E4",
        marginRight: 15,
        h2_semiBold: {fontSize: 20},
    },
    btn: {
        shadowColor:"#D8BD8A",
        elevation: 5,
        shadowOffset: { width: 2, height: 12 },
        shadowRadius: 12,
        backgroundColor: "#AA5042",
        height: 45,
        width: 45,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default function Login() {

    //State variables
    const [user, setuser] = useState("teste@gmail.com")
    const [password, setpassword] = useState("123456")

    const logar = async()=>{ 
        try {
            let credenciais = await signInWithEmailAndPassword(getAuth(), user, password)
            let credenciais2 = await createUserWithEmailAndPassword(getAuth(),user,password)
            if (credenciais) {
                console.log("Tem cadastro")
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    return <View styles={styles.container}>
       
            <View style={styles.textBoxWrapper}>
                <Text style={{ h1_semiBold: {fontSize: 24}, color: "#D8BD8A", marginBottom: 15, marginTop: 35 }}>Email</Text>
                <TextInput 
                style={styles.textInput}
                placeholder="email@email.com" keyboardType="email-address"/>

                <Text style={{h1_semiBold: {fontSize: 24}, color: "#D8BD8A", marginBottom: 15, marginTop: 35 }}>Senha</Text>
                <TextInput 
                style={styles.textInput}
                placeholder="senha" keyboardType="password"/>
                <TouchableOpacity onPress={logar}>
                    <Text style={{h1_semiBold: {fontSize: 24}, color: "#D8BD8A", marginBottom: 15, marginTop: 35 }}>Log in</Text>
                </TouchableOpacity>
            </View>
        
    </View>
}





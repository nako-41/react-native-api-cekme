import { white } from "color-name";
import React, {Component, useState} from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from "react-native";


export default function Inputs() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleEmail = (text) => {
        setEmail(text);
    };

    const handlePassword = (text) => {
        setPassword(text);
    };

    const handleName = (text) => {
        setName(text);
    }

    const handlelastName = (text) =>{
        setLastName(text);
    }

    const login = (email, pass,name,lastName) => {
        alert("email: " + email+" - " + "password : "  + pass +  " - " + " Name "  + name + " - " + " Soyadı " + lastName);
    };


    return(

        <View style={styles.container}>


              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Name"
                placeholderTextColor="nane"
                onChangeText={handleName}
             />

             <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="lastName"
                placeholderTextColor="nane"
                onChangeText={handlelastName}
             />

         
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="nane"
                onChangeText={handleEmail}
            />

            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                onChangeText={handlePassword}
            />
            
    
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => login(email, password,name)}
            >
                <Text style={styles.submitButtonText}>SUBMİT</Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.resetButton}
                onPress={() => login(email, password,name)}
            >
                <Text style={styles.resetButtonText}>RESET</Text>
            </TouchableOpacity>

        </View>
    );
    
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 30,
        borderColor: "#7a42f4",
        borderWidth: 1,
        width: "20%",
    },
    submitButton : {
        backgroundColor: "#7a42f4",
        padding: 10,
        margin: 15,
        height: 40,
        textAlign: "center"
    },
    resetButton : {
        backgroundColor: "#008000",
        padding: 10,
        margin: 15,
        height: 40,
        textAlign: "center"
    },
    submitButtonText : {
        color: "white",
    },
});
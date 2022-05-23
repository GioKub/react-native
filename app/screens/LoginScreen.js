import { StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

import Screen from '../components/Screen'
import { Image } from 'react-native'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

export default function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}></Image>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Passoword"
                            //same as secureTextEntry={true}
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container} from "../../components/UI/Container/Container";

export default function Home() {
    return (
        <Container><Text>Home</Text>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

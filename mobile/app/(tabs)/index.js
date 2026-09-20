import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const codeverseLogo = require('../../assets/codeverse-logo.png');

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.hero}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRVZcDICCjVizJ_RECR2eQtlDaoLaldLhoTVAgk05JA&s=10',
                        }}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.eyebrow}>joão pedro piva nogueira</Text>
                    <Text style={styles.title}>pagina sobre mim </Text>
                    <Text style={styles.description}>
                       Olá! Meu nome é Piva, tenho 17 anos e sou estudante do 3º ano do Ensino Médio no SESI/SENAI. Também faço o curso de Desenvolvimento de Sistemas. Gosto de tecnologia, programação e jogos, e estou sempre buscando aprender coisas novas. Sou uma pessoa que valoriza a responsabilidade e a oportunidade de melhorar cada vez mais.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>O que o piva gosta</Text>
                    <Text style={styles.cardItem}>• Gosta muito de FNAF</Text>
                    <Text style={styles.cardItem}>• Chaisaw man</Text>
                    <Text style={styles.cardItem}>• Jogos</Text>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#111111',
    },
    container: {
        flex: 1,
        padding: 14,
        gap: 5,
    },
    hero: {
        alignItems: 'center',
        gap: 10,
        padding: 24,
        borderRadius: 24,
        backgroundColor: '#D96B27',
        margin: 5,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 4,
    },
    eyebrow: {
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: '#000000',
        textAlign: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#000000',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
        textAlign: 'center',
    },
    card: {
        gap: 8,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#D96B27',
        marginBottom: 20,
        margin: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
    },
    cardItem: {
        fontSize: 15,
        color: '#000000',
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: '#D96B27',
    },
    buttonText: {
        fontSize: 6,
        fontWeight: '400',
        color: '#fd7a00',
    },
});
import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const codeverseLogo = require('../../assets/codeverse-logo.png');

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.hero}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SpWA6Sk8Vo55RMP3kppjM1DfsMQbNr_kQntfkcEphg&s=10',
                        }}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.eyebrow}>joão pedro piva nogueira</Text>
                    <Text style={styles.title}>miha pagina sobre mim </Text>
                    <Text style={styles.description}>
                        Estrutura pronta para o aluno focar em componentes, navegação e lógica de
                        negócio desde a primeira aula.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>O que vem configurado</Text>
                    <Text style={styles.cardItem}>• JavaScript habilitado</Text>
                    <Text style={styles.cardItem}>• Rotas com expo-router</Text>
                    <Text style={styles.cardItem}>• Abas e modal de exemplo</Text>
                    <Text style={styles.cardItem}>• Scripts para Android, iOS e Web</Text>
                </View>
                <Link href='/modal' asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Abrir modal de exemplo</Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#a09b9b',
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
        backgroundColor: '#029716',
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
        color: '#fd7a00',
        textAlign: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#fd7a00',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fd7a00',
        textAlign: 'center',
    },
    card: {
        gap: 8,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#029716',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fd7a00',
    },
    cardItem: {
        fontSize: 15,
        color: '#fd7a00',
    },
    button: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: '#fd7a00',
    },
    buttonText: {
        fontSize: 6,
        fontWeight: '400',
        color: '#fd7a00',
    },
});
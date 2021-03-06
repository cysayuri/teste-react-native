import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#383737',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    imgContent: {
        alignItems: 'center',
        flexDirection: 'column',
        height: '10%',
        width: '100%',
    },
    img: {
        height: 70,
        marginBottom: 20,
        marginHorizontal: 'auto',
        width: 275
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        backgroundColor: '#47bee8',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
        width: '47%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default styles;
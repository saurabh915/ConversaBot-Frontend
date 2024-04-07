import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    root: {
        width: '80%', // Set the width to 80% of the viewport
        margin: 'auto', // Center the container horizontally
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '150px',
    },
    chatContainer: {
        flex: 1,
        width: 500,
        height: 700,
        overflowY: 'auto', // Added to enable scrolling
        backgroundColor: 'lightblue',
        marginRight: '10px', // Added spacing between chat and options div
    },
    optionsContainer: {
        flex: 1,
        overflowY: 'auto', // Added to enable scrolling
        marginLeft: '15px', // Added spacing between chat and options div
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    message: {
        margin: '15px',
        padding: '15px',
        borderRadius: 5,
        width: 'fit-content',
        maxWidth: '80%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'grey',
        color: 'black',
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#ddd',
    },
    button: {
        margin: '15px',
    },
});


export default theme;
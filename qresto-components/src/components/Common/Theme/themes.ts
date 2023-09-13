import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#771011',
            dark: '#3E0808',
            contrastText: '#EEEAE2',
        },
        secondary: {
            light: '#FFF2D9',
            main: '#F4E0B7',
            dark: '#b09970',
            contrastText: '#771011',
        },

        warning: {
            light: '#ff7961',
            main: '#F4E0B7',
            dark: '#aa9e87',
            contrastText: '#000',
        },
    },
});

export const themeButton = createTheme({
    palette: {
        primary: {
            light: '#FFF2D9',
            main: '#771011',
            dark: '#B09970',
            contrastText: '#F4E0B7',
        },
        secondary: {
            light: '#FFF2D9',
            main: '#F4E0B7',
            dark: '#b09970',
            contrastText: '#771011',
        },

        warning: {
            light: '#ff7961',
            main: '#F4E0B7',
            dark: '#aa9e87',
            contrastText: '#000',
        },
    },
});




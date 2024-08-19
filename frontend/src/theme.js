const { createTheme } = require('@mui/material');

/**
 * App main theme colors
 */
const theme = createTheme({
    palette: {
        primary: {
            light: "#63CCFF",
            main: "#0094CC",
            dark: "#006699",
            contrastText: "#FFFFFF",
            transpatent: "transparent!important"
        },
        background: {
            primary: "#FFFFFF",
            secondary: "#F5F5F5",
            action: "#85c1e9",
            focused: "#5dade2",
            error: "#FFB4B6",
            success: "#63D463",
            // 
            Crimson: "#DC143C",
            OrangeRed: "#FF4500",
            RoyalBlue: "#3C5A78",
            SandyBrown: "#F4A460",

            yellow: "#FFBD2B",
            orange: "#FF9034",
            blue: "#219BBA",
        },
        border: {
            primary: "#E0E0E0",
            secondary: "#DADFE6",
            action: "#7EC6FF",
            focused: "#418CFF",
            error: "#FF8082",
            success: "#4BAE4D",

            yellow: "#FFD132",
            orange: "#FF9034",
            blue: "#219BBA",
        },
        boxShadow: {
            primary: "0 1px 3px rgba(0, 0, 0, 0.2)",
            secondary: "0 1px 3px rgba(0, 0, 0, 0.15)",
            action: "0 1px 3px rgba(0, 0, 0, 0.15)",
            focused: "0 1px 3px rgba(0, 0, 0, 0.2)",
            error: "0 1px 3px rgba(0, 0, 0, 0.2)",
            success: "0 1px 3px rgba(0, 0, 0, 0.2)",
        },
        text: {
            primary: "#000000",
            white: "#ffffff",
            secondary: "#4F4F4F",
            action: "#0072B1",
            focused: "#004080",
            error: "#B00020",
            success: "#2E7D32",

            yellow: "#FFD132",
            orange: "#FF9034",
            blue: "#219BBA",
        }
    },
    spacing: 8,
    marginX: `2rem`,
    marginY: `2.5rem`,
    paddingX: `2rem`,
    paddingY: `2.5rem`,
    paddingBottom: `1.25rem`,
    typography: {
        fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
        fontFamilyNano: 'Montserrat, Noto Sans Armenian, Noto Sans, Arial, Helvetica, sans-serif !important',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: '160px!important',
                    minHeight: '32px!important',
                },
            },
        },
    },
})

export default theme;
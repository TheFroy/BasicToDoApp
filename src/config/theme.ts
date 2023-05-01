import { ThemeVariation } from "../types/theme";

export const defaultTheme: ThemeVariation = {
    light: {
        text: "#4D4D4D",
        background: "linear-gradient(135deg, #f5af19, #f12711)",
        pallete: {
            primary:'#f12711',
            secondary:'#f5af19',
            accent:'',
            light:'#fff'
        }
    },
    dark: {
        text: "#D8D8D8",
        background: "linear-gradient(135deg, #443C68, #18122B)",
        imgFilter:"invert(100%)",
        pallete: {
            primary:'#18122B',
            secondary:'#443C68',
            accent:'#393053',
            light:'#635985'
        }
    }
}

export type Theme = {
    text?: string
    background?: string
    buttonText?: string
    buttonTextHover?: string
    buttonBorder?: string
    buttonBg?: string
    buttonBgHover?: string
    imgFilter?: string
    pallete?: Pallete
}

type Pallete = {
    primary: string,
        secondary: string,
        accent: string,
        light:string
}

export type ThemeVariation = {
    light: Theme
    dark: Theme
}

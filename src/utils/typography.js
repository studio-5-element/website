import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

moragaTheme.headerFontFamily = ['Rajdhani', 'sans-serif'];
moragaTheme.bodyFontFamily = ['Montserrat', 'serif'];
moragaTheme.googleFonts = [
    {
        name: 'Montserrat',
        styles: [
            '300',
            '400',
            '500',
            '600',
            '700'
        ]
    },
    {
        name: 'Rajdhani',
        styles: [
            '300',
            '400',
            '500',
            '600',
            '700'
        ]
    }
];

const typography = new Typography(moragaTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
};

export default typography;
export const { rhythm, scale } = typography;

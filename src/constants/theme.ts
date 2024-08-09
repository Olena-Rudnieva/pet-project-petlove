export const breakpoints = ['320', '768', '1280'];

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#262626',
    secondBlack: '##2B2B2A',
    accent: '#F6B83D',
    accentHero: 'rgba(255, 255, 255, 0.40)',
    beige: '#FFF4DF',
    darkBeige: '#FBE7C1',
    grey: 'rgba(38, 38, 38, 0.15)',
    darkGrey: 'rgba(38, 38, 38, 0.80)',
    mediumGrey: 'rgba(38, 38, 38, 0.50)',
    lightGrey: 'rgba(38, 38, 38, 0.20)',
    paleGrey: 'rgba(38, 38, 38, 0.05)',
    semiGrey: 'rgba(43, 43, 42, 0.40)',
    red: '#EF2447',
    green: '#08AA83',
    blue: '#54ADFF',
  },

  fontWeight: {
    medium: 500,
    bold: 700,
    extraBold: 800,
  },

  fontSizes: {
    xxxxxs: '8px',
    xxxxs: '10px',
    xxxs: '12px',
    xxs: '14px',
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '28px',
    xxl: '32px',
    xxxl: '48px',
    xxxxl: '54px',
    xxxxxl: '90px',
    xxxxxxl: '300px',
  },

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],

  mq: {
    mobile: `@media screen and (max-width: ${breakpoints[0]}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },

  boxShadow: {
    card: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    friends: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    notice: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};
import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
    body: {
        width: '100%',
    },
})

const fonts = css`
    @font-face {
        font-family: 'Google Sans';
        src: url('/fonts/google-sans/ProductSans-Thin.ttf');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Google Sans';
        src: url('/fonts/google-sans/ProductSans-Light.ttf');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Google Sans';
        src: url('/fonts/google-sans/ProductSans-Regular.ttf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Google Sans';
        src: url('/fonts/google-sans/ProductSans-Medium.ttf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Google Sans';
        src: url('/fonts/google-sans/ProductSans-Bold.ttf');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Google Sans';
        src: url('/fonts/google-sans/ProductSans-Black.ttf');
        font-weight: 900;
        font-style: normal;
    }
`

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={{ ...customStyles, ...fonts }} />
    </>
)

export default GlobalStyles

import { injectGlobal } from 'emotion'
import { colors } from './colors'

export const reset = injectGlobal(`
/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}audio,img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}#___gatsby,#___gatsby > div,body,html{height:100%}body{display:flex;flex-direction:column;background-color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',Helvetica,Arial,sans-serif;color:${
  colors.text
}}a{text-decoration:none}button{border:none}
`)
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --Light-red: hsl(0, 100%, 67%);
    --Orangey-yellow: hsl(39, 100%, 56%);
    --Green-teal: hsl(166, 100%, 37%);
    --Cobalt-blue: hsl(234, 85%, 45%);
    // Colors 
    // Primary 
    --Light-red: hsl(0, 100%, 67%);
    --Orangey-yellow: hsl(39, 100%, 56%);
    --Green-teal: hsl(166, 100%, 37%);
    --Cobalt-blue: hsl(234, 85%, 45%);
    // Neutral 
    --White: hsl(0, 0%, 100%);
    --Pale-blue: hsl(221, 100%, 96%);
    --Light-lavender: hsl(241, 100%, 89%);
    --Dark-gray-blue: hsl(224, 30%, 27%);
    // Gradiants
    --Light-slate-blue: hsl(252, 100%, 67%);
    --Light-royal-blue: hsl(241, 81%, 54%);
    --Violet-blue: hsla(256, 72%, 46%, 1);
    --Persian-blue: hsla(241, 72%, 46%, 0);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  #root {
    min-height: 100vh;
  }
  body {
    font-family: 'Hanken Grotesk', sans-serif;

    @media (min-widtth: 900px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
  }
`

export { GlobalStyles }

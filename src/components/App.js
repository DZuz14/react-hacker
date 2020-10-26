import React from 'react'
import { Global, css, jsx } from '@emotion/core'
import MusicPlayer from './MusicPlayer'

/**
 * @function App
 */
const App = () => (
  <>
    <Global styles={GlobalCSS} />

    {/* Delete me, the default .app styles in GlobalCSS, and the reactLogo img import */}
    <MusicPlayer />
  </>
)

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Signika', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  // Just to position the react logo on initial startup. Delete this block.
  .app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #282c34;

    h1 {
      color: white;
    }
  }
  //

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
`

export default App

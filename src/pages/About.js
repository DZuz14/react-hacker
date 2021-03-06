/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const About = () => {
  return (
    <div className="About" css={CSS}>
      <h1>About Me</h1>

      <p
        css={css`
          max-width: 600px;
          margin: 0 auto;
          color: white;
        `}
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </p>
    </div>
  )
}

const CSS = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #282c34;

  h1 {
    color: white;
  }
`

export default About

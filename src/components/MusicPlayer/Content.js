/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Content = () => {
  return (
    <div className="Content" css={CSS}>
      Content
      {/*  */}
    </div>
  )
}

const CSS = css`
  width: calc(100% - 200px);
  padding: 20px;
  background: #121212;
`

export default Content

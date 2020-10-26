/** @jsx jsx */
import React, { useReducer, createContext } from 'react'
import { css, jsx } from '@emotion/core'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Playbar from './Playbar'

export const StoreContext = createContext(nul)

const DEFAULT_PLAYLIST = 'home'

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
    home: new Set(),
    favorites: new Set()
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return {
        ...state,
        playlists: { ...state.playlists, [action.playlist]: new Set() }
      }
    case 'SET_PLAYLIST':
      return { ...state, currentPlaylist: action.playlist }
  }

  return state
}
const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="MusicPlayer" css={CSS}>
      <Topbar />
      <Sidebar />
      <Content />
      <Playbar />
    </div>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer

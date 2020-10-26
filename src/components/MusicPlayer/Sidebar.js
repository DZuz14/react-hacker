/** @jsx jsx */
import React, { useState, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import logo from '../../img/spotify-white.png'
import Modal from './Modal'
import Toast from './Toast'
const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    modal: false,
    playlists: {
      home: new Set(),
      favorites: new Set()
    },
    toast: ''
  })

  const playlistRef = useRef(null)
  const playlists = Object.keys(state.playlists)

  const addPlaylistHandler = e => {
    e.preventDefault()
    const list = playlistRef.current.value

    // dispatch({ type: 'ADD_PLAYLIST', playlist: list })

    setState({
      ...state,
      // ...sidebarState,
      modal: false,
      playlists: { ...state.playlists, [list]: new Set() },
      toast: 'Your playlist was created successfully!'
    })
  }

  return (
    <ul className="Sidebar" css={CSS}>
      <img src={logo} />
      <li className="library">Library</li>
      {playlists.map(list => (
        <li
          key={list}
          className={list === state.currentPlaylist ? 'active' : ''}
          onClick={() => {
            setState({ ...state, currentPlaylist: list })
          }}
        >
          {list}
        </li>
      ))}

      <li
        className="new-playlist"
        onClick={() => {
          setState({ ...state, modal: true })
        }}
      >
        <i className="fa fa-plus-circle" />
        <span>New Playlist</span>
      </li>

      <Modal
        show={state.modal}
        close={() => {
          setState({ ...state, modal: false })
        }}
      >
        <form onSubmit={addPlaylistHandler}>
          <div className="title">New Playlist</div>

          <div className="content-wrap">
            <input
              type="text"
              placeholder="My Playlist"
              ref={playlistRef}
              required
            />
            <br />
            <button type="submit">Create</button>
          </div>
        </form>
      </Modal>
      <Toast
        toast={state.toast}
        close={() => {
          setState({ ...state, toast: '' })
        }}
      />
    </ul>
  )
}

const CSS = css`
  width: 200px;
  height: 100%;
  background: #000000;
  padding-top: 20px;

  img {
    height: 60px;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    padding-left: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
    cursor: porinter;
    font-weight: bold;
  }

  li.active {
    border-left: 2px solid white;
    padding-left: 18px;
  }

  li.library {
    cursor: unset;
    color: #999;
    text-transform: uppercase;
    font-weight: normal;
  }
  li.new-playlist {
    position: absolute;
    bottom: 80px;
    i {
      margin-right: 5px;
      transform: translateY(1px);
      &:before {
        font-size: 20px;
      }
    }
    span {
      color: #999;
      font-weight: 300;
    }
  }
  form {
    button {
      background-color: #2bcc6c;
      color: white;
      padding: 12.5px 30px;
      border-radius: 25px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 13px;
      border: none;
      cursor: pointer;
    }
    .title {
      margin: 0;
      margin-bottom: 35px;
    }
    input {
      margin-bottom: 20px;
      height: 35px;
      padding-left: 8px;
      font-size: 16px;
      width: 100%;
      color: black;
    }
    .content-wrap {
      margin: 0px auto;
      max-width: 250px;
      text-align: center;
    }
  }
`

export default Sidebar

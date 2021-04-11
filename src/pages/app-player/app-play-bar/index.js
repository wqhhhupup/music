import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { PlayBarWrapper, ShareInconWrapper, RightIconBox } from './style'
import { Slider } from 'antd';
import { getChangeSongAction, getChangeSeqAction, getChangeSwichSongAction } from './store/actionCreator';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import getSize from '@/utils/getSize'
import { formatMinuteSecond, getPlaySong } from '@/utils/format'
import getBgPosition from '@/utils/getBgPosition.js'

export default memo(function PlayBar() {
  const dispatch = useDispatch()
  const { songDetail, sequence } = useSelector((state) => ({
    songDetail: state.getIn(['player', 'songDetail']),
    sequence: state.getIn(['player', 'sequence']),
    // currentSongIndex: state.getIn(['player', 'currentSongIndex']),
    // songList: state.getIn(['player', 'songList'])
  }), shallowEqual)
  // other hooks 
  useEffect(() => {
    dispatch(getChangeSongAction(1380022214))

  }, [dispatch])




  const picUrl = (songDetail.al && songDetail.al.picUrl) || ''
  const singer = songDetail.ar || []
  const totalTime = songDetail.dt / 1000

  const audioRef = useRef()
  const [isPlay, setIsPlay] = useState(false)
  const [isChange, setisChange] = useState(false)



  useEffect(() => {
    audioRef.current.src = getPlaySong(songDetail.id)
    isPlay ? audioRef.current.play() : audioRef.current.pause()
  }, [songDetail.id])


  const playMusic = () => {
    if (!isPlay) {
      audioRef.current.play()
      setIsPlay(!isPlay)
    } else {
      audioRef.current.pause()
      setIsPlay(!isPlay)
    }

  }


  const [currentTime, setcurrentTime] = useState(0)
  const timeUpdate = (e) => {
    if (!isChange) {
      setcurrentTime(e.target.currentTime)

    }

  }



  const getChangeValue = useCallback((value) => {
    setisChange(true)
    setcurrentTime(value / 100 * totalTime)

  }, [totalTime])
  const afterChange = (value) => {
    if (isPlay) {
      // 滑动后的时间 value / 100 * totalTime 
      audioRef.current.currentTime = value / 100 * totalTime
      setisChange(false)
    } else {
      audioRef.current.currentTime = value / 100 * totalTime
      setisChange(false)
      setIsPlay(!isPlay)
      audioRef.current.play()
    }


  }
  const currentProgress = currentTime / totalTime * 100

  const formCurrentTime = formatMinuteSecond(currentTime * 1000)
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (sequence >= 2) currentSequence = 0
    dispatch(getChangeSeqAction(currentSequence))
  }

  const switchSong = (num) => {
    dispatch(getChangeSwichSongAction(num))
  }
  const musicEnd = (num) => {
    dispatch(getChangeSwichSongAction(num))

  }

  return (
    <PlayBarWrapper>
      <div className="wrap-v2 playbar">
        <div className="btns">
          <button className="btn sprite_player prev" onClick={e => switchSong(-1)}></button>
          <button className={`btn sprite_player play ${isPlay ? `pause` : ''}`}
            onClick={playMusic}></button>
          <button className="btn sprite_player next" onClick={e => switchSong(1)}></button>
        </div>
        <div className="album-img">
          <img src={getSize(picUrl, 35)} alt="" />
          <a href="/todo"> </a>
        </div>
        <div className="play-process">
          <div className="info">
            <span className="song-name">{songDetail.name}</span>
            <span>/</span>
            {
              singer.map((item, index) => {
                return <span key={item.id}>{item.name}</span>
              })
            }
          </div>
          <div className="slider">
            <Slider value={currentProgress} onChange={getChangeValue} onAfterChange={afterChange} />
            <div className="time">
              <span>{formCurrentTime}</span>
              <span>/</span>
              <span>{formatMinuteSecond(songDetail.dt)}</span>
            </div>
          </div>
        </div>
        <ShareInconWrapper>
          <div className="add sprite_player"></div>
          <div className="share sprite_player"></div>
        </ShareInconWrapper>
        <RightIconBox>
          <div className="volume sprite_player" ></div>
          <div className="switch sprite_player" style={getBgPosition(sequence)} onClick={e => { changeSequence() }}></div>
          <div className="song-list sprite_player"></div>
        </RightIconBox>
        <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={e => { musicEnd(1) }}></audio>
      </div>
    </PlayBarWrapper>
  )
})

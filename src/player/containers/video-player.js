import React, {Component} from 'react'
import VideoPlayerLayout from '../component/video-player-layout'
import Video from '../component/video'
import Title from '../component/title';
import PlayPause from '../component/play-pause';
import Timer from '../component/timer';
import Controls from '../component/video-player-controls';
import {format} from '../../utilities/format'
import ProgressBar from '../component/progress-bar';
import Spinner from '../component/spinner';
import VolumenControls from '../component/volumen';
import FullScreen from './full-screen';

class VideoPlayer extends Component{
  state = {
    pause: true,
    duration: '00',
    durationFloat: 0,
    currentTime:'00',
    currentTimeFloat: 0,
    loading: false,
    volumen:1,
    lastVolumen:0,
    mute: false,
    
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      durationFloat: this.video.duration,
      duration: format(this.video.duration),
    });
  }
  handleTimeUpdate = event =>{
    this.setState({
      currentTimeFloat: this.video.currentTime,
      currentTime: format(this.video.currentTime)
    })
  }
  handleProgressChange= event =>{
    this.video.currentTime=event.target.value
  }
  handleSeeking = event =>{
    this.setState({
      loading: true,
    })
  }
  handleSeeked = event =>{
    this.setState({
      loading: false,
    })
  }
  handleVolumenChange = event =>{
    this.video.volume = event.target.value
    this.setState({volumen:this.video.volume})
    
  }
  handleToggleVolumen = ()=>{
   const lastVolumen=this.video.volume
    this.setState({lastVolumen})

   if(this.video.volume!==0){
    this.video.volume=0
    this.setState({ 
      volumen: 0    
    })
  }else{
    this.video.volume=this.state.lastVolumen
    this.setState({volumen: this.video.volume})
    } 
  }
  handleFullScreen = event=>{
    if(!document.webkitIsFullScreen){
      this.player.webkitRequestFullscreen()
    }else if(document.webkitIsFullScreen){
      document.webkitExitFullscreen()
    }else if(!document.mozFullScreen){
      this.player.mozRequestFullScreen()
    }else if(document.mozFullScreen){
      document.mozCancelFullScreen()
    }
   
  }
  setRef= element =>{
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout
      setRef={this.setRef}
      >
        <Title
          title={this.props.title}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
            />
          <ProgressBar
          duration={this.state.durationFloat}
          value={this.state.currentTimeFloat}
          handleProgressChange={this.handleProgressChange}
          />
          <VolumenControls
          volumen={this.state.volumen}
          handleVolumenChange={this.handleVolumenChange}
          handleToggleVolumen={this.handleToggleVolumen}
          
          />
          <FullScreen
          handleFullScreen={this.handleFullScreen}
          />
        </Controls>
        <Spinner
        active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
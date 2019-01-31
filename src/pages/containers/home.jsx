import React, {Component} from 'react'
import HomeLayout from '../components/home-layout.jsx'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import VideoPlayer from '../../player/containers/video-player.js';


class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media)=>{
    this.setState({
      modalVisible: true,
      media,
    })
  }
  handleCloseModal = (event)=>{
    this.setState({
      modalVisible: false,
    })
  }
  render(){
    return(
      <HomeLayout>
        
        <Related/>
        <Categories categories={this.props.data.categories} 
        handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
          <Modal
          handleClick={this.handleCloseModal}
          >
          <VideoPlayer 
          title={this.state.media.title}
          src={this.state.media.src}
          autoplay/>
          

          </Modal>
        </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home
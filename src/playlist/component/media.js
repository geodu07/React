import React, {Component} from 'react'
import './media.css'

class Media extends Component {
  handleClick = (event)=>{
    this.props.handleOpenModal(this.props)
  }
    render(){
      return(
        <div className='Media' onClick={this.handleClick}>
          <div className='Media-cover'>
            <img
             src={this.props.cover}
             alt=''
             width={250}
             height={150}
             className='Media-image'
            />
            <h3 className='Media-title'>{this.props.title}</h3>
            <p className='Media-author'>{this.props.author}</p>
            
          </div>
        </div>
      )

    }
}
export default Media;
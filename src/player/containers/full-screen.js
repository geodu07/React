import React from'react'
import FullScreenIcon from '../../icons/components/full-screen.jsx'
import '../component/full-screen.css'
function FullScreen(props){
  return(
   <div 
   className='FullScreen'
   onClick={props.handleFullScreen}>
     <FullScreenIcon
     size={25}
     color='white'
     />
   </div>
  )
}
export default FullScreen
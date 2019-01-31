import React from 'react'
import VolumenIcon from '../../icons/components/volumen.jsx'
import Mute from '../../icons/components/mute'
import './volumen.css'

function VolumenControls(props){
  return(
    
    <div className='Volumen'>
    <button  className='Volumen'  onClick={props.handleToggleVolumen} >
    
    {
    props.volumen?
      <VolumenIcon
        size={25}
        color='white'
      />  
      :
      <Mute
       size={25}
       color='gray'
      />
    }
    
    </button>
    <div className='Volumen-range'>
      <input
      type='range'
      min={0}
      max={1}
      step={.05}
      value={props.volumen}
      onChange={props.handleVolumenChange}
      />

    </div>

    </div>
  )
}

export default VolumenControls
import React from 'react'
import './search.css'

const Search = (props) =>(
  <div>
    <form 
      className='Search'
      onSubmit={props.handleSubmit}
    >
    <input
    ref={props.setRef}
    type='text'
    placeholder='Busca tu video'
    className='Search-input'
    value={props.value}
    onChange={props.handleChange}
    />

    </form>
  </div>
)

export default Search
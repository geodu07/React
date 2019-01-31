import React, {Component} from 'react'
import Search from '../components/search'

class SearchContainer extends Component{
  state={
    value:'Ricardo Montaner',
    
  }
  
  handleSubmit = event => {
    event.preventDefault()
    console.log('submit', this.input.value)
  }
  setInputRef = element => {
        this.input = element
  }
  handleChange = event =>{
    this.setState({
      value: event.target.value,
    })
  }
  render(){
    return(
      <Search
      setRef={this.setInputRef}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      value={this.state.value}
      
      />
    )
  }
}

export default SearchContainer
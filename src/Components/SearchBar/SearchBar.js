import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
  }
  onInputChange = event => {
    let term = event.target.value
    this.setState({ term: term })
  }

  onFormSubmit = event => {
    event.preventDefault()
    console.log(this.state.term)
    this.props.onSubmit(this.state.term)
  }

  render () {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

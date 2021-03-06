import React from 'react'

class SearchBar extends React.Component {
    state = { term: "" }

onInputChange = (event) => {

    this.setState({term: event.target.value})

}

onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term)
}

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>						
						<input onChange={this.onInputChange} value={this.state.term} type='text' placeholder='Search' className='input'></input>
					</div>
				<button></button>
				</form>
			</div>
		)
	}
}

export default SearchBar

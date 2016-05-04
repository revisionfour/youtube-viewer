import React from 'react'

// const SearchBar = () => {
// 	return <input />;
// }

class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			term: ''
		};

	}

	onInputChange(term){
		// event => this.setState({term: event.target.value})
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render(){
		return (
			<div className="search-bar">
				<input 
				value={this.state.term} 
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	// onInputChange(event){
	// 	console.log(event.target.value)
	// }
}

export default SearchBar;
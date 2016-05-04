import React from 'react'
import { render } from 'react-dom'

import _ from 'lodash'

import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyCJIaKKo9OehXMmwzZNTGS7kMPLwgOOKVY';

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		

		this.videoSearch('');

	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}


	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
				 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				 videos={this.state.videos} />
			</div>
		);
	}
}

render(
	<App />,
	document.getElementById('app')
);
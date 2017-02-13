import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Use your own Google API key here
const API_KEY = '*****';

/**
 *  App class component which renders a page to display the components:
 *    SearchBar -> Search for Youtube videos by user input
 *    VideoDetail -> The video iframe as well as some information about it
 *    VideoList -> A list of recommended videos to the currently selected one
 */
class App extends Component {
  constructor(props) {
    super(props);

    // Set the state to be a list of videos and the one that the user selects
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // The search bar should be blank by default
    this.videoSearch('');
  }

  // Search for videos based on the input term
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // Search for the term every 300 milliseconds (acts as an autosubmitter for the search term)
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("bodyDiv"));

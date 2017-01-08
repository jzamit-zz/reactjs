// Create a new component.
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyBSE45FJCCmUWS2ntqeHp2ug_V7d-sCf3A';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

    this.videoSearch('reactjs');
    }

    videoSearch(term){

        YTSearch( {key: YOUTUBE_API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[Math.floor(Math.random() * ((videos.length - 1)  + 1))]
            });

        });

    }


    render(){

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 350);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />

            </div>
        );
    }

}

//Take this components and put it on the page (DOM)

ReactDom.render(<App /> , document.getElementById('root'));

export default App;


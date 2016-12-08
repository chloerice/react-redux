import React, {Component} from 'react';
import Lyrics from '../components/Lyrics';
import {connect} from 'react-redux';
import {searchLyrics} from '../action-creators/lyrics';

function mapStateToProps(state, ownProps) {
  return {
    artistQuery: ownProps.artistQuery,
    songQuery: ownProps.songQuery
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      if (this.state.artistQuery && this.state.songQuery) {
        dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
      }
    }
  }
}

const LyricsContainerConnect = connect(mapStateToProps, mapDispatchToProps)(
  class LyricsContainer extends Component {
    constructor() {
      super();

      this.state = {
        artistQuery: '',
        songQuery: ''
      }

      this.handleArtistInput = this.handleArtistInput.bind(this);
      this.handleSongInput = this.handleSongInput.bind(this);

    }

    handleArtistInput(artist) {
       this.setState({ artistQuery: artist });
     }

     handleSongInput(song) {
       this.setState({ songQuery: song });
     }

    render() {
      return (
        <Lyrics
          {...this.state}
          handleChange={this.handleChange}
          setArtist={this.handleArtistInput}
          setSong={this.handleSongInput}
          handleSubmit={this.handleSubmit} />
      );
    }
  }
)

export default LyricsContainerConnect;

// export default class extends Component {
//
//   constructor() {
//
//     super();
//
//     this.state = Object.assign({
//       artistQuery: '',
//       songQuery: ''
//     }, store.getState());
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleArtistInput = this.handleArtistInput.bind(this);
//     this.handleSongInput = this.handleSongInput.bind(this);
//
//   }
//
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }
//
//   handleArtistInput(artist) {
//     this.setState({ artistQuery: artist });
//   }
//
//   handleSongInput(song) {
//     this.setState({ songQuery: song });
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.artistQuery && this.state.songQuery) {
//       store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
//     }
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   render() {
//     return (
//       <Lyrics
//         {...this.state}
//         setArtist={this.handleArtistInput}
//         setSong={this.handleSongInput}
//         handleSubmit={this.handleSubmit} />
//     );
//   }
//
// }

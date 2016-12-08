import React, {Component} from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player'


// const currentSong = props.currentSong;
// const isPlaying = props.isPlaying;
// const toggleOne = props.toggleOne;


function mapStateToProps(state, ownProps) {
  const genre = ownProps.params.genreName;
  const songs = state.songs
                     .filter((song) => song.genre === genre)
                     .map(song => convertSong(song));

  // console.log("Here's our songs: ", songs);

	return {
    genreName: genre,
    songs: songs,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list))
    }
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station)

export default StationContainer;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Stations from '../components/Stations';

function getStations(songs) {
	let stations = {};
	songs.map(function(song) {
		if (stations[song.genre]) {
			stations[song.genre].push(song);
		} else {
			stations[song.genre] =[];
			stations[song.genre].push(song);
		}
	})

	return stations;
}

function mapStateToProps(state) {
	return {
		stations: getStations(state.songs)
	};
}

function mapDispatchToProps(dispatch) {
	return {};

}

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations)

export default StationsContainer

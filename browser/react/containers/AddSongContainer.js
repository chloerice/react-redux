import React from 'react';
import {connect} from 'react-redux';
import AddSong from '../components/AddSong';

import {addSongToPlaylist} from '../action-creators/playlists';

//stuff AddSong needs:
// const songs = props.songs;
// const error = props.error;
// const handleChange = props.handleChange;
// const handleSubmit = props.handleSubmit;

function mapStateToProps(state, ownProps) {
  console.log("Our state AddSongContainer's state", state);
  console.log("Our ownProps in mapStateToProps: ", ownProps);
  const songs = state.songs;
  const error = state.error;

	return {
    songs
	};
}

function mapDispatchToProps(dispatch, ownProps) {

	return {
    handleChange: (e) => {
      dispatch(({
        songId: e.target.value,
        error: false
      }));
    },
    handleSubmit: (e) => {
      e.preventDefault();
      console.log("This is our event! ", e);
      dispatch(addSongToPlaylist(playlistId, songId));
    }
  };

}

const AddSongContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSong)

export default AddSongContainer;





// class AddSongContainer extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = Object.assign({
//       songId: 1,
//       error: false
//     }, store.getState());
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   componentDidMount() {
//
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//
//     store.dispatch(loadAllSongs());
//
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//
//   handleChange(evt) {
//     this.setState({
//       songId: evt.target.value,
//       error: false
//     });
//   }
//
//   handleSubmit(evt) {
//
//     evt.preventDefault();
//
//     const playlistId = this.state.playlists.selected.id;
//     const songId = this.state.songId;
//
//     store.dispatch(addSongToPlaylist(playlistId, songId))
//       .catch(() => this.setState({ error: true }));
//
//   }
//
//   render() {
//
//     const songs = this.state.songs;
//     const error = this.state.error;
//
//     return (
//       <AddSong
//         {...this.props}
//         songs={songs}
//         error={error}
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}/>
//     );
//   }
// }
//
// export default AddSongContainer;

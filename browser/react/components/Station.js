import React from 'react';
import Songs from '../components/Songs';

export default function (props) {
  const genre = props.genreName;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;
  const songs = props.songs;
  // console.log("Here's our songs in the Station!", songs)
  return (
    <div>
      <h1>{genre}</h1>
      <Songs

        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  );

}

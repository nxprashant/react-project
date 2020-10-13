import React from "react";
import ReactAudioPlayer from 'react-audio-player';

const Player = ({ url }) => {
  return (
<ReactAudioPlayer
  src= {url}
  autoPlay
  controls
/>
  );
};

export default Player;
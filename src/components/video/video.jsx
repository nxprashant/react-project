import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Video = (props) => {
  const { url } = props;
  return (
    <ReactPlayer
      url={url}
    />
  );

};

export default Video;

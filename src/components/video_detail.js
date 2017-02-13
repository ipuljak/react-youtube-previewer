import React from 'react';

/**
 *  VideoDetail functional component
 *    -> The video iframe as well as some information about it
 */
const VideoDetail = ({video}) => {

  // Check if a video has loaded first
  if (!video) {
    return <div>Loading...</div>;
  }

  // Create a URL to the video with the retrieved video id
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-9">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>
          <h4>{video.snippet.title}</h4>
        </div>
        <div>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
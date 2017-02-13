import React from 'react';

import VideoListItem from './video_list_item';

/**
 *  VideoList functional component
 *    -> A list of recommended videos to the currently selected one
 */
const VideoList = props => {

  // Map over the each of the videos in the array to create a VideoListItem
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
        />
    );
  });

  return (
    <ul className="col-md-3 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
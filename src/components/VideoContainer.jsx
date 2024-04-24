import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "./youtube";
import VideoCart from "./feed/video/VideoCart";
import { Link } from "react-router-dom";
function VideoContainer() {
  const [video, setVideo] = useState([]);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      console.log(res.data.items);
      setVideo(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-1 py-2">
      {video.map((item) => {
        return (
          <Link
            to={`/watch?v=${
              typeof item.id === "object" ? item.id.videoId : item.id
            }`}
            key={typeof item.id === "object" ? item.id.videoId : video.id}
          >
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer;

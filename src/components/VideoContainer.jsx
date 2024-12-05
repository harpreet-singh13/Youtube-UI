import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_API_URL);
		const json = await data.json();
		setVideos(json.items);
	};

	return (
		<div className="flex flex-wrap">
			{/* <VideoCard info={videos[0]}/> */}
			{videos.map((video, index) => (
				<Link to={"watch?v=" + video.id} key={index}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;

import React from "react";

const VideoCard = ({ info }) => {
	return (
		<div className= "p-2 m-2 w-72 shadow-lg" style={{ width: "280px", height: "350px" }}>
			<img className="rounded-lg" src={info?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />

			<ul>
				<li className="font-bold py-2">{info?.snippet?.title}</li>
				<li>{info?.snippet?.channelTitle}</li>
				<li>{info?.statistics?.viewCount} views</li>
			</ul>
		</div>
	);
};

export default VideoCard;

import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { menuClosed } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(menuClosed());
	}, []);

	const [searchParam] = useSearchParams();
	// console.log(searchParam.get("v"));

	return (
		<div className="p-2 m-2">
			<iframe
				width="560"
				height="315"
				src={"https://www.youtube.com/embed/" + searchParam.get("v")}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<CommentsContainer />
		</div>
	);
};

export default WatchPage;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
	HAMBURGER_MENU_IMG_URL,
	USER_LOGO_IMG_URL,
	YOUTUBE_LOGO_IMG_URL,
	YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/constant";

import { cacheResults } from "../utils/searchSlice";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);

	const cacheSearch = useSelector((store) => store.search);

	const dispatch = useDispatch();

	// console.log(suggestions);

	useEffect(() => {
		// API call

		const timer = setTimeout(() => {
			if (cacheSearch[searchQuery]) {
				setSuggestions(cacheSearch[searchQuery]);
			} else {
				getSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
		const json = await data.json();
		// console.log(json);
		setSuggestions(json[1]);

		// update the cache

		dispatch(cacheResults({ [searchQuery]: json[1] }));
	};

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="grid grid-flow-col m-1 p-4 shadow-lg">
			<div className="flex col-span-1">
				<img
					onClick={() => toggleMenuHandler()}
					className="h-8 cursor-pointer"
					src={HAMBURGER_MENU_IMG_URL}
					alt="menu-icon"
				/>

				<a href="/">
					<img
						className="h-8 mx-2"
						src={YOUTUBE_LOGO_IMG_URL}
						alt="youtube-logo"
					/>
				</a>
			</div>

			<div className="col-span-10 px-10">
				<input
					className=" w-1/2 p-2 pl-4  border border-gray-400 rounded-l-full "
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onFocus={() => setShowSuggestions(true)}
					onBlur={() => setShowSuggestions(false)}
				/>
				<button className="p-2 px-5 border border-gray-400 rounded-r-full ">
					Search
				</button>

				{showSuggestions && suggestions.length != 0 && (
					<div className=" fixed bg-white w-[25rem] ml-2 p-2 shadow-lg rounded-lg border border-gray-100">
						<ul>
							{suggestions.map((suggestion) => (
								<li
									className=" p-1 hover:bg-gray-100"
									key={suggestion}
								>
									🔍 {suggestion}{" "}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

			<div className="col-span-1">
				<img
					className="h-8"
					src={USER_LOGO_IMG_URL}
					alt="user-logo"
				></img>
			</div>
		</div>
	);
};

export default Header;

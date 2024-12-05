import React from "react";
import Button from "./Button";

const categories = [
	"All",
	"Gaming",
	"Song",
	"Cricket",
	"Live",
	"Soccer",
	"Diljit",
];
const ButtonList = () => {
	return (
		<div className="flex">
			{categories.map((category, index) => (
				<Button key={index} name={category} />
			))}
		</div>
	);
};

export default ButtonList;

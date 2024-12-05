import React from "react";

const commentsData = [
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [
			{
				name: "Akshay Saini",
				text: "Lorem ipsum dolor sit amet, consectetur adip",
				replies: [],
			},
			{
				name: "Akshay Saini",
				text: "Lorem ipsum dolor sit amet, consectetur adip",
				replies: [
					{
						name: "Akshay Saini",
						text: "Lorem ipsum dolor sit amet, consectetur adip",
						replies: [
							{
								name: "Akshay Saini",
								text: "Lorem ipsum dolor sit amet, consectetur adip",
								replies: [
									{
										name: "Akshay Saini",
										text: "Lorem ipsum dolor sit amet, consectetur adip",
										replies: [
											{
												name: "Akshay Saini",
												text: "Lorem ipsum dolor sit amet, consectetur adip",
												replies: [],
											},
										],
									},
									{
										name: "Akshay Saini",
										text: "Lorem ipsum dolor sit amet, consectetur adip",
										replies: [],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
];

const Comment = ({ data }) => {
	const { name, text , replies} = data;
	return (
		<div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
			<img
				className="h-8 w-8"
				alt="user-img"
				src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
			></img>
			<div className="px-3">
				<p className="font-bold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentsList = ({ comments }) => {
	// Disclaimer: Don't use indexes as keys
	return comments.map((comment, index) => (
		<div key={index}>
			<Comment data={comment} />
			<div className="pl-5 border border-l-black ml-5">
				<CommentsList comments={comment.replies} />
			</div>
		</div>
	));
};
const CommentsContainer = () => {
	return (
		<div className="p-2 m-2">
			<h1 className="text-2xl font-bold">Comments</h1>
			<CommentsList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;

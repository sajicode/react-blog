import React from 'react';

const PostForm = () => (
	<div>
		<form>
			<input type="text" placeholder="Post Title" autoFocus />
			<input type="text" placeholder="Post Subtitle" />
			<select
				onChange={(e) => {
					let category = e.target.value;
					if (category === 'javascript') {
						console.log('JavaScript');
					} else if (category === 'php') {
						console.log('PHP');
					} else if (category === 'go') {
						console.log('Golang');
					} else if (category === 'css') {
						console.log('CSS');
					}
				}}
			>
				<option>Select Category</option>
				<option value="javascript">JavaScript</option>
				<option value="php">PHP</option>
				<option value="go">Golang</option>
				<option value="css">CSS</option>
			</select>
			<input type="text" placeholder="Enter Keywords" />
			<input type="text" placeholder="Author" />
			<textarea placeholder="Enter the text for your post" />
			<button>Add Post</button>
		</form>
	</div>
);

export default PostForm;

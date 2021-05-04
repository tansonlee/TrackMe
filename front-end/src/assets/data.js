const demoData = [
	{
		name: "TrackMe Project Manager",
		status: "complete",
		link: "https://github.com/tansonlee/my-machine-language",
		description: "A project management tool used to track the status of personal projects.",
		notes:
			"Note to self: the background color for the login button in the top left is too light. Either add a border or darken it.The navigation buttons are not so nice looking.",
		todos: {
			complete: [
				"Setup the GitHub repository",
				"Add authentication (Google and Github)",
				"Add editing feature",
				"Add the projects page",
				"Add demo mode",
				"Add the home page",
				"Add the new projects page",
				"Add the login page",
				"Add the edit project page",
				"Create mixins with SASS for scalability",
			],
			incomplete: [
				"Modify the color of the login button",
				"Make the projects reorderable",
				"Make the list items reorderable",
			],
		},
		bugs: {
			complete: [
				"Keeping the same project id",
				"Link opening in same page",
				"Footer not sticking to bottom",
				"Curson not pointer over buttons",
			],
			incomplete: ["Firebase error when reloading page", "Error no project id"],
		},
		_id: "1",
		// date: "2021-04-25T02:37:08.565Z",
		// email: "leetanson@gmail.com",
	},
	{
		name: "Language Assembler",
		status: "incomplete",
		link: "https://github.com/tansonlee/my-machine-language",
		description:
			"A machine language assember which allows a user to write in assembly rather than machine language.",
		notes:
			"Find a better way to express the S-expressions. Dont use lists. Possibly create a new data structure or implement an interpreter",
		todos: {
			complete: [
				"Setup the GitHub repository",
				"Add words as operations",
				"Implement the RAM ADT",
			],
			incomplete: [
				"Add jump to subroutine instruction",
				"Add more instructions",
				"New S-expression representation",
			],
		},
		bugs: {
			complete: ["Recursion limit exceeded"],
			incomplete: ["Interaction between some operations", "Error with empty program"],
		},
		_id: "2",
		// date: "2021-04-25T02:37:08.565Z",
		// email: "leetanson@gmail.com",
	},
	{
		name: "Connect 4 Minimax AI",
		status: "unstarted",
		link: "https://github.com/tansonlee/my-machine-language",
		description:
			"An AI that determines the best possible move in Connect 4 using the Minimax algorithm",
		notes: "Watch Code Bullet's video on the Minimax algorithm",
		todos: {
			complete: ["Setup the repository"],
			incomplete: [
				"Add an interface",
				"Implement the core algorithm",
				"Allow for user input",
				"Create a game Class",
			],
		},
		bugs: {
			complete: [],
			incomplete: [],
		},
		_id: "3",
		// date: "2021-04-25T02:37:08.565Z",
		// email: "leetanson@gmail.com",
	},
];

export default demoData;

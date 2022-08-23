const questions = [
    {
        id: 1,
        question: "1. What is the correct command to create a new React project?",
        correctAnswer: "npx create-react-app my-react-app",
        incorrectAnswer: ["npx create-react-app", "npm create-react-app my-react-app", "npm create-react-app"]

    },
    {
        id: 2,
        question: "2. What does myReactApp refer to in the following command?",
        correctAnswer: "The name you want to use for the new app",
        incorrectAnswer: ["The type of app to create", "A reference to an existing app", "The directory to create the new app in"]

    },
    {
        id: 3,
        question: "3. What is the default local host port that a React development server uses?",
        correctAnswer: "3000",
        incorrectAnswer: ["3500", "8080", "5000"]

    },
    {
        id: 4,
        question: "4. A copy of the 'real' DOM that is kept in memory is called what?",
        correctAnswer: "Virtual DOM",
        incorrectAnswer: ["DOM", "Shadow DOM", "React DOM"]

    },
    {
        id: 5,
        question: "5. When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        correctAnswer: "key",
        incorrectAnswer: ["data", "id", "index"]

    }
]

export default questions
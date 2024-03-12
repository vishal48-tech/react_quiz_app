import { atom } from 'recoil';

export const quizState = atom({
    key: 'quizState',
    default: 1,
});

export const user_ansState = atom({
    key: 'user_ansState',
    default: [],
});

export const timer = atom({
    key: 'timer',
    default: 30,
});


export const questionsState = atom({
    key: 'questionsState',
    default: [
        { id: 1, text: "1. What is the correct command to create a new React project?" },
        { id: 2, text: "2. What command is used to start the React local development server?" },
        { id: 3, text: "3. What is the default local host port that a React development server uses?" },
        { id: 4, text: "4. What is the children prop?" },
        { id: 5, text: "5. Which keyword creates a constant in JavaScript?" },
        { id: 6, text: "6. A copy of the 'real' DOM that is kept in memory is called what?" },
        { id: 7, text: "7. Which operator can be used to conditionally render a React component?" },
        { id: 8, text: "8. When rendering a list using the JavaScript map() method, what is required for each element rendered?" },
        { id: 9, text: "9. What tool does React use to compile JSX?" },
        { id: 10, text: "10. How can you optimize performance for a function component that always renders the same way?" },
    ],
});


export const optionState = atom({
    key: 'optionState',
    default: [
        {
            id: 1, items: [
                { id: 1, text: "npx create-react-app" },
                { id: 2, text: "npx create-react-app myReactApp" },
                { id: 3, text: "npm create-react-app myReactApp" },
                { id: 4, text: "npm create-react-app" },
            ]
        },
        {
            id: 2, items: [
                { id: 1, text: "npm start" },
                { id: 2, text: "npm run dev" },
                { id: 3, text: "npm build" },
                { id: 4, text: "npm serve" },
            ]
        },
        {
            id: 3, items: [
                { id: 1, text: "5000" },
                { id: 2, text: "3000" },
                { id: 3, text: "3500" },
                { id: 4, text: "8080" },
            ]
        },
        {
            id: 4, items: [
                { id: 1, text: "A property that adds child values to state" },
                { id: 2, text: "A property that lets you nest components in other components" },
                { id: 3, text: "A property that lets you set an object as a property" },
                { id: 4, text: "A property that lets you pass data to child components" },
            ]
        },
        {
            id: 5, items: [
                { id: 1, text: "const" },
                { id: 2, text: "var" },
                { id: 3, text: "let" },
                { id: 4, text: "constant" },
            ]
        },
        {
            id: 6, items: [
                { id: 1, text: "DOM" },
                { id: 2, text: "Shadow DOM" },
                { id: 3, text: "Virtual DOM" },
                { id: 4, text: "React DOM" },
            ]
        },
        {
            id: 7, items: [
                { id: 1, text: "??" },
                { id: 2, text: "::" },
                { id: 3, text: "||" },
                { id: 4, text: "&&" },
            ]
        },
        {
            id: 8, items: [
                { id: 1, text: "id" },
                { id: 2, text: "key" },
                { id: 3, text: "index" },
                { id: 4, text: "data" },
            ]
        },
        {
            id: 9, items: [
                { id: 1, text: "ReactDOM" },
                { id: 2, text: "JSX Compiler" },
                { id: 3, text: "Babel" },
                { id: 4, text: "React Router" },
            ]
        },
        {
            id: 10, items: [
                { id: 1, text: "Use the shouldComponentUpdate lifecycle method" },
                { id: 2, text: "Wrap it in the React.memo higher-order component" },
                { id: 3, text: "Use the useMemo Hook" },
                { id: 4, text: "Use the useReducer Hook" },
            ]
        },
    ],
})

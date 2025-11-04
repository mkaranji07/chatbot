import { useState, useEffect  } from 'react'
import { Chatbot } from 'supersimpledev'
import  ChatInput  from './components/ChatInput'     
import ChatMessages from './components/ChatMessages'
import RobotProfileImage from './assets/robot.png'

import './App.css'
      


function App () {

  
      // Array Destructuring
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [{ChatMessages}] );
  // const [chatMessages,setChatMessages] = array;
  // The current data/state value
  // const chatMessages = array[0];
  // updater function
  // const setChatMessages = array[1];

    useEffect(() => {
    Chatbot.addResponses({
      'What is React?': 'React is a JavaScript library used for building user interfaces, especially single-page applications where content updates dynamically without reloading the whole page. It was developed by Meta (Facebook) and helps developers create reusable UI components that efficiently update when data changes.',

      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },

      'What are components in React?': 'Components are the building blocks of a React application. They are reusable, self-contained pieces of code that define how a certain part of the user interface should look and behave. Components can be functional or class-based, and they can manage their own state and receive data through props to render dynamic content.',

      'What is JSX?': 'JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML or XML. It allows developers to write HTML-like code within JavaScript, making it easier to create and visualize the structure of React components. JSX is then transpiled into regular JavaScript function calls that create React elements.',

      'What is the Virtual DOM in React?': 'The Virtual DOM is a lightweight, in-memory representation of the actual DOM (Document Object Model) used by web browsers. React uses the Virtual DOM to optimize updates to the user interface. When the state of a component changes, React first updates the Virtual DOM and then efficiently calculates the differences between the previous and current Virtual DOM states. Finally, it applies only the necessary changes to the real DOM, minimizing performance costs associated with direct DOM manipulation.',

      'What is a state in React?': 'State in React refers to a built-in object that allows components to manage and track dynamic data that can change over time. State is mutable, meaning it can be updated, and when it changes, React re-renders the component to reflect the new state in the user interface. State is typically used for data that affects the rendering of a component and is managed within the component itself using the useState hook in functional components or this.state in class components.',

      'What are props in React?': 'Props (short for properties) are read-only inputs that are passed from a parent component to a child component in React. They allow data to be shared between components and help make components reusable and configurable. Props are immutable, meaning that a child component cannot modify the props it receives; instead, it can only use them to render content or pass them down to other child components.',

      
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);

  useEffect (() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages])

  const title = `${chatMessages.length} Messages`;

  return (
    <>
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href={RobotProfileImage} />

    <div className="app-container">
      {chatMessages
      .length === 0 
      && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages}
      />
    </div>

    </>
  );
};

export default App

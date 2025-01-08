

Question 4: What makes the createSlice in redux-toolkit difference then A Reducer in redux?
Ans:- createSlice:
	 It is a utility provided by Redux Toolkit to simplify reducer creation.
	 Combines action creators and reducers in a single slice of state.
	 Automatically generates action creators and action types.
     Reduces boilerplate code by leveraging Immer to write immutable logic with mutating syntax.
	 
Question 5: Describe the benefits of immutable code.
Ans:-Predictability: State cannot be accidentally modified, making the code more predictable.
	 Debugging: Makes debugging easier as changes in state are explicit.
	 
Question 6: How can you verify the action has been dispatched?
Ans:- Redux DevTools: Inspect actions in Redux DevTools to ensure the action was dispatched
	  State change
	  
Question 7: explain the use of useEffect hook in React 
Ans:- The useEffect hook allows you to perform side effects in functional components, such as:
	Fetching data.
	Subscribing to events.
	Manipulating the DOM.
	Usage:
	No Dependency Array: Runs on every render.
	Empty Dependency Array: Runs only once (componentDidMount).
	With Dependencies: Runs when specified dependencies change.

Question 8: What is A High Order Component?
Ans: A Higher-Order Component is a function that takes a component as an argument and returns a new component.

Question 9: What use cases would a HOC be usefull? 
Ans:Code Reuse: Share logic between multiple components(e.g-authentication checks, theming),
	State management: A HOC can be used to manage state for a component, such as fetching data or updating the state.
	
Question 10: What does it indicate when a component is prefixed with use and with?
Ans:- When a component is prefixed with use, it is a Hook(custom hook, e.g: useFetch). When a component is prefixed with with, it is a Higher-Order Component (HOC). HOCs are a way to wrap a component with additional props or behavior.

Question 11: What is a Generic type in typescript? 
Ans:- Generic types allow you to write reusable, type-safe code by parameterizing types.

Question 12: Whats the difference between a controlled and uncontrolled input in React?
Ans:-i)A controlled input is an input whose value is controlled by a component's state. The component's state is updated whenever the user interacts with the input, and the input's value is always in sync with the state.

    ii)An uncontrolled input is an input whose value is not controlled by a component's state. The input's value is stored in the DOM, and the component does not have direct access to it.
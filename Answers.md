# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS uses recyclable components without the strain of rewriting existing code when the data changes. It is also easier to debug code and often uses APIs for reusable data.

2. What does it mean to think in react?

It means to having a mockup in mind thinking about the UI into a component hierarchy and building in mind of how your react app should look like.

3. Describe state.

A state holds information  that influences the output of the render and is managed within the component. They hold similar importance to variables within a function.

4. Describe props.

Props also carry information that is passed as the result of the render and is passed to the component.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effect affects code outside the scope of the function being executed. It creates a network request that allows code communication between the third party to the code within the function’s scope. We sync effects in a react component to state o prop changes by setting the state inside useEffect.UseEffect is what handles side effects.
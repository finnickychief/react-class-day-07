/*
  Some context on Context:

    React data flows one way, top-down from parent to child via props. You can lift it via passing a method as a prop, but this gets very messy quickly.

    Context is used to provide a global state - called a store. This state is going to be managed by the context itself. This is done by creating a Provider(which provides the state to its children), and a Consumer(which makes it available).

    An optional step is to create Actions as well, but we won't need them in these applications.

    The next step is the Reducer. This is the method that will keep track of your operations on the state and update it as necessary.



*/

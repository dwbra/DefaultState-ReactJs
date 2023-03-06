# DefaultStateHook - A Custom ReactJS Hook

### I've created a custom React Hook to help you automatically retrieve and set some state for use in your application from query parameters and localStorage.

The custom hook accepts an object with three key properties. urlParams - bool, localStorage - bool, localStorageNames - array of strings. You can destructure this hook to gain access to the state and also a function to update the state for localStorage (this was done purely for testing purposes).

By setting the first two properties to true or false, you can control what the hook will set automatically. The third property allows you to retrieve all of the different localStorage entries that your may require.

I've left a console.log in the app.js file to immediately showcase the state and function you have access to.

LocalStorage - You can set some localStorage in dev tools and then enter the name in the hook to pull this into your app and you should see it in the console.

URLParmas - You can test with encoded data such as /?query=data%20and%20that&int=112312&arr=%255B%2522art%252C%2520design%2520and%2520architecture%2522%252C%2522arts%2522%255D

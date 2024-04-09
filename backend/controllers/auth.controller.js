export const signup = (req, res) => {
  //creating a function called signup that takes in a request and a response
  res.send("signupuser"); //sending a response to the client
  console.log("signupuser"); //logging to the console
};

export const login = (req, res) => {
  //creating a function called login that takes in a request and a response
  res.send("loginuser"); //sending a response to the client
  console.log("loginuser"); //logging to the console
};

export const logout = (req, res) => {
  //creating a function called logout that takes in a request and a response
  res.send("logoutuser"); //sending a response to the client
  console.log("logoutuser"); //logging to the console
};

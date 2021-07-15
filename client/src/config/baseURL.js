const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:5000/api/v1"
    : "https://blogs-app-mern.herokuapp.com/api/v1";

export default baseURL;

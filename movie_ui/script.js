const url = "https://api.themoviedb.org/3/authentication";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQzY2ZkMWU1ZTk5MTA3NTQ2NDkxMTQ3MjgyODc1ZiIsIm5iZiI6MTc0Mjc4OTQ4Ny41MTgwMDAxLCJzdWIiOiI2N2UwZGI2ZjRjZTA3ZDY4NGUwN2Y0ZTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LpwSOMN54UoVP1ykkAh3ryEEhSkh4xZcQ0TdLr4i0A0",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));

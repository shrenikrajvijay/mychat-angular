module.exports = {
  "port": 8081,
  "files": ["./app/bundle.min.js", "server.js", "./app/**/*.html"],
  "proxy": "localhost:8080"
};

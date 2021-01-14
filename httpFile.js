import { createServer } from "http";
const port = process.env.SERVER_PORT || 3000;

const server = createServer((req, res) => {
  let url = req.url;
  if (url === "/welcome") {
    res.write("Welcome to my page");
    res.end();
  } else if (url === "/about") {
    res.write("Welcome to about page");
    res.end();
  } else {
    res.write("Landing page is here");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Serveris listning to port ${port}`);
});

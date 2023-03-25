import { writeFile, readFile } from "node:fs/promises";
import axios from "axios";
import * as http from "http";

try {
  const { data } = await axios.get("https://www.wikipedia.org/");
  await writeFile("wikipedia.html", data, (err) => {
    if (err) throw err;
  });
  const fileContent = await readFile("wikipedia.html", "utf-8", (err, data) => {
    if (err) throw err;
  });
  const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "html" });
    response.end(fileContent);
    console.log(fileContent);
  });
  server.listen(85);
  console.log("server running at http://127.0.0.1:85/");
} catch (e) {
  console.error(e.message);
}

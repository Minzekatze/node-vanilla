import { writeFile } from "node:fs";
import { Buffer } from "node:buffer";

let myData = "Hello my friends";

const data = new Uint8Array(Buffer.from(myData));
writeFile("test.html", data, (err) => {
  if (err) throw err;
  console.log(`The file has been saved and --> ${myData} <-- was added!`);
});

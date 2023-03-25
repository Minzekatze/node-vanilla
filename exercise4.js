import { readFile, writeFile } from "node:fs";

console.log("today is a great day :D");

async function newContent() {
  try {
    const myData = "Hello my friends";
    await writeFile(
      "./test.html",
      JSON.stringify(myData),
      (err) => err && console.error(err)
    );
    console.log(`The file has been saved and --> ${myData} <-- was added!`);
  } catch (err) {
    console.log(err);
  }
}
newContent();

async function readContent() {
  try {
    await readFile("./test.html", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  } catch (err) {
    console.log(err);
  }
}
readContent();

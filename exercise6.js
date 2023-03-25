import axios from "axios";

axios
  .get("google.com")
  .then((response) => {
    // handle success
    console.log(response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });

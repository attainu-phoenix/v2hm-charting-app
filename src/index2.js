const HEADERS = {
  "X-Parse-Application-Id": "chartowl",
  "Content-Type": "application/json"
};

function createUser() {
  let url = "http://localhost:1337/parse/classes/user";

  fetch(url, {
    method: "post",
    headers: HEADERS,
    body: JSON.stringify({
      username: "mojom2k",
      password: "mojojojo"
    })
  })
    .then(data => data.json())
    .then(json => {
      console.log(json);
    })
    .catch(err => console.log(err));
}

createUser();

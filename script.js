function getuser() {
  fetch("https://randomuser.me/api/?results=3")
    .then(function (raw) {
      return raw.json();
    })
    .then((actual) => {
      document.querySelector(".data").innerHTML = "";

      actual.results.forEach((element) => {
        console.log(element.picture);
        // create main card div
        const card = document.createElement("div");
        card.className = "card";

        // create image
        const img = document.createElement("img");
        img.src = element.picture.large;

        // create info div
        const info = document.createElement("div");
        info.className = "info";

        // create h3
        const h3 = document.createElement("h3");
        h3.innerText = element.name.first;

        // create p
        const p = document.createElement("p");
        p.innerText = element.location.city;

        // create button
        const button = document.createElement("button");
        button.innerText = "Follow";

        // append elements
        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(button);

        card.appendChild(img);
        card.appendChild(info);

        // finally append card to body or any container
        document.querySelector(".data").appendChild(card);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

getuser();

let refresh = document.querySelector(".ref");

refresh.addEventListener("click", function () {
//   location.reload()
  getuser();
});

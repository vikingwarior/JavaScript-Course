// let apiKey = "02f21d68-af54-409a-98fe-8c4b7b99e2ab";
// url = `https://api-bdc.net/data/ip-geolocation?ip=165.225.120.149&localityLanguage=en&key=${apiKey}`;

// response = fetch(url).then((response) => {
//   // Check if the request was successful (status code 200)
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   // Parse the JSON in the response
//   return response.json();
// });

// console.log(response);

let introTxt = ["Welcome my Friend", "Click here to establish connection👇"];

// let renderIntroTxt = (introTxt) => {
//     let introTextContainer = document.createElement("div");
//     introTextContainer.id = "introTextContainer"

//     document.getElementById("mainContainer").appendChild(introTextContainer);
//     introTxt.forEach(async (val) => {
//     await typeMessage(val, introTextContainer);
//   });
// };

// typeMessage(introTxt[0], document.getElementById("mainContainer"));

let RenderText = (messages, container = `mainContainer`) => {
  container.innerHTML = ``;
  messages.forEach(async (message) => {
    await typeMessage(message, container);
    container.innerHTML += `<br>`;
  });
};

let typeMessage = async (txt, container = `mainContainer`) => {
  let i = 0;
  let speed = 50;
  container = document.getElementById(container);
  if (i++ < txt.length) {
    setTimeout(() => {
        container.innerText += txt.charAt();
    }, speed);
  }
  console.log("lol");
};

RenderText(introTxt)

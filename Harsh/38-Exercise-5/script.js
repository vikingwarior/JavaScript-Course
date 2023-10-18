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

let RenderText = async (messages, containerId = `mainContainer`) => {
  const container = document.getElementById(containerId);
  container.innerHTML = ``;

  for (const message of messages) {
    await typeMessage(message, container);
    container.innerHTML += `<br>`;
  }
};

let typeMessage = async (txt, container) => {
  let i = 0;
  let speed = 50;

  return new Promise((resolve) => {
    const typeNextChar = () => {
      if (i < txt.length) {
        container.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeNextChar, speed);
      } else {
        resolve();
      }
    };

    typeNextChar();
  });
};

let renderLandingPage = async (text) => {
  let connectButton = document.createElement('button');
  connectButton.innerHTML = `Connect`;
  connectButton.classList.add("btn");
  connectButton.classList.add("btn-success");
  await RenderText(text);
  document.getElementById(`btnDiv`).appendChild(connectButton);
}

renderLandingPage(introTxt);
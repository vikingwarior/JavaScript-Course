let hackingPrank = async () => {
  // Pass the array of sentenes that you want Render text inside also pass the container id in which the messages should be rendered
  let RenderText = async (
    messages,
    containerId = `mainContainer`,
    speed = 50
  ) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ``;

    for (const message of messages) {
      await typeMessage(message, container, speed);
      container.innerHTML += `<br>`;
    }
  };

  let typeMessage = async (txt, container, speed = 50) => {
    let i = 0;

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

  let connectBtn;

  let renderLandingPage = async (text) => {
    let connectButton = document.createElement("button");
    connectButton.id = "connectBtn";
    connectButton.innerHTML = `Connect`;
    connectButton.classList.add("btn");
    connectButton.classList.add("btn-outline-success");
    await RenderText(text);
    document.getElementById("mainContainer").appendChild(connectButton);
    connectBtn = document.getElementById("connectBtn");
    connectBtn.addEventListener("click", () => renderLoadingScreen());
  };

  let renderLoadingScreen = async () => {
    await RenderText(["Connecting to Wi-Fi"]);
    await renderProgressBar();
    await startThePrank();
    renderConsoleInterface();
  };

  let renderProgressBar = () => {
    document.getElementById("mainContainer").innerHTML +=
      '<div class="progress" role="progressbar"><div class="progress-bar bg-info" style="width: 0%"></div></div>';
    return updateProgressBar();
  };

  let updateProgressBar = () =>
    new Promise((resolve) => {
      let i = -1;
      let progressUpdationInterval = setInterval(async () => {
        document.querySelector("div.progress-bar").style["width"] = `${
          ++i + 1
        }%`;
        if (i >= 100) {
          clearInterval(progressUpdationInterval);
          resolve(); // Resolve when the progress is complete
        }
      }, 50);
    });

  let startThePrank = async () => {
    let mainContainer = document.getElementById("mainContainer");
    mainContainer.innerHTML = "<img src='media/1.gif'></img>";

    let img2 = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          mainContainer.innerHTML = "<img src='media/2.gif'></img>";
          resolve();
        }, 3000);
      });

    let img3 = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          mainContainer.innerHTML = "<img src='media/3.gif'></img>";
          resolve();
        }, 2000);
      });

    let img4 = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          mainContainer.innerHTML = "<img src='media/4.gif'></img>";
          resolve();
        }, 2000);
      });

    let img5 = () =>
      new Promise((resolve) => {
        setTimeout(() => {
          mainContainer.innerHTML = "<img src='media/5.gif'></img>";
          resolve();
        }, 2000);
      });

    await img2();
    await img3();
    await img5();
    await img4();
  
  };

  let fetchUserDetails = async () => {
    let apiKey = "bdc_8ae05a7492c64933ab7b03ac107cf100";
    let url = `https://api-bdc.net/data/ip-geolocation?ip=165.225.120.149&localityLanguage=en&key=${apiKey}`;

    let UserData = fetch(url).then((UserData) => {
      // Check if the request was successful (status code 200)
      if (!UserData.ok) {
        throw new Error(`HTTP error! Status: ${UserData.status}`);
      }

      // Parse the JSON in the UserData
      return UserData.json();
    });
    return UserData;
  };

  // fetchUserDetails();

  let intit = async () => {
    let introTxt = [
      "Welcome my Friend",
      "Click here to connect with Wi-Fi",
      "👇",
    ];
    await renderLandingPage(introTxt);
  } 

  intit();
};

hackingPrank();

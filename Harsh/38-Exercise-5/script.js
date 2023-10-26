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
        mainContainer.innerHTML = "<img src='media/4.gif'></img>";
        resolve();
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
    await renderConsoleInterface();
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


  let renderConsoleInterface = async () => {
    let UserData;

    let storeUserData = async () => {
      return new Promise((resolve) => {
        setTimeout(async () => {
          UserData = await fetchUserDetails();
          // UserData = {
          //   ip: "165.225.120.149",
          //   localityLanguageRequested: "en",
          //   isReachableGlobally: true,
          //   country: {
          //     isoAlpha2: "IN",
          //     isoAlpha3: "IND",
          //     m49Code: 356,
          //     name: "India",
          //     isoName: "India",
          //     isoNameFull: "the Republic of India",
          //     isoAdminLanguages: [
          //       {
          //         isoAlpha3: "eng",
          //         isoAlpha2: "en",
          //         isoName: "English",
          //         nativeName: "English",
          //       },
          //       {
          //         isoAlpha3: "hin",
          //         isoAlpha2: "hi",
          //         isoName: "Hindi",
          //         nativeName: "हिन्दी",
          //       },
          //     ],
          //     unRegion: "Central and Southern Asia/Southern Asia",
          //     currency: {
          //       numericCode: 356,
          //       code: "INR",
          //       name: "Indian Rupee",
          //       minorUnits: 2,
          //     },
          //     wbRegion: {
          //       id: "SAS",
          //       iso2Code: "8S",
          //       value: "South Asia",
          //     },
          //     wbIncomeLevel: {
          //       id: "LMC",
          //       iso2Code: "XN",
          //       value: "Lower middle income",
          //     },
          //     callingCode: "91",
          //     countryFlagEmoji: "🇮🇳",
          //     wikidataId: "Q668",
          //     geonameId: 1269750,
          //     isIndependent: true,
          //   },
          //   location: {
          //     principalSubdivision: "Maharashtra",
          //     isoPrincipalSubdivision: "Mahārāshtra",
          //     isoPrincipalSubdivisionCode: "IN-MH",
          //     continent: "Asia",
          //     continentCode: "AS",
          //     city: "Sirur",
          //     localityName: "Sirur",
          //     postcode: "",
          //     latitude: 18.78,
          //     longitude: 74.26,
          //     plusCode: "7JCPQ7J6+22",
          //     timeZone: {
          //       ianaTimeId: "Asia/Kolkata",
          //       displayName: "(UTC+05:30) India Standard Time (Kolkata)",
          //       effectiveTimeZoneFull: "India Standard Time",
          //       effectiveTimeZoneShort: "IST",
          //       utcOffsetSeconds: 19800,
          //       utcOffset: "+05:30",
          //       isDaylightSavingTime: false,
          //       localTime: "2023-10-24T00:49:49.2702156",
          //     },
          //     localityInfo: {
          //       administrative: [
          //         {
          //           name: "India",
          //           description: "country in South Asia",
          //           isoName: "India",
          //           order: 3,
          //           adminLevel: 2,
          //           isoCode: "IN",
          //           wikidataId: "Q668",
          //           geonameId: 1269750,
          //         },
          //         {
          //           name: "Maharashtra",
          //           description:
          //             "state in the western and central peninsular region of India",
          //           isoName: "Maharashtra",
          //           order: 6,
          //           adminLevel: 4,
          //           isoCode: "IN-MH",
          //           wikidataId: "Q1191",
          //           geonameId: 1264418,
          //         },
          //         {
          //           name: "Pune district",
          //           description: "district of Maharashtra, India",
          //           order: 9,
          //           adminLevel: 5,
          //           wikidataId: "Q1797336",
          //           geonameId: 1259230,
          //         },
          //         {
          //           name: "Pune Metropolitan Region",
          //           description: "human settlement in India",
          //           order: 10,
          //           adminLevel: 7,
          //           wikidataId: "Q7260110",
          //         },
          //         {
          //           name: "Sirur",
          //           description: "human settlement",
          //           order: 11,
          //           adminLevel: 6,
          //           wikidataId: "Q1592000",
          //           geonameId: 1256025,
          //         },
          //       ],
          //       informative: [
          //         {
          //           name: "Asia",
          //           description: "continent",
          //           isoName: "Asia",
          //           order: 1,
          //           isoCode: "AS",
          //           wikidataId: "Q48",
          //           geonameId: 6255147,
          //         },
          //         {
          //           name: "Asia/Kolkata",
          //           description: "time zone",
          //           order: 2,
          //         },
          //         {
          //           name: "Indian subcontinent",
          //           description: "physiographical region in South Asia",
          //           order: 4,
          //           wikidataId: "Q60140",
          //           geonameId: 6269134,
          //         },
          //         {
          //           name: "Western Zonal Council",
          //           order: 5,
          //         },
          //         {
          //           name: "Krishna river basin",
          //           order: 7,
          //         },
          //         {
          //           name: "Central Railway",
          //           order: 8,
          //         },
          //       ],
          //     },
          //   },
          //   lastUpdated: "2023-10-23T00:13:15.0691528Z",
          //   network: {
          //     registry: "ARIN",
          //     registryStatus: "assigned",
          //     registeredCountry: "IN",
          //     registeredCountryName: "India",
          //     organisation: "Zscaler Softech India Private Limited",
          //     isReachableGlobally: true,
          //     isBogon: false,
          //     bgpPrefix: "165.225.120.0/24",
          //     bgpPrefixNetworkAddress: "165.225.120.0",
          //     bgpPrefixLastAddress: "165.225.120.255",
          //     totalAddresses: 256,
          //     carriers: [
          //       {
          //         asn: "AS53813",
          //         asnNumeric: 53813,
          //         organisation: "ZSCALER, INC.",
          //         name: "ZSCALER-INC",
          //         registry: "Arin",
          //         registeredCountry: "US",
          //         registeredCountryName: "United States of America (the)",
          //         registrationDate: "2011-06-03",
          //         registrationLastChange: "2013-04-23",
          //         totalIpv4Addresses: 30659,
          //         totalIpv4Prefixes: 79,
          //         totalIpv4BogonPrefixes: 0,
          //         totalIpv6Prefixes: 12,
          //         totalIpv6BogonPrefixes: 0,
          //         rank: 5281,
          //         rankText: "#5,281 out of 76,384",
          //       },
          //     ],
          //     viaCarriers: [
          //       {
          //         asn: "AS9498",
          //         asnNumeric: 9498,
          //         organisation: "Bharti Airtel Limited",
          //         name: "BBIL-AP",
          //         registry: "Apnic",
          //         registeredCountry: "IN",
          //         registeredCountryName: "India",
          //         totalIpv4Addresses: 1790802,
          //         rank: 240,
          //         rankText: "#240 out of 76,384",
          //       },
          //       {
          //         asn: "AS55410",
          //         asnNumeric: 55410,
          //         organisation: "Vodafone Idea Ltd. (VIL)",
          //         name: "VIL-AS-AP",
          //         registry: "Apnic",
          //         registeredCountry: "IN",
          //         registeredCountryName: "India",
          //         totalIpv4Addresses: 254703,
          //         rank: 970,
          //         rankText: "#970 out of 76,384",
          //       },
          //       {
          //         asn: "AS9583",
          //         asnNumeric: 9583,
          //         organisation: "Sify Limited ISP in India",
          //         name: "SIFY-AS-IN",
          //         registry: "Apnic",
          //         registeredCountry: "IN",
          //         registeredCountryName: "India",
          //         totalIpv4Addresses: 638908,
          //         rank: 512,
          //         rankText: "#512 out of 76,384",
          //       },
          //       {
          //         asn: "AS49544",
          //         asnNumeric: 49544,
          //         organisation: "i3D.net B.V",
          //         name: "i3Dnet",
          //         registry: "Ripe",
          //         registeredCountry: "NL",
          //         registeredCountryName: "Netherlands (the)",
          //         totalIpv4Addresses: 99450,
          //         rank: 1953,
          //         rankText: "#1,953 out of 76,384",
          //       },
          //     ],
          //   },
          // };
          resolve();
        }, 3000);
      });
    };

    await storeUserData();

    document.getElementById("mainContainer").style[`marginTop`] = 0;

    const userCountry = UserData.location.localityInfo.administrative[0].name;
    const userState = UserData.location.localityInfo.administrative[1].name;
    const userCity = UserData.location.localityInfo.administrative[2].name;
    const userIp = UserData.ip;
    const userCarrier = UserData.network.viaCarriers[0].organisation;

    const commandArray = [
      `intercepting your IP address....`,
      `IP Successfully captured`,
      ``,
      `Your IP Address is:`,
      `$${userIp}`,
      ``,
      `Fetching Carrier `,
      `Showing carrier Name`,
      `$${userCarrier}`,
      ``,
      `Fetching Location Data:`,
      `Location tapping successful`,
      `Displaying Location`,
      ``,
      `$Area: ${userCity}`,
      `$State: ${userState}`,
      `$Country: ${userCountry}`,
    ];

    let createDivForTerminal = () => {
      document.getElementById(
        "mainContainer"
      ).innerHTML = `<div class='FinalHeading'>Collecting your Data</div><div id="gifDiv"><img src="media/6.gif"></div><div id="terminal"></div>`;
    };

    createDivForTerminal();
    const terminal = document.getElementById("terminal");

    const renderCommand = async (command) => {
      if (command.charAt(0) == `$`) {
        let doller = `<span class='doller'>$</span>`
        terminal.innerHTML += doller;
        for (let i = 1; i < command.length; i++) {
          terminal.innerHTML += command.charAt(i);
          await sleep(50); // Adjust typing speed (milliseconds)
        }
      }else{
        for (let i = 0; i < command.length; i++) {
          terminal.innerHTML += command.charAt(i);
          await sleep(50); // Adjust typing speed (milliseconds)
        }
      }
      
      terminal.innerHTML += "<br>";
    };

    const executeCommands = async () => {
      for (const command of commandArray) {
        await renderCommand(command);
      }
      renderCursor();
    };

    const renderCursor = () => {
      const cursor = document.createElement("span");
      cursor.className = "cursor";
      terminal.appendChild(cursor);
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    executeCommands();
  };

  let intit = async () => {
    let introTxt = [
      "Welcome!",
      "Click here to connect with Wi-Fi",
      "👇",
    ];
    await renderLandingPage(introTxt);
  };

  intit();
};

hackingPrank();

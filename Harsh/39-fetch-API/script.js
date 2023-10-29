let fetchAPI = async () => {
  let response = await fetch(
    `https://api.oceandrivers.com/v1.0/getWeatherDisplay/pune/?period=latestdata`
  );
  let result = response.json();
  console.log(result);     
};

fetchAPI();
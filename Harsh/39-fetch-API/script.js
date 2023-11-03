/**
 * fetch() -> starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
 * 
 * NOTE ->
 * The desired value is often encapsulated inside the response body that contains the status of the request. To extract the desired value, response.json() Needs to be fetched.
 * Retriving the promise from the fetch() is 2 stage process.
 * Following is an example of a GET Request ->
 * Get Request -> When data is sent by appending it to a URL
 * Limitation -> Cannot send large data due to URL limitations
 */

let fetchAPIGet = async () => {
  let response = await fetch(
    `https://api.oceandrivers.com/v1.0/getWeatherDisplay/pune/?period=latestdata`
  );
  let result = response.json();
  console.log(result);     
};

fetchAPIGet();
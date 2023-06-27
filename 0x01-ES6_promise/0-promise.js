export default function getResponseFromAPI() {
  return new Promise((resolver) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
    // Assuming the API call is succesful
      const responseData = { message: 'API response'};
      resolver(responseData);

      // If the API call encounters an error, use `reject` instead
      // reject(new Error("API error"));
    }, 2000);
  });
}

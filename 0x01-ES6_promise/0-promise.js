export default function getResponseFromAPI() {
  return new Promise((resolver) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Assuming the API call is succesful
      const responseData = { message: 'API response' };
      resolver(responseData);
    }, 2000);
  });
}

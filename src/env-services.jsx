
const config = {
    api: "https://tryfew.in/erenjeager/public/api/captain/",
    // api: "http://localhost:8142/api/v1/",
    options: {
      headers: {
        "content-type": "application/json"
      },
    },
  };

  
  const hostUrl = "https://stage-api.localmart.app:8443";


  const handleResponse = (response) => {
    if (response.status == 200 || response.status == 201) {
      return response.json();
    } else {
      throw Error(response.json() | "error");
    }
  };


  export { config, hostUrl, handleResponse };
  
import config from "../config";

let graphqlClient = function(url) {
    if (!url) {
        url = config.url;
    }

    this.url = url;
}

graphqlClient.prototype.fetch = function(query, variables, onAjaxSuccess, onAjaxError) {
    fetch(this.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(responseJson => onAjaxSuccess(responseJson))
        .catch((error) => onAjaxError(error));
}

export default graphqlClient;
const get = (url, urlParams) => {
  url = urlParams ? url.replace(":id", {urlParams}) : url;

  return fetch(url, {
		headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};

const post = (url, bodyParams) => {
	console.log("bodyParams", bodyParams);
  return fetch(url, {
		method: "POST",
		headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParams),
  });
};

const put = (url, bodyParams, urlParams) => {
  url = urlParams ? url.replace(":id", urlParams) : url;

  return fetch(url, {
		method: "PUT",
		headers: {
      "Content-Type": "application/json",
    },
    body: bodyParams,
  });
};

const destroy = (url, urlParams) => {
  url = urlParams ? url.replace(":id", urlParams) : url;

  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
};

const httpClient = {
  get,
  post,
	put,
	destroy
};
export default httpClient;

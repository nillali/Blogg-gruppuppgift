let queryString = location.search; // retrieving the querystring
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');

console.log(id);
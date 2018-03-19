
var SetStoredObject = function (name, value) {
    localStorage.setItem(name, value);
}

var GetStoredObject = function (name) {
    return localStorage.getItem(name);
}

SetStoredObject('restApiPath', 'https://my-dashboard-restapi.herokuapp.com/');

var SetStoredObject = function (name, value) {
    localStorage.setItem(name, value);
}

var GetStoredObject = function (name) {
    return localStorage.getItem(name);
}

SetStoredObject('restApiPath', 'http://localhost:8080/');


var SetStoredObject = function (name, value) {
    localStorage.setItem(name, value);
}

var GetStoredObject = function (name) {
    return localStorage.getItem(name);
}

var HideShowSideBar = function () {
    if ($("#divSideBar").hasClass("sidebar-collapsed")) {
        $("#divSideBar").removeClass("sidebar-collapsed");
        $("main").removeClass("mg-left-45")
    } else { 
        $("#divSideBar").addClass("sidebar-collapsed");
        $("main").addClass("mg-left-45")
    }
}

var HideShowMobileSideBar = function () {
    if ($("#divSideBar").hasClass("sidebar-collapsed-mobile")) {
        $("#divSideBar").removeClass("sidebar-collapsed-mobile");
        $("main").removeClass("mg-left-45")
    } else {
        $("#divSideBar").addClass("sidebar-collapsed-mobile");
        $("main").removeClass("mg-left-45")
    }
}

SetStoredObject('restApiPath', 'https://my-dashboard-restapi.herokuapp.com/');

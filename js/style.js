document.getElementById("btnNav").addEventListener("click", toggleNav);

function toggleNav() {
    let navSize = document.getElementById("mySidenav").style.width;
    if (navSize == '130px') {
        return close();
    }
    return open();
}

function open() {
    document.getElementById("mySidenav").style.width = "130px";
}

function close() {
    document.getElementById("mySidenav").style.width = "0";
}
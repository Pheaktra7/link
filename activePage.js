var current = location.pathname.split('/')[2];
var menuItems = document.querySelectorAll('.menu a');
for (var i = 0 ; i < menuItems.length; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
        menuItems[i].className += "active";
    }
}

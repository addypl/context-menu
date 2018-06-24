document.addEventListener('DOMContentLoaded', function () {

    const menu = document.querySelector('#context-menu');

    function menuShow(e) {
        if (e.button === 2) {
            e.preventDefault();
            e.stopPropagation();
            menu.style.left = e.pageX + 5 + 'px';
            menu.style.top = e.pageY + 0 + 'px';
        }
    }

    function menuHide() {
        menu.style.left = '-9999px';
        menu.style.top = '0px'
    }

    document.addEventListener('mousedown', menuShow);

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('mousedown', function (e) {
        if (e.button !== 2) {
            menuHide();
        }
    });
    document.addEventListener('scroll', menuHide);
});
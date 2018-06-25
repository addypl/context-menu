document.addEventListener('DOMContentLoaded', function () {

    const menu = document.querySelector('#context-menu');

    function menuShow(e) {
        if (e.button === 2) {
            e.preventDefault();
            e.stopPropagation();
            let position = countPosition(menu, e.pageX, e.pageY);
            menu.style.left = position.x + 'px';
            menu.style.top = position.y + 'px';
        }
    }

    // functions checks if the element will not be placed outside the window

    function countPosition(el, cursorX, cursorY) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const elWidth = el.offsetWidth;
        const elHeight = el.offsetHeight;
        const position = {
            x: 0,
            y: 0
        };

        if (cursorX + elWidth + 10 > windowWidth) {
            position.x = cursorX - elWidth - 5;
        } else {
            position.x = cursorX + 5;
        }

        if (cursorY + elHeight + 5 > windowHeight) {
            position.y = cursorY - elHeight;
        } else {
            position.y = cursorY;
        }

        return position;
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
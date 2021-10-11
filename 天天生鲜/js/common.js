window.hx = {
    g: function (name) {
        return document.querySelector(name);
    },
    ga: function (name) {
        return document.querySelectorAll(name);
    },
    addEvent: function (obj, ev, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(ev, fn);
        }else {
            obj.attachEvent('on' + ev, fn);
        }
    },
    removeEvent: function (obj,ev, fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(ev, fn);
        } else {
            obj.detachEvent('on'+ev,fn);
        }
    }
}
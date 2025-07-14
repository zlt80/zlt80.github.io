function MenuLateral() {
    var dis = this;
    dis.menu = document.getElementById("menu-lateral");
    dis.btn = document.getElementById("btn-menu-lateral");
    dis.touchsi = "ontouchstart" in window;
    dis.empieza;
    dis.mientras;
    dis.termina;
    dis.moviendo = false;
    dis.puntoPartida;
    dis.movido;
    dis.pos;
    dis.abierto = false;

    if (dis.touchsi) {
        dis.empieza = "touchstart";
        dis.mientras = "touchmove";
        dis.termina = "touchend";
    } else {
        dis.empieza = "mousedown";
        dis.mientras = "mousemove";
        dis.termina = "mouseup";
    }

    dis.menu.addEventListener(dis.empieza, function (event) {
        event.preventDefault;

        dis.moviendo = true;

        if (dis.touchsi) {
            dis.puntoPartida = event.touches[0].clientX;
            dis.pos = dis.menu.offsetLeft * -1;
        } else {
            dis.puntoPartida = event.clientX;
            dis.pos = dis.menu.offsetLeft * -1;
        }
    });

    document.addEventListener(dis.mientras, function (event) {
        event.preventDefault();

        if (dis.moviendo) {
            if (dis.touchsi) {
                dis.movido = event.touches[0].clientX - dis.puntoPartida;
                console.log("movido: " + dis.movido);
            } else {
                dis.movido = event.clientX - dis.puntoPartida;
                console.log("movido: " + dis.movido);
            }

            dis.menu.style.left = dis.movido - dis.pos + "px";
        } else {
        }
    });

    document.addEventListener(dis.termina, function (event) {
        dis.moviendo = false;
        event.preventDefault();

        if (dis.movido > 50) {
            dis.menu.style.left = 0 + "px";
            dis.abierto = true;
        } else if (dis.movido < -50) {
            dis.menu.style.left = -220 + "px";
            dis.abierto = false;
        } else {
            if (dis.abierto) {
                dis.menu.style.left = 0 + "px";
            } else {
                dis.menu.style.left = -220 + "px";
            }
        }
    });
}

if (document.getElementById("menu-lateral") != null) {
    var lateral = new MenuLateral();
}

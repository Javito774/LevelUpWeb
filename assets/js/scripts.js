!function () {
    function setCookie(cname, cvalue, exdays = null) {
        if(exdays !== null) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        else
            document.cookie = cname + "=" + cvalue + ";path=/";
    }
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return undefined;
    }
    if (getCookie("AceptarCookies") !== undefined) {
        mostrarCookies();
    }
    else if(getCookie("AceptarCookies") === true) {
        aniadirGoogleAnalythics();
    }
    function mostrarCookies() {
        document.querySelector("#cookies-disclimer").classList.add("show");

        document.querySelector("#cookies-disclimer button").addEventListener('click',aceptarCookies);
        function aceptarCookies(){
            setCookie("AceptarCookies", true);
            aniadirGoogleAnalythics();
            esconderCookies();
        }

        document.querySelector("#cookies-disclimer #botton-cerrar-cookies").addEventListener('click', denegarCookies);
        function denegarCookies(){
            setCookie("AceptarCookies", false,1);
            esconderCookies();
        }

        function esconderCookies() {
            document.querySelector("#cookies-disclimer").classList.remove("show");
        }
    }
    function aniadirGoogleAnalythics() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PJXHCNPXRM');
    }
}();
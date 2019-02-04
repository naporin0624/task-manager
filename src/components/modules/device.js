const ua = navigator.userAgent.toUpperCase()


export default {
    isiPhone: () => {
        if (ua.indexOf("IPHONE") > 0) return true;
        else return false;
    },
    isAndroid: () => {
        if (ua.indexOf("ANDROID") > 0) return true;
        else return false;
    },
    isiPad: () => {
        if (ua.indexOf("IPAD") > 0) return true;
        else return false;
    },
    isiPod: () => {
        if (ua.indexOf("IPOD") > 0) return true;
        else return false;
    },
    isPC: () => {
        if (((ua.indexOf('IPHONE') > 0 && ua.indexOf('IPAD') == -1) || ua.indexOf('IPOD') > 0 || ua.indexOf('ANDROID') > 0)) return false;
        else return true;
    }
}
import Cookies from "js-cookie";
if (window.location.href!='/'){
    if(!Cookies.get('token')){
        window.location.href='/';
    }
}
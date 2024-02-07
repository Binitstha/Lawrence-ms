import Cookies from "js-cookie";
if (window.location.href!='/'){
    if(!localStorage.getItem('user-details')){
        window.location.href='/';
    }
}
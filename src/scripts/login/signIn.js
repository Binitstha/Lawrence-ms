

const fetchToken=(email,pass)=>{
    const requestBody={
        email:email,
        password:pass,
    };
    fetch('http://localhost:3000/authentication/signIn',{
        method:'POST',
        headers:{
            "content-type":'application/json',
        },
        body:JSON.stringify(requestBody),

    }).then((response)=>{
        if(!response.ok){
          return console.log("response error");  
        }
        return response.json();
    }).then((resData)=>{
        document.cookie=JSON.stringify(resData.data);
    })

}
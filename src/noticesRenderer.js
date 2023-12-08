fetch('http://localhost:3000/getNotices',{
    method:'GET',
    headers:{
        'content-type':'application/json',
    }
}).then((response)=>{
    if(!response.ok){
        console.log("Response error");
    }
    return response.json();
}).then((data)=>{
    console.log(data);
    
    const noticeContainer=document.getElementById('noticeContainer');
    data.forEach((notice)=>{
        console.log(notice);
        const item=document.createElement('div');
        item.innerHTML=`<div class="flex flex-col rounded-lg shadow-lg bg-white mx-2 mb-2">
        <div class="flex justify-between px-5">
            <div class="header text-3xl">${notice.header }</div>
            <div class="date-and-semester flex gap-3">
                <div >Semester:${notice.semester}</div>
                <div class="date">| ${notice.date}</div>
            </div>
        </div>
        <div class="description px-5 text-gray-500 overflow-hidden">
            ${notice.description}
        </div>
    </div>`;
    noticeContainer.appendChild(item);
    });
});
let notices=[];
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
  
    
    const noticeContainer=document.getElementById('noticeContainer');
    data.forEach((notice)=>{
        notices.push(notice);
        const item=document.createElement('div');
        item.innerHTML=`<div class="noticeItem flex  px-5 pb-2 items-center w-full"  >
        <div class="w-[25%] font-bold">${notice.header}</div>
        <div class="w-[50%] overflow-hidden">${notice.description}</div>
        <div class="w-[25%] flex items-end justify-end">
            <div href="#" data-id=${notice.id} class="noticeViewBtn flex rounded-full border-2 self-end border-blue-300 px-5 py-1 hover:bg-blue-300 text-sm transition-all ease-in-out">View</div>
        </div>
    </div>`;
    noticeContainer.appendChild(item);
    });
    assignNoticeListeners();
    return;
});

const renderNoticeViewModal=(notice)=>{
    const id=notice.getAttribute('data-id');
    const currentNotice=notices.find((item)=>{
        return item.id==id;
    });
    const noticeHeader = document.getElementById("noticeModalHeader");
    const noticeDes = document.getElementById("noticeModalDes");
    noticeHeader.innerHTML=currentNotice.header;
    return noticeDes.innerHTML=currentNotice.description;

}
const assignNoticeListeners = () => {
	const noticeViewBtn = document.querySelectorAll(".noticeViewBtn");
	const noticeViewModal = document.getElementById("noticeViewModal");
	const noticeViewCloseBtn = document.getElementById("noticeViewModalCloseBtn");
	noticeViewBtn.forEach((item) => {
		item.addEventListener("click", (e) => {
			displayNoticeViewModal();
            renderNoticeViewModal(e.target);
		});
	});

	const displayNoticeViewModal = () => {
		noticeViewModal.classList.remove("hidden");
	};
	noticeViewCloseBtn.addEventListener("click", () => {
		noticeViewModal.classList.add("hidden");
	});
    return
};


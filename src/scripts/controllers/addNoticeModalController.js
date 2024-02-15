// import assignNoticeListeners from 'src/scripts/renderer/noticeRenderer.js'
import Cookies from "js-cookie";
const addNoticeModal = document.getElementById('addNoticeModal');
document.getElementById('addNotice').addEventListener('click', (e) => {
    e.preventDefault();
    addNoticeModal.classList.replace('-top-[100vh]', 'top-0');
})
document.getElementById('addNoticeModalCloseBtn').addEventListener('click', () => {
    addNoticeModal.classList.replace('top-0', '-top-[100vh]');

})

document.getElementById('submitNotice').addEventListener('click', () => {
    const noticeHeader = document.getElementById('addNoticeHeader').value;
    const noticeDescription = document.getElementById('addNoticeDes').value;
    const date = new Date();
    const requestBody = {
        id: Date.now(),
        title: noticeHeader,
        description: noticeDescription,
        date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    }

    fetch('http://localhost:3000/api/notice/addNotice', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "authorization": "Bearer " + Cookies.get("token"),
        },
        body: JSON.stringify(requestBody),
    }).then((response) => {
        if (!response.ok) {
            return console.log("Bad response");
        }
        else if (response.ok) {
            console.log(response)
            setTimeout(() => {
                addNoticeModal.classList.replace('top-0', '-top-[100vh]');
            }, 100);
        }
        return response.json();
    }).then((responseData) => {
            const item = document.createElement('div');
            item.innerHTML = `<div class="noticeItem flex  px-5 pb-2 items-center w-full"  >
            <div class="w-[25%] font-bold">${responseData.data.title}</div>
            <div class="w-[50%] overflow-hidden">${responseData.data.description}</div>
            <div class="w-[25%] flex items-end justify-end">
                <div href="#" data-id=${1} class="noticeViewBtn flex cursor-pointer rounded-md border-2 self-end border-blue-500 px-5 py-1 hover:bg-blue-500 hover:text-white text-sm transition-all ease-in-out">View</div>
            </div>
        </div>`;
            noticeContainer.appendChild(item);
        assignNoticeListeners();
        return;
    })
})
const closeBtn = document.getElementById("ass-model-close-btn");
const noticeModel = document.getElementById("notice-view-model");
closeBtn.addEventListener("click", () => {
	noticeModel.style.top = "-100vh";
});

const assignListeners = () => {
	// const listItem=document.getElementsByClassName('ass-list-item');
	const listItem = document.querySelectorAll(".ass-list-item");
	listItem.forEach((item) => {
		item.addEventListener("click", () => {
			modelOpener();
		});
	});
};
function modelOpener() {
	noticeModel.style.top = "0";
}

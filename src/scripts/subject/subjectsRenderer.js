// const subjects = [
// 	{
// 		id: 1,
// 		semSubs: [
// 			{
// 				SubjectName: [
// 					"Physics",
// 					"Digital logic",
// 					"Mathematics I",
// 					"Introduction of Information and technology",
// 					"C programming",
// 				],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		semSubs: [
// 			{
// 				SubjectName: ["Microprocessor", "sub2", "sub2", "sub2", "sub2", "sub2"],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 3,
// 		semSubs: [
// 			{
// 				SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2"],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 4,
// 		semSubs: [
// 			{
// 				SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2"],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 5,
// 		semSubs: [
// 			{
// 				SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2"],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 6,
// 		semSubs: [
// 			{
// 				SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2"],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 7,
// 		semSubs: [
// 			{
// 				SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2"],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: 8,
// 		semSubs: [
// 			{
// 				SubjectName: ["Physics", "sub2", "sub2", "sub2", "sub2", "sub2"],
// 				ChapterName: [
// 					"1Chapter1",
// 					"1chapter2",
// 					"1chapter3",
// 					"1chapter4",
// 					"1chapter5",
// 				],
// 			},
// 		],
// 	},
// ];

import { semesterDetails } from "../semester/semester.js";
const subjectContainer=document.getElementById('subjectContainer');

function subNameRender(semesterId) {
	const semester = semesterDetails.find((sem) => sem.semesterId == semesterId);
	if (semester) {
		semester.subjects.forEach((subject) => {

            let chapters='';

            for(let i=0;i<7;i++){
                chapters+=`<div class="whitespace-nowrap overflow-hidden">- ${subject.chapters[i]} </div>`;
            }

            const newItem=document.createElement('div');
            newItem.innerHTML=`<div  class="bg-blue-300 px-5 py-2 rounded-md">
            <div id="subjectTopic" class="topic whitespace-nowrap overflow-hidden bg-white px-2 rounded-md font-semibold text-center " >${subject.subjectName}</div>
            <div id="subjectList overflow-hidden whitespace-nowrap" class="mt-5">
                ${chapters}
            </div>
            <div class="bootomInfo flex bg-white px-2 text-bold justify-between rounded-md font-medium mt-2">
                <div id="subCode">${subject.subjectId}</div>
                <div><span id="ChapterCount">${(subject.chapters).length}+</span> chapters</div>
            </div>
       </div>`
       subjectContainer.append(newItem);
		});
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const url = document.location.href;

	// find ? and retrive semester
	const splittedUrl = url.split("");
	console.log(splittedUrl);
	const index = splittedUrl.findIndex((item) => {
		return item == "?";
	});
	const semesterId = url.slice(index + 1);

	// const semesteriddiv = document.getElementById("semesterId");
	// const semesterItem = document.createElement("p");
	// semesterItem.innerHTML = `<p class="text-3xl p-5">Semester ${semesterId}</p>`;
	// semesteriddiv.appendChild(semesterItem);
    // console.log(semesterId)
	subNameRender(semesterId);
});

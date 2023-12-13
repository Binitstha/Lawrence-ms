const eventAdderBox = document.getElementById("eventAdderBox")
const addEventClose = document.getElementById("addEventClose")
const addEventBtn = document.getElementById("addEventBtn")
addEventClose.addEventListener("click", () => {
    eventAdderBox.style.display = "none"
})

addEventBtn.addEventListener("click", () => {
    eventAdderBox.style.display = "inline"
    eventTitle.value = ''
    eventDesc.value = ''
})

const eventTitle = document.getElementById("eventTitle")
const eventDesc = document.getElementById("eventDesc")
const eventSubmitBtn = document.getElementById("eventSubmitBtn")

const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",];
const date = new Date()

eventSubmitBtn.addEventListener('click', () => {
    const currentDate = date.getFullYear() + '/' + month[date.getMonth()] + '/' + date.getDate()
    if (eventTitle.value != '' || eventDesc.value != '') {
        const value = {
            "events": eventTitle.value,
            "eventdesc": eventDesc.value,
            "date": currentDate,
            "venue": "college premisses"
        }
        try {
            fetch("http://localhost:3000/addEvents", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(value)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw "response error"
                    }
                    else {
                        console.log("Data inserted")
                    }
                    return response.json;
                })
                .then((data) => {
                    return data
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (err) { throw err }
    }
})

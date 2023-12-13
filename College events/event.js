const table = document.getElementById("table")

fetch("http://localhost:3000/events", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.forEach(el => {
            const listItem = document.createElement('tbody')
            listItem.innerHTML = `<td class="border-2 p-1">${el.eventid}</td><td class="border-2 p-1">${el.events}</td><td class="border-2 p-1">${el.date}</td><td class="border-2 p-1">${el.venue}</td>`
            table.appendChild(listItem)
        });
    })
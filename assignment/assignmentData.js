const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

    const status = Array.from(checkBoxes).map((checkBox) => {
        const studentid = checkBox.getAttribute('data-studentid')
        const studentname = checkBox.getAttribute('data-studentname');
        const check = checkBox.checked;
        return ({ studentid, studentname,check });
    });
    console.log(status)
    console.log(JSON.stringify(status))
    fetch('http://localhost:3000/assignment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(status)
    })
        .then((response) => {
            if (!response.ok) {
                throw "Response Error"
            }
            return response.json;
        }).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
})
// Fetch demo uge 37

// 1: Først hægtes en event-listener på Get user knappen:

let singlePersonRecordInputBtn = document.getElementById("singlePersonRecordInputBtn");

singlePersonRecordInputBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let singlePersonRecordTextInput = document.getElementById("singlePersonRecordTextInput");
    fetchSinglePerson(singlePersonRecordTextInput.value);
});

// 2: Så hægtes en event-listener på Get all knappen:

let getAllPersonsBtn = document.getElementById("getAllPersonsBtn");

getAllPersonsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    fetchAllPersons();
});

// 3.1: Her fetches en enkelt person ud fra deres id (som json):

function fetchSinglePerson(id) {
    let url = 'https://jsonplaceholder.typicode.com/users/' + id;
    fetch(url)
        .then(res => res.json()) //in flow1, just do it
        .then(data => {
            let singlePersonRecord = document.getElementById("singlePersonRecord");
            singlePersonRecord.innerHTML = renderObjectToHTML(data);
        });
}

// 3.2 Her trækkes data ud af et person-objekt og laves til html:

function renderObjectToHTML(myPersonObj) {
    result = `Name: ${myPersonObj.name}<br/>
    Phone: ${myPersonObj.phone}<br/><br/>
    <strong>Address: </strong><br/>
    Street: ${myPersonObj.address.street} <br/>
    City: ${myPersonObj.address.city} <br/>
    Zip: ${myPersonObj.address.zipcode} <br/>
    Geo (lat, lng): ${myPersonObj.address.geo.lat},
    ${myPersonObj.address.geo.lng})<br/>`
    return result;
}

// 3: Her fetches alle person fra api'et (som json) og laves til html:

function fetchAllPersons() {
    let url = 'https://jsonplaceholder.typicode.com/users/';
    let allPersons = document.getElementById("allPersons");
    fetch(url)
        .then(res => res.json()) //in flow1, just do it
        .then(data => {
            let newArray = data.map(x => `<tr><td>${x.name}</td><td>${x.phone}</td></tr>`)
            allPersons.innerHTML =
                `<table>
                    <thead><th>Name</th><th>Phone</th></thead>
                    ${newArray.join("")}
                </table>`
        });
}
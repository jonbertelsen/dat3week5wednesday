
//alert('der er hul igennem')

const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let biltabel = document.getElementById("biltabel")

const tabelArray = cars.map(car => `<tr><td>${car.model}</td>
    <td>${car.make}</td>
    <td>${car.price}</td>
    <td>${car.year}</td>
    </tr>`)

console.log(tabelArray)

biltabel.innerHTML = tabelArray.join('');

// List
const listArray = cars.map(car => `<li>${car.model}, ${car.make}, ${car.price}, ${car.year}</li>`)
console.log(listArray)
document.getElementById("list").innerHTML = listArray.join("\n");

const calendar = document.getElementById("calendar")

calendar.addEventListener('click', (event) =>
{
    console.log(event.currentTarget)
    event.target.style.backgroundColor = 'red';
    getJoke(event.currentTarget, event.target);

    //alert('der er hul igennem.' + event.target.getAttribute("id"))
})

function getJoke(currentTarget, target)
{
    fetch('https://api.chucknorris.io/jokes/random')
        .then(function (response)
        {
            return response.json();
        })
        .then(function (data)
        {
            switch (target.getAttribute('class'))
            {
                case 'day': target.lastChild.parentNode.innerHTML = `<p>${data.value}</p>`; break;
                case 'door': target.lastChild.parentNode.innerHTML = `<p>${data.value}</p>`;
                    console.log("target", target.lastChild.parentNode)
                    break;
            }

            let img = document.createElement('img');
            img.src = data.icon_url;
            target.lastChild.appendChild(img);


        });
}


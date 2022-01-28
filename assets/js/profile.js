const user = JSON.parse(localStorage.getItem('user'))

const infoContainer = document.getElementById('profileInfo');
// populates user info
const title = document.getElementById('title');
title.textContent += ` ${user.username}`;

const email = document.getElementById('email');
email.textContent += ` ${user.email}`;

const number = document.getElementById('number');
number.textContent += ` ${user.number}`;

const carForm = document.getElementById('carForm');
const addressForm = document.getElementById('addressForm');
const formTitle = document.getElementById('formTitle');

// populates the list for each car saved by the user
const carsList = document.getElementById('carsList');
user.cars.forEach(function (item, index) {
  const listItem = document.createElement('li');

  const car = document.createElement('p');
  car.appendChild(document.createTextNode(`${item.make} ${item.model}`));
  const miles = document.createElement('p');
  miles.appendChild(document.createTextNode(`Miles: ${item.miles}`));
  const fuel = document.createElement('p');
  fuel.appendChild(document.createTextNode(`Fuel Type: ${item.fuel}`));
  
  // adds a button to remove a car from the list
  const removeBtn = document.createElement('button');
  removeBtn.appendChild(document.createTextNode('Remove'));
  removeBtn.setAttribute('id', 'removeBtn');
  removeBtn.addEventListener('click', async function() {
    user.cars.splice(index, 1);
    const req = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const newUser = await req.json();
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Car was successfully removed')
  });

  listItem.append(
    car, 
    miles, 
    fuel,
    removeBtn,
  );
  carsList.appendChild(listItem);
});

// populates the list for each address saved by the user
const addressList = document.getElementById('addressList');
user.address.forEach(function (item, index) {
  const listItem = document.createElement('li');
  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('id', 'removeBtn');
  removeBtn.appendChild(document.createTextNode('Remove'));
  removeBtn.addEventListener('click', async function() {
    user.address.splice(index, 1);
    const req = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const newUser = await req.json();
    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Address was successfully removed');
  });

  listItem.append(
    document.createTextNode(`${item.address} ${item.city}, ${item.state}`),
    document.createElement('br'),
    removeBtn
  );
  addressList.appendChild(listItem);
});

// switches to car form
const carBtn = document.getElementById('carBtn');
carBtn.addEventListener('click', function () {
  formTitle.textContent = 'Add A Car';

  carForm.style.display = 'block';
  addressForm.style.display = 'none';
});

// switches to address form
const addressBtn = document.getElementById('addressBtn');
addressBtn.addEventListener('click', function () {
  formTitle.textContent = 'Add An Address';

  carForm.style.display = 'none';
  addressForm.style.display = 'block';
});

// submit car form
carForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const body = {
    fuel: ''
  };
  for (let i = 0; i < 3; i++) {
    body[carForm[i].id] = carForm[i].value;
  }
  for (let i = 3; i < 6; i++) {
    if (carForm[i].checked) body.fuel = carForm[i].value;
  }
  console.log(body);
  const valid = checkValues(body, 'car');
  if (!valid) e.stopPropagation();
  else submit(body, 'car');
});

// submit address form
addressForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const body = {};
  for (let i = 0; i < 3; i++) {
    body[addressForm[i].id] = addressForm[i].value;
  }
  console.log(body);
  const valid = checkValues(body, 'address');
  if (!valid) e.stopPropagation();
  else submit(body, 'address');
});

// check values for both forms
function checkValues(body, type) {
  switch (type) {
    case 'car':
      const { make, model, miles, fuel } = body;
      if (make !== "" && model !== "" && miles !== "" && fuel !== "") {
        return true;
      } else return false;
    case 'address':
      const { address, city, state } = body;
      if (address !== "" && city !== "" && state !== "") {
        return true;
      } else return false;
    default:
      return false;
  }
}

// get user ands adds form values to appropriate lists
// and then sends updated impormation to the database
async function submit(body, type, index) {
  switch (type) {
    case 'car':
      user.cars.push(body);
      break;
    case 'address':
      user.address.push(body);
      break;
    default:
      break;
  }

  const req = await fetch(`http://localhost:5000/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const newUser = await req.json();
  localStorage.setItem('user', JSON.stringify(newUser));
  alert(type === 'car' ? 'Your Car was Successfully added to your list' : 'Your address was Successfully added to your list')
}
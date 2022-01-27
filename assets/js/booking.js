// instructions when loading the page
window.addEventListener('load', function () {
  // sets the service field to the stored value if there is one
  const service = this.document.getElementById('service');
  if (this.localStorage.getItem('service')) service.value = this.localStorage.getItem('service');

  // sets the name/email/number fields to 
  // the values stored in the user object
  const user = JSON.parse(this.localStorage.getItem('user'));
  const name = this.document.getElementById('name');
  const email = this.document.getElementById('email');
  const number = this.document.getElementById('number');
  if (user.username) name.value = user.username;
  if (user.email) email.value = user.email;
  if (user.number) number.value = user.number;

  // allows the user to select predefined cars & addresses
  // and fills the appropriate fields with the values
  const selectors = this.document.getElementsByClassName('selectors');
  if (user.cars.length !== 0 || user.address.length !== 0) {
    selectors[0].style.display = 'block';
    selectors[1].style.display = 'block';

    // adds an option to the cars field for each car
    user.cars.forEach(function (item, index) {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(`${item.make}, ${item.model}`));
      option.value = index;
      selectors[0].children[1].appendChild(option);
    });

    // adds an option to the addess field for each address
    user.address.forEach(function (item, index) {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(`${item.address}`));
      option.value = index;
      selectors[1].children[1].appendChild(option)
    });

    // assigns the selected cars values 
    //to the appropriate fields in the form
    selectors[0].children[2].addEventListener('click', function () {
      const car = user.cars[selectors[0].children[1].value];

      const make = document.getElementById('make');
      make.value = car.make;
      const model = document.getElementById('model');
      model.value = car.model;
      const miles = document.getElementById('miles');
      miles.value = car.miles;
      const fuel = document.getElementById(`${car.fuel}`)
      fuel.checked = true;
    });

    // assigns the selected address values 
    //to the appropriate fields in the form
    selectors[1].children[2].addEventListener('click', function () {
      const item = user.address[selectors[1].children[1].value];

      const address = document.getElementById('address');
      address.value = item.address;
      const city = document.getElementById('city');
      city.value = item.city;
      const state = document.getElementById('state');
      state.value = item.state;
    });
  } else {
    const title = this.document.getElementById('title');
    title.style.marginBottom = '20px';
  }
})

const form = document.forms[0];
const fMessage = document.getElementById('message');

form.addEventListener('submit', function handleSubmit(e) {
  e.preventDefault();

  const user = {
    [form[0].id]: form[0].value,
    [form[1].id]: form[1].value,
    [form[2].id]: form[2].value,
    address: {
      [form[3].id]: form[3].value,
      [form[4].id]: form[4].value,
      [form[5].id]: form[5].value,
    }
  }

  const car = {
    [form[7].id]: form[7].value,
    [form[8].id]: form[8].value,
    [form[13].id]: form[13].value,
    fuel: ""
  }

  for (let i = 9; i < 13; i++) {
    if (form[i].checked) car.fuel = form[i].value;
  }

  const body = {
    user,
    car,
    [form[6].id]: form[6].value,
    [form[14].id]: form[14].value,
  };

  const valid = checkValues(body);
  if (!valid) e.stopPropagation();
  else book(body);
})

// checks to assure all fields are filled 
// and have the appropriate values
function checkValues(body) {
  const {
    user: { name, email, number, address: { city, state, address } },
    car: { make, model, fuel, miles },
    service, date
  } = body
  if (
    name !== '' && email !== '' && number !== ''
    && service !== '' && make !== '' && model !== ''
    && fuel !== '' && miles !== '' && city !== ''
    && state !== '' && address !== "" && date !== ''
  ) {
    if (number.toString().length < 10) {
      fMessage.textContent = 'please enter valid phone number with area code';
      return false;
    } else if (new Date(date) < new Date()) {
      fMessage.textContent = 'Please select a day after today';
      return false;
    } else {
      fMessage.textContent = '';
      return true
    }
  } else {
    fMessage.textContent = 'please fill out all feilds before scheduling';
    return false
  }
}

// submits the form to json server
async function book(body) {
  const req = await fetch('http://localhost:5000/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
  const res = await req.json();
  if (res) {
    location.assign('http://127.0.0.1:5500/booking-success.html');
  }
}
window.addEventListener('load', function () {
  const user = JSON.parse(this.localStorage.getItem('user'));
  if (!user.isAdmin) {
    this.location.assign('http://127.0.0.1:5500/vanilla-js/home.html');
    this.alert('you do not have access to this page');
  } else {
    populateBookingTabel();
    populateReviewTabel();
  }
});

const bookingTable = document.getElementById('bookingTable');
const reviewTable = document.getElementById('reviewTable');

const bookingBtn = document.getElementById('bookingBtn');
bookingBtn.addEventListener('click', function() {
  bookingTable.style.display = 'table';
  reviewTable.style.display = 'none';
})

const reviewBtn = document.getElementById('reviewBtn');
reviewBtn.addEventListener('click', function() {
  bookingTable.style.display = 'none';
  reviewTable.style.display = 'table';
})

async function populateBookingTabel() {
  const req = await fetch('http://localhost:5000/bookings');
  const data = await req.json();
  console.log(data);

  const body = document.getElementById('bookingBody');

  for (let booking of data) {
    const row = document.createElement('tr');

    let serviceCost;
    switch (booking.service) {
      case 'preventive maintenance':
        serviceCost = '5000';
        break;
      case 'car care':
        serviceCost = '4500';
        break;
      case 'body repair':
        serviceCost = '7000';
        break;
      default:
        serviceCost = '0';
        break;
    }

    const id = document.createElement('td');
    id.appendChild(document.createTextNode(`${booking.id}`));

    const name = document.createElement('td');
    name.appendChild(document.createTextNode(`${booking.user.name}`));

    const service = document.createElement('td');
    service.setAttribute('colSpan', '3')
    service.appendChild(document.createTextNode(`${booking.service}`));

    const date = document.createElement('td');
    date.appendChild(document.createTextNode(`${booking.date}`));

    const cost = document.createElement('td');
    cost.appendChild(document.createTextNode(serviceCost));

    const details = document.createElement('td');
    const detailsBtn = document.createElement('button');
    detailsBtn.appendChild(document.createTextNode('Details'));
    details.appendChild(detailsBtn);

    row.append(id, name, service, date, cost, details);
    body.appendChild(row);
  }
}

async function populateReviewTabel() {
  const req = await fetch('http://localhost:5000/reviews');
  const data = await req.json();
  console.log(data);
  const body = document.getElementById('reviewBody');

  for (let review of data) {
    const row = document.createElement('tr');

    const id = document.createElement('td');
    id.appendChild(document.createTextNode(`${review.id}`));

    const name = document.createElement('td');
    name.appendChild(document.createTextNode(`${review.username}`));

    const email = document.createElement('td');
    email.appendChild(document.createTextNode(`${review.email}`));

    const score = document.createElement('td');
    score.appendChild(document.createTextNode(`${review.score}`));

    row.append(id, name, email, score);
    body.appendChild(row);
  }
}
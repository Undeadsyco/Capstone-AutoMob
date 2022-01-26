const form = document.forms[0];
const fMessage = document.getElementById('message');

console.log(form);

form.addEventListener('submit', function handleSubmit(e) {
  e.preventDefault();
  const bookingName = form[0].value;

  const body = {
    [form[1].id]: form[1].value,
    [form[2].id]: form[2].value,
    [form[3].id]: form[3].value,
    [form[4].id]: form[4].value,
    emailnotification: form[5].checked,
    smsNotification: form[6].checked,
  };

  const valid = checkValues(body);
  if (!valid) e.stopPropagation();
  else fetch('http://localhost:5000/appointments?name=' + bookingName).then(function (res) {
    return res.json()
  }).then(function (data) {
    fetch('http://localhost:5000/appointments/' + data[0].id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data[0], ...body }),
    }).then(function (res) {
      return res.json()
    }).then(function (data) {
      if (data) location.assign('http://127.0.0.1:5500/booking-success.html')
    })
  })
});

function checkValues(body) {
  const { date, address, city, state } = body;
  if (address !== "", city !== "", state !== "") {
    if (new Date(date) < new Date()) {
      return false
    }
    return true
  } else {
    return false
  }
}
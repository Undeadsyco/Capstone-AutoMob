const form = document.forms[0];
const fMessage = document.getElementById('message');
fMessage.style.color = 'red';

console.log(form)

form.addEventListener('submit', function handleSubmit(e) {
  e.preventDefault();

  const body = {
    [form[0].id]: form[0].value,
    [form[1].id]: form[1].value,
    [form[2].id]: form[2].value,
    [form[3].id]: form[3].value,
    [form[4].id]: form[4].value,
    [form[5].id]: form[5].value,
    [form[10].id]: form[10].value,
  };

  if (form[6].checked) body.fuel = form[6].value; 
  if (form[7].checked) body.fuel = form[7].value; 
  if (form[8].checked) body.fuel = form[8].value; 
  if (form[9].checked) body.fuel = form[9].value;

  const valid = checkValues(body);
  if (!valid) e.stopPropagation();
  else fetch('http://localhost:5000/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }).then(function(res) {
    return res.status === 201 ? res.json() : null;
  }).then(function(data) {
    location.assign('http://127.0.0.1:5500/appointment.html')
  })
})

function checkValues(body) {
  const { name, email, number, service, make, model, fuel, kmRan } = body
  if (name !== '', email !== '', number !== '', service !== '', make !== '', model !== '', fuel !== undefined, kmRan !== '') {
    if(number.toString().length < 10){
      fMessage.textContent = 'please enter valid phone number with area code';
      return false;
    } else return true
  } else {
    fMessage.textContent = 'please fill out all feilds before scheduling';
    return false
  }
}
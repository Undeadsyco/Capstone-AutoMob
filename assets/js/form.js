const form = document.forms[0];
const fMessage = document.getElementById('message');
fMessage.style.color = 'red'
const values = document.getElementsByTagName('label');

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const body = {};

  for (let value of values) {
    body[value.attributes.for.value] = value.children[0].value
  }
  console.log(body)

  checkValues(body);
})

function checkValues(body) {
  const { name, email, number, service, make, model, fuel, kmRan } = body
  if (name !== '', email !== '', number !== '', service !== '', make !== '', model !== '', fuel !== '', kmRan !== '') {
    if(number.toString().length < 10){
      fMessage.textContent = 'please enter valid phone number with area code'
    } else {
      fMessage.textContent = 'please fill out all feilds before scheduling'
    }
  }
}
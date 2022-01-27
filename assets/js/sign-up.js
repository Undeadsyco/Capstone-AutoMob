const form = document.forms[0];

form.addEventListener('submit', function handleSubmit(e) {
  e.preventDefault();

  const valid = checkValues({ [form[0].id]: form[0].value, [form[1].id]: form[1].value });
  if (!valid) e.stopPropagation();
  else signup({ [form[0].id]: form[0].value, [form[1].id]: form[1].value });
})

function checkValues({username, password}) {
  if (username !== "" && password !== "") return true;
  else return false
}

async function signup(body) {
  const req = await fetch('http://localhost:5000/users', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...body, isAdmin: false})
  })
  const res = await req.json()
  if (res) {
    localStorage.setItem('user', JSON.stringify(res));
    location.assign('http://127.0.0.1:5500/home.html')
  }
}
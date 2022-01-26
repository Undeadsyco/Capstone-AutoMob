const form = document.forms[0];

form.addEventListener('submit', function handleSubmit(e) {
  e.preventDefault();

  const body = {}
  for (let input of form) {
    if (input.id) {
      body[input.id] = input.value;
    }
  }

  const valid = checkValue(body);
  if (!valid) e.stopPropagation();
  else login(body);
})

function checkValue(body) {
  const {username, password} = body;
  if (username !== "" && password !== "") return true;
  else return false;
}

async function login(body) {
  const {username, password} = body;
  const req = await fetch(`http://localhost:5000/users?username=${username}`);
  const res = await req.json();
  const user = res[0];

  if (!user) alert('User npt found! Please check username and try again!');
  if (user.password === password) {
    localStorage.setItem('user', JSON.stringify(user));
    alert('Login was successful!');
    location.assign('http://127.0.0.1:5500/home.html')
  }
}
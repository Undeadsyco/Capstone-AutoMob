const { username, email } = JSON.parse(localStorage.getItem('user'));
setTimeout(async function () {
  const score = prompt("On a scale of 1-10, how likely are you to recommend our website to friends and family?");
  if (score) {
    const req = await fetch('http://localhost:5000/vanilla-js/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, score })
    });
    const res = await req.json();
    if (res) {
      alert('Thank you for your feedback');
    }
  }
}, [5000]);
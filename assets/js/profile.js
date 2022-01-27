const user = JSON.parse(localStorage.getItem('user'))
const title = document.getElementById('title');
title.textContent = `${title.textContent} ${user.username}`
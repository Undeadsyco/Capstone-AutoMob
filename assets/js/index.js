const isLoggedIn = JSON.parse(localStorage.getItem('user'));
const header = document.getElementById('header');
const footer = document.getElementById('footer');

window.addEventListener('load', function () {
  createHeader();
  createFooter();
})

function createHeader() {
  createTitle();
  createNav();
}

function createFooter() {
  const p = document.createElement('p');
  p.appendChild(document.createTextNode('Copyright &copy; 2020 AutoMob Mechanic. All Rights Reserved'));
  footer.appendChild(p);
}

function createTitle() {
  const title = document.createElement('h1');
  const titleLink = document.createElement('a');

  titleLink.href = 'http://127.0.0.1:5500/home.html';
  titleLink.appendChild(document.createTextNode('AutoMob Mechanic'));
  // titleLink.style.color = 'black';
  // titleLink.style.textDecoration = 'none';
  title.appendChild(titleLink);

  header.appendChild(title);
}

function createNav() {
  const nav = document.createElement('nav');

  const linkList = [];

  linkList[0] = document.createElement('a');
  linkList[0].href = 'http://127.0.0.1:5500/home.html';
  linkList[0].appendChild(document.createTextNode('Home'));

  if (isLoggedIn && isLoggedIn.isAdmin) {
    linkList[1] = document.createElement('a');
    linkList[1].href = 'http://127.0.0.1:5500/reports.html';
    linkList[1].appendChild(document.createTextNode('Reports'));
    
    linkList[2] = document.createElement('button');
    linkList[2].addEventListener('click', function(){
      localStorage.clear();
      location.assign('http://127.0.0.1:5500/home.html')
    })
    linkList[2].appendChild(document.createTextNode('Logout'));
  } else if(isLoggedIn) {
    linkList[1] = document.createElement('a');
    linkList[1].href = 'http://127.0.0.1:5500/services.html';
    linkList[1].appendChild(document.createTextNode('service'));

    linkList[2] = document.createElement('a');
    linkList[2].href = 'http://127.0.0.1:5500/booking.html';
    linkList[2].appendChild(document.createTextNode('Booking'));
    
    linkList[3] = document.createElement('button');
    linkList[3].addEventListener('click', function(){
      localStorage.clear();
      location.assign('http://127.0.0.1:5500/home.html')
    })
    linkList[3].appendChild(document.createTextNode('Logout'));

    linkList[4] = document.createElement('a');
    linkList[4].href = 'http://127.0.0.1:5500/profile.html';
    linkList[4].appendChild(document.createTextNode('Profile'));
  } else {
    linkList[1] = document.createElement('a');
    linkList[1].href = 'http://127.0.0.1:5500/login.html';
    linkList[1].appendChild(document.createTextNode('Login'));
  }


  const contact = document.createElement('a');
  contact.appendChild(document.createTextNode('contact us at: contact@automob.com'));

  const number = document.createElement('span');
  number.appendChild(document.createTextNode('999 999 9999'))
  number.style.padding = '0 10px'

  nav.append(...linkList, contact, number);
  header.appendChild(nav);
}
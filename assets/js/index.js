const header = document.getElementById('header');
const footer = document.getElementById('footer');
// header.style.display = 'flex';
// header.style.justifyContent = 'space-between';
// header.style.alignItems = 'center';

window.addEventListener('load', function() {
  createHeader();
  createFooter();
})

function createHeader() {
  createTitle();
  createNav();
  header.appendChild(document.createElement('hr'));
}

function createFooter() {
  const p = document.createElement('p');
  p.appendChild(document.createTextNode('Copyright &copy; 2020 AutoMob Mechanic. All Rights Reserved'));
  footer.appendChild(document.createElement('hr'));
  footer.appendChild(p);
}

function createTitle() {
  const title = document.createElement('h1');
  const titleLink = document.createElement('a');

  titleLink.href = 'http://127.0.0.1:5500/home.html';
  titleLink.appendChild(document.createTextNode('AutoMob Mechanic'));
  titleLink.style.color = 'black';
  titleLink.style.textDecoration = 'none';
  title.appendChild(titleLink);

  header.appendChild(title);
}

function createNav() {
  const nav = document.createElement('nav');

  const linkList = []
  
  linkList[0] = document.createElement('a');
  linkList[0].href = 'http://127.0.0.1:5500/home.html';
  linkList[0].appendChild(document.createTextNode('Home'));

  linkList[1] = document.createElement('a');
  linkList[1].href = 'http://127.0.0.1:5500/services.html';
  linkList[1].appendChild(document.createTextNode('Services'));

  linkList[2] = document.createElement('a');
  linkList[2].href = 'http://127.0.0.1:5500/bookings.html';
  linkList[2].appendChild(document.createTextNode('Bookings'));

  linkList[3] = document.createElement('a');
  linkList[3].appendChild(document.createTextNode('contact us at: contact@automob.com'));

  for(let link of linkList) {
    link.style.padding = '0 10px';
    link.style.borderRight = '1px solid black'

    link.style.color = 'black';
    link.style.textDecoration = 'none';
  }

  const number = document.createElement('span');
  number.appendChild(document.createTextNode('999 999 9999'))
  number.style.padding = '0 10px'

  nav.append(...linkList, number);
  header.appendChild(nav);
}
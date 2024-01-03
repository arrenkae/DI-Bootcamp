const urlParams = new URLSearchParams(window.location.search);

const info = document.getElementById('info');

const fname = document.createElement('p');
fname.innerText = (`First name: ${urlParams.get('fname')}`)
const lname = document.createElement('p');
lname.innerText = (`Last name: ${urlParams.get('lname')}`)

info.append(fname, lname);
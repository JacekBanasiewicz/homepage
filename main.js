console.log('siema');

const name = 'Jacek Banasiewicz';
const age = 20;

console.log(name);
console.log(age);

console.log(`Siema mam
na imię ${name}
i mam ${age} lat`);

console.log('Jacek Banasiewicz mówi HEJ!😋');


const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = `<strong>Siema</strong> mam na imię ${name} i mam ${age} lat`;

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs[3]);



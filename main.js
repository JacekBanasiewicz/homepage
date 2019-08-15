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


// Homework week IV
const example = document.querySelector('.section__js--example');
example.innerHTML = `<p>Fiat Punto – samochód osobowy klasy aut miejskich produkowany przez włoski koncern FIAT w latach 1993–2018. Ostatnim modelem była trzecia generacja, wytwarzana kolejno jako Grande Punto, Punto Evo i Punto 2012 w latach 2005–2018.</p>`;
const example_two = document.querySelector('.section__js--example--two');
example_two.innerHTML = `<p>Pojazd został opracowany zgodnie z ówczesną filozofią marki zwaną 6x2 oznaczającą, że pojazd skonstruowany ma być tak aby jedna płyta podłogowa i struktura nadwozia służyła dwóm modelem z rzędu, produkowanym przez 6 lat każdy. Dlatego zmiany ograniczone zostały do elementów stylizacji pojazdu zewnętrznych oraz wewnętrznych.</p>`;









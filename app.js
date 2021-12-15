// import functions and grab DOM elements
import { getCars, getPeople, getCountries, getDogs } from './fetch-utils.js';
import { renderCar, renderPerson, renderCountry, renderDog } from './render-utils.js';

const main = document.querySelector('main');

// let state

window.addEventListener('load', async() => {
    const cars = await getCars();
    const carsContainer = document.createElement('div');
    carsContainer.classList.add('container');
    for (let car of cars) {
        let carContainer = renderCar(car);
        carsContainer.append(carContainer);
    }
    main.append(carsContainer);
});

window.addEventListener('load', async() => {
    const people = await getPeople();
    const peopleContainer = document.createElement('div');
    peopleContainer.classList.add('container');
    for (let person of people) {
        let personContainer = renderPerson(person);
        peopleContainer.append(personContainer);
    }
    main.append(peopleContainer);
});

window.addEventListener('load', async() => {
    const countries = await getCountries();
    const countriesContainer = document.createElement('div');
    countriesContainer.classList.add('container');
    for (let country of countries) {
        let countryContainer = renderCountry(country);
        countriesContainer.append(countryContainer);
    }
    main.append(countriesContainer);
});

window.addEventListener('load', async() => {
    const dogs = await getDogs();
    const dogsContainer = document.createElement('div');
    dogsContainer.classList.add('container');
    for (let dog of dogs) {
        let dogContainer = renderDog(dog);
        dogsContainer.append(dogContainer);
    }
    main.append(dogsContainer);
});
// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state

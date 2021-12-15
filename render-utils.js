export function renderCar(car) {
    const carContainer = document.createElement('div');
    carContainer.classList.add('car');

    const year = document.createElement('p');
    const make = document.createElement('p');
    const model = document.createElement('p');

    year.textContent = car.year;
    make.textContent = car.make;
    model.textContent = car.model;

    carContainer.append(year, make, model);

    return carContainer;

}

export function renderPerson(person) {
    const personContainer = document.createElement('div');
    personContainer.classList.add('person');

    const first = document.createElement('p');
    const last = document.createElement('p');
    const age = document.createElement('p');

    first.textContent = person.first;
    last.textContent = person.last;
    age.textContent = person.age;

    personContainer.append(first, last, age);

    return personContainer;

}

export function renderCountry(location) {
    const countryContainer = document.createElement('div');
    countryContainer.classList.add('country');

    const country = document.createElement('p');
    const capital = document.createElement('p');
    const population = document.createElement('p');

    country.textContent = location.country;
    capital.textContent = location.capital;
    population.textContent = `${location.population} ${location.unit}`;

    countryContainer.append(country, capital, population);

    return countryContainer;

}

export function renderDog(dog) {
    const dogContainer = document.createElement('div');
    dogContainer.classList.add('dog');

    const breed = document.createElement('p');
    const size = document.createElement('p');
    const origin = document.createElement('p');

    breed.textContent = dog.breed;
    size.textContent = dog.size;
    origin.textContent = dog.origin;

    dogContainer.append(breed, size, origin);

    return dogContainer;

}
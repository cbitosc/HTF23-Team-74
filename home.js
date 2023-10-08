// script.js
// Sample data, replace it with your actual data
const petData = [
    { name: 'Buddy', type: 'DOG', age: 2, breed: 'Golden Retriever', gender: 'Male', images: ['dog1_1.jpg', 'dog1_2.jpeg'] },
    { name: 'Whiskers', type: 'CAT', age: 1, breed: 'Siamese', gender: 'Female', images: ['image3.jpg', 'image4.jpg'] },
    { name: 'Buddy2', type: 'DOG', age: 5, breed: 'Pomerian', gender: 'Female', images: ['image1.jpg', 'image2.jpg'] },
    // Add more data as needed
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    populateDropdown('typeFilter', 'type');
    populateDropdown('breedFilter', 'breed');
    populateDropdown('genderFilter', 'gender');
    populateDropdown('ageFilter', 'age');
  
    // Your login logic here
    showPage('loginPage');
  });
  
  function populateDropdown(selectId, property) {
    const uniqueValues = [...new Set(petData.map(pet => pet[property]))];
    const dropdown = document.getElementById(selectId);
  
    uniqueValues.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        dropdown.appendChild(option);
    });
  }
  
  function navigateToHome() {
    showPage('homePage');
    filterPets();
  }
  
  function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
  
    const currentPage = document.getElementById(pageId);
    currentPage.classList.remove('hidden');
  }
  
  function filterPets() {
    const typeFilter = document.getElementById('typeFilter').value;
    const breedFilter = document.getElementById('breedFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;
    const ageFilter = document.getElementById('ageFilter').value;
  
    let filteredPets = petData;
  
    if (typeFilter !== 'ALL') {
        filteredPets = filteredPets.filter(pet => pet.type === typeFilter);
    }
  
    if (breedFilter !== 'ALL') {
        filteredPets = filteredPets.filter(pet => pet.breed === breedFilter);
    }
  
    if (genderFilter !== 'ALL') {
        filteredPets = filteredPets.filter(pet => pet.gender === genderFilter);
    }
  
    if (ageFilter !== 'ALL') {
        filteredPets = filteredPets.filter(pet => pet.age === parseInt(ageFilter));
    }
  
    const petsList = document.getElementById('pets');
    petsList.innerHTML = '';
  
    filteredPets.forEach(pet => {
        const listItem = document.createElement('li');
        let displayText = ${pet.name} - Type: ${pet.type}, Breed: ${pet.breed}, Gender: ${pet.gender}, Age: ${pet.age};
        listItem.innerHTML = ${displayText} <button onclick="viewImages('${pet.name}')">View Images</button>;
        petsList.appendChild(listItem);
    });
  }
  
  function viewImages(petName) {
    const pet = petData.find(pet => pet.name === petName);
  
    if (pet) {
      const imagesContainer = document.getElementById('imagesContainer');
      imagesContainer.innerHTML = ''; // Clear previous images
  
      pet.images.forEach(imagePath => {
        const imageElement = document.createElement('img');
        imageElement.src = imagePath;
        imagesContainer.appendChild(imageElement);
      });
  
      showPage('imagesPage');
    } else {
      alert('Pet not found.');
    }
  }
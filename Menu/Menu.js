/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuButton = document.querySelector(".menu-button");

const createMenu = (arrayMenuItems) => {
  const menu = document.createElement('div');
  const unList = document.createElement('ul');
  // const students = document.createElement('li');
  // const faculty = document.createElement('li');
  // const whatsNew = document.createElement('li');
  // const techTrends = document.createElement('li');
  // const music = document.createElement('li');
  // const logOut = document.createElement('li');

  menu.appendChild(unList);
  // unList.appendChild(students);
  // unList.appendChild(faculty);
  // unList.appendChild(whatsNew);
  // unList.appendChild(techTrends);
  // unList.appendChild(music);
  // unList.appendChild(logOut);

  menu.classList.add('menu');

  arrayMenuItems.forEach((item) => {
    const listItem = document.createElement('li');
    unList.appendChild(listItem);
    listItem.textContent = item;
  });

  // const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });


  return menu
};

const headerElement = document.querySelector(".header");

headerElement.appendChild(createMenu(menuItems));
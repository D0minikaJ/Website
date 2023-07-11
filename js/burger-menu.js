function burgerMenu() {
  var menu = document.getElementById('burgerMenu');
  var open = document.getElementById('openMenu');
  var close = document.getElementById('closeMenu');
  var logo = document.getElementById('logo');
  var background = document.getElementById('background');

  menuStyleDisplay = window.getComputedStyle(menu).getPropertyValue('display');

  if (menuStyleDisplay === 'none') {
    menu.style.display = 'block';
    open.style.display = 'none';
    close.style.display = 'block';
    logo.style.display = 'none';
    background.style.display = 'block';
  } else {
    menu.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
    logo.style.display = 'block';
    background.style.display = 'none';
  }
}

function dropdownMenu1() {
  var drop1 = document.getElementById('dropdownFirst');
  dropStyleDisplay1 = window
    .getComputedStyle(drop1)
    .getPropertyValue('display');

  if (dropStyleDisplay1 === 'none') {
    drop1.style.display = 'block';
  } else {
    drop1.style.display = 'none';
  }
}

function dropdownMenu2() {
  var drop2 = document.getElementById('dropdownSecond');
  dropStyleDisplay2 = window
    .getComputedStyle(drop2)
    .getPropertyValue('display');
  if (dropStyleDisplay2 === 'none') {
    drop2.style.display = 'block';
  } else {
    drop2.style.display = 'none';
  }
}

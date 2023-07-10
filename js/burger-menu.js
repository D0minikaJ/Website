function burgerMenu() {
  var menu = document.getElementById('burgerMenu');
  var open = document.getElementById('openMenu');
  var close = document.getElementById('closeMenu');
  var logo = document.getElementById('logo');
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    open.style.display = 'none';
    close.style.display = 'block';
    logo.style.display = 'none';
  } else {
    menu.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
    logo.style.display = 'block';
  }
}

const menuItems = document.querySelectorAll('ul li a');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdClicked)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdClicked(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 120;

  ScrollToHere(to);
}

function ScrollToHere(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
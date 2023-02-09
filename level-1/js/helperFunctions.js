export function getElement(element) {
  return document.querySelector(element);
}

export function newElement(element) {
  return document.createElement(element);
}

export function addClass(element, className) {
  return element.classList.add(className);
}

export function removeClass(element, className) {
  return element.classList.remove(className);
}

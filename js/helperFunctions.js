export function getElement(element) {
  return document.querySelector(element);
}

export function newElement(element) {
  return document.createElement(element);
}

// With the rest parameter, the function accepts multiple arguments for the class names as an array
export function addClass(element, ...classNames) {
  for (const className of classNames) {
    element.classList.add(className);
  }
}

export function removeClass(element, ...classNames) {
  for (const className of classNames) {
    element.classList.remove(className);
  }
}

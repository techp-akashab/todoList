function CreateElement(tag, attributes = {}, children = []) {
  let element = document.createElement(tag);
  for (let [a, b] of Object.entries(attributes)) {
    element.setAttribute(a, b);
  }
  children.forEach((child) => {
    if (typeof child === "string") {
      element.textContent = child;
    } else {
      element.append(child);
    }
  });
  return element;
}
export default CreateElement;

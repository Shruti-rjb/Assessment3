// Write a JavaScript program that creates HTML elements around the
// words/string and adds class to element
// Note:
// ○ First parameter should contain the element name.
// ○ Second parameter should contain class names.
// ○ Third parameter should contain the actual string.
// Eg: createHtml(“span”,”text-primary” “Hello World”)
// Expected Output:
// <span class=”text-primary”>Hello World</span>


var span = document.createElement("span");
span.classList.add("text-primary");
span.innerText="Hello World";
console.log(span);
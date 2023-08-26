// The element that will trigger the function that will be executed
const element = document.getElementById("btn");

// The actual executed event (listener)
element.addEventListener("click", search);

// The function that will be executed (handler)
function search() {
  document.getElementById("try").innerHTML = "I'm searching HTML!";
  //   console.log("I'm searching console!");
}

// EventTarget.addEventListener();
// EventTarget.removeEventListener();
// EventTarget.dispatchEvent();

// element.addEventListener();

// element.addEventListener("click", () => {
//     document.getElementById("demo").innerHTML = "I'm searching HTML!";
//     console.log("I'm searching console!");
// });

// inline CSS
// document.body.style.display();

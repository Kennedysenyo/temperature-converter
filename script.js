/* A function that takes celsius value as argument and returns a fahrenheit value*/
const convertCelsiusToFahrenheit = (celsius) => {
  return ((9 / 5) * celsius + 32).toFixed(2);
};

/* A function that takes fahrenheit value as argumentand returns a celsius value */
const convertFahrenheitToCelsuis = (fahrenheit) => {
  return ((5 / 9) * (fahrenheit - 32)).toFixed(2);
};

const form = document.getElementById("temp-converter-frm");
const convertButton = document.querySelector(".convert-btn");
const result = document.querySelector(".result");

convertButton.addEventListener("click", () => {
  const formData = new FormData(form);
  const userInput = Number(formData.get("input"));
  const converTo = formData.get("convert-to");

  if (!userInput) {
    result.style.color = "red";
    result.value = "Please enter a number to convert !";
    return;
  }
  if (!converTo) {
    result.style.color = "red";
    result.value = "Select unit to convert to";
    return;
  }

  result.style.color = "inherit";
  if (converTo === "fahrenheit") {
    result.value = `${userInput} ℃ is ${convertCelsiusToFahrenheit(
      userInput
    )} °F`;
  }
  if (converTo === "celsius") {
    result.value = `${userInput} °F is ${convertFahrenheitToCelsuis(
      userInput
    )} ℃`;
  }
});

const btnCalculateAge = document.getElementById("btnCalculateAge");
const chooseBirthdayInput = document.getElementById("birthday");
const resultEl = document.getElementById("result")

function calculateAge() {
  const birthdayValue = chooseBirthdayInput.value;
  console.log("btn clicked");
  console.log(birthdayValue);
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age>1 ? "years":"year"} old`
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month == 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--
  }
  return age;
}

btnCalculateAge.addEventListener("click", calculateAge);

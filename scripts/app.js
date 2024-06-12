console.log()

const studentName = "Aleena_Anna_Mathew";
console.log(studentName);
const studentNumber = 1157056;
console.log(studentNumber);

const number = 1157056;
const result = 'Aleena-{1157056}';
console.log(result);


const headerContent = document.querySelector("h1");
headerContent.innerHTML = '$(studentName)-$(studentNumber)';


headerContent.classList.add("h1");
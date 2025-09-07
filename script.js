const button = document.getElementById("submit");

button.addEventListener("click", () => {

  const nameVar = document.getElementById("name").value;
  const mailVar = document.getElementById("email").value;
  const msgVar = document.getElementById("nachricht").value;

  console.log("Name: " + nameVar);
  console.log("E-Mail: " + mailVar);
  console.log("Message: " + msgVar);

  alert("Konnte nicht gesendet werden!");
})
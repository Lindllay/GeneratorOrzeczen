const submitBtn = document.getElementById("submit");
const checkboxDiv = document.getElementById("checkbox__div");
const decisionList = document.getElementById("decision__list");
const expirationDateLabel = document.getElementById("expirationDate");
const releaseDateLabel = document.getElementById("releaseDate");
const actualDate = new Date();

releaseDateLabel.valueAsDate = actualDate;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Zapisuję do zmiennych wartości wprowadzone w pola
  const statementLabelValue39k =
    document.getElementById("statementLabel39k").value;
  const statementLabelValue82u1p1 = document.getElementById(
    "statementLabel82u1p1"
  ).value;
  const statementLabelValue82u1p2 = document.getElementById(
    "statementLabel82u1p2"
  ).value;
  const statementLabelValue82u1p6 = document.getElementById(
    "statementLabel82u1p6"
  ).value;

  //   const expirationDateLabelValue = document.getElementById("expirationDate").value;

  const genderValue = document.getElementById("gender").value;
  const nameLabelValue = document.getElementById("name").value;
  const peselLabelValue = document.getElementById("pesel").value;
  const addressLabelValue = document.getElementById("address").value;
  const expirationDateLabel = document.getElementById("expirationDate");
  const releaseDateLabelValue = document.getElementById("releaseDate").value;
  const decisionListValue = document.getElementById("decision__list").value;
  const checkbox39kValue = document.getElementById("39k").checked;
  const checkbox82u1p1Value = document.getElementById("82u1p1").checked;
  const checkbox82u1p1AmateurValue =
    document.getElementById("82u1p1Amateur").checked;
  const checkbox82u1p1ProfessionalValue =
    document.getElementById("82u1p1Professional").checked;
  const checkbox82u1p2Value = document.getElementById("82u1p2").checked;
  const checkbox82u1p2AmateurValue =
    document.getElementById("82u1p2Amateur").checked;
  const checkbox82u1p2ProfessionalValue =
    document.getElementById("82u1p2Professional").checked;
  const checkbox82u1p6Value = document.getElementById("82u1p6").checked;
  const checkbox82u1p6katAValue = document.getElementById("82u1p6katA").checked;
  const checkbox82u1p6katBValue = document.getElementById("82u1p6katB").checked;
  const checkbox82u1p6katCDValue =
    document.getElementById("82u1p6katCD").checked;

  // Ustawia aktualną datę wydania i 5 lat do przodu na datę ważności
  // expirationDateLabelValue.valueAsDate = new Date(1808604000000); // Do poprawy

  // Przekazuję wartości do localStorage

  localStorage.setItem("gender", genderValue);
  localStorage.setItem("name", nameLabelValue);
  localStorage.setItem("pesel", peselLabelValue);
  localStorage.setItem("address", addressLabelValue);
  localStorage.setItem("releaseDate", releaseDateLabelValue);
  localStorage.setItem("expirationDate", expirationDateLabel.value);
  localStorage.setItem("decision", decisionListValue);
  localStorage.setItem("39k", checkbox39kValue);
  localStorage.setItem("82u1p1", checkbox82u1p1Value);
  localStorage.setItem("82u1p1Amat", checkbox82u1p1AmateurValue);
  localStorage.setItem("82u1p1Prof", checkbox82u1p1ProfessionalValue);
  localStorage.setItem("82u1p2", checkbox82u1p2Value);
  localStorage.setItem("82u1p2Amat", checkbox82u1p2AmateurValue);
  localStorage.setItem("82u1p2Prof", checkbox82u1p2ProfessionalValue);
  localStorage.setItem("82u1p6", checkbox82u1p6Value);
  localStorage.setItem("82p1p6katA", checkbox82u1p6katAValue);
  localStorage.setItem("82p1p6katB", checkbox82u1p6katBValue);
  localStorage.setItem("82p1p6katCD", checkbox82u1p6katCDValue);
  localStorage.setItem("statementNumber39k", statementLabelValue39k);
  localStorage.setItem("statementNumber82u1p1", statementLabelValue82u1p1);
  localStorage.setItem("statementNumber82u1p2", statementLabelValue82u1p2);
  localStorage.setItem("statementNumber82u1p6", statementLabelValue82u1p6);

  //   console.log(localStorage.getItem("decision"));

  window.open("index.html");
});
// show statement number Label on checkbox activate

// Dom traversing
checkboxDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("showStLbl")) {
    [...e.target.parentElement.children].forEach(function (el) {
      if (el.classList.contains("swap")) {
        el.classList.toggle("hidden");
      }
    });
  }
});

// Dom traversing
checkboxDiv.addEventListener("click", function (e) {
  //   console.log(e.target);
  if (e.target.closest(".options")) {
    const optionsDiv = e.target.parentElement.lastElementChild;
    optionsDiv.classList.toggle("hidden");
  }
});

// Disable expiration day, when contraindications. Set date on current Date = 5 years, when switched to no contraindications

decisionList.addEventListener("change", function () {
  if (
    decisionList.value === "contraindications" ||
    decisionList.value === "blank"
  ) {
    expirationDate.setAttribute("disabled", "disabled");
    expirationDate.value = "";
  } else {
    expirationDate.removeAttribute("disabled");
    releaseDateLabel.valueAsDate = actualDate;
    expirationDateLabel.valueAsDate = new Date(
      actualDate.getTime() + 157784760000
    );
  }
});

// decisionList.addEventListener("change", function () {
//   if (expirationDate.toggleAttribute("disabled")) {
//     expirationDate.value = "";
//   } else {
//     releaseDateLabel.valueAsDate = actualDate;
//     expirationDateLabel.valueAsDate = new Date(
//       actualDate.getTime() + 157784760000
//     );
//   }

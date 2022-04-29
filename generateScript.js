///////// Generating and inserting statement on the page
const body = document.querySelector("body");
const boolean39k = localStorage.getItem("39k");
const boolean82u1p1 = localStorage.getItem("82u1p1");
const boolean82u1p2 = localStorage.getItem("82u1p2");
const boolean82u1p6 = localStorage.getItem("82u1p6");
const statementsArray = [];
let statementsNumber = 0;
const statement82p1 = `<section class="page">
<div class="heading">
  <p>.................................................</p>
  <p class="small-font">(określenie pracowni psychologicznej)</p>
</div>
<div>
  <p class="title big-font">
    ORZECZENIE PSYCHOLOGICZNE NR
    <span class="decisionNumber giga-font" id="decisionNumber82u1p1"></span>
  </p>
</div>
<div class="contents big-font">
  <p>
    W wyniku badania psychologicznego przeprowadzonego na podstawie art.
    82 ust. 1 pkt 1 lit. a/<span class="cross"> lit. b/ lit. c/ pkt 2/ pkt 3/ pkt 4 lit. a/
    lit. b/ lit. c/ pkt 5</span>**) ustawy z dnia 5 stycznia 2011 r. o
    kierujących pojazdami (Dz. U. z 2014 r. poz. 600) <br /><br />u
    <span id="male">Pana</span>/<span id="female">Pani</span>**)
    <span id="imieNazwisko" class="giga-font imieNazwisko"></span>
  </p>
  <br />
  <p>
    nr PESEL, a w przypadku osoby, której nie nadano nr PESEL – nazwa i
    numer dokumentu stwierdzającego <br />tożsamość
    <span id="pesel" class="giga-font pesel"></span>
  </p>

  <p>
    zamieszkałego(-ej)&nbsp;<span
      id="address"
      class="giga-font address"
    ></span>
  </p>
</div>
<div class="decision big-font" id="decision">
  <p>
    stwierdzam <span id="noContraindications">brak</span>/<span
      id="contraindications" 
      >istnienie</span
    >**) przeciwwskazań psychologicznych do kierowania:
  </p>
  <br />
  <p>
    1)&nbsp; pojazdem w zakresie prawa jazdy kategorii:<br />
    <span class="space"
      >a) [<span id="82p1abX">&nbsp;&nbsp;&nbsp;</span>] <span id="82p1KategorieAB" class="cross">AM, A1, A2, A, B1, B, B+E, T,</span></span
    ><br />
    <span class="space"
      >b) [<span id="82p1cdX">&nbsp;&nbsp;&nbsp;</span>] <span id="82p1KategorieCD" class="cross">C1, C1+E, C, C+E, D1, D1+E, D, D+E;</span></span
    >
  </p>
  <br />
  <p>2)&nbsp; [&nbsp;&nbsp;]<span class="cross" id="tramwaj"> tramwajem</span>**).</p>
</div>
<div class="term--div">
  <br />
  <p class="big-font">
    Termin ważności orzeczenia psychologicznego***)
    <span class="term" id="expirationDate"></span>
  </p>
</div>
<div class="informations--div">
  <div class="low-line-height">
    <p id="releaseDate" class="term"></p>
    <p class="small-font">(data wystawienia)</p>
  </div>
  <div class="low-line-height">
    <p>...................................................</p>
    <p class="small-font">
      (informacje o uprawnionym psychologu oraz jego
      podpis****<sup>)</sup>)
    </p>
  </div>
</div>
<div class="instruction medium-font">
  <p><b>POUCZENIE:</b></p>
  <p>
    1. &nbsp;Osoba badana lub podmiot kierujący na badanie psychologiczne,
    którzy nie zgadzają się z treścią orzeczenia psychologicznego, mogą –
    w terminie 14 dni od dnia otrzymania orzeczenia psychologicznego – za
    pośrednictwem uprawnionego psychologa, który je wydał, wystąpić z
    wnioskiem o przeprowadzenie ponownego badania psychologicznego do
    wojewódzkiego ośrodka medycyny pracy, właściwego ze względu na miejsce
    zamieszkania osoby badanej.**)
  </p>
  <p class="light-break">
    2. &nbsp;Orzeczenie psychologiczne wydane po przeprowadzeniu ponownego
    badania psychologicznego jest ostateczne.**)
  </p>
</div>
<div class="explanations small-font">
  <p>Objaśnienia:</p>
  <p>
    *)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Należy podać następujące dane:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– nazwa i adres pracowni
    psychologicznej,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do rejestru
    przedsiębiorców prowadzących pracownię psychologiczną, o którym mowa w
    art. 83 ust. 1 pkt 1 ustawy z dnia 5 stycznia 2011 r.
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o kierujących
    pojazdami, albo do ewidencji jednostek, o której mowa w art. 86 ust. 4
    tej ustawy, oraz oznaczenie podmiotu prowadzącego odpowiednio rejestr
    albo<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ewidencję,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer identyfikacji
    podatkowej (NIP) przedsiębiorcy – jeżeli taki posiada.<br />
    **)&nbsp;&nbsp;&nbsp; Niepotrzebne skreślić.<br />
    ***)&nbsp; Orzeczenie jest wydane na okres, o którym mowa w art. 13
    ust. 1 pkt 2 oraz art. 16 ust. 3 ustawy z dnia 5 stycznia 2011 r. o
    kierujących pojazdami.<br />
    ****) Należy podać:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – imię i nazwisko
    uprawnionego psychologa,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do
    ewidencji uprawnionych psychologów oraz oznaczenie podmiotu
    prowadzącego ewidencję.
  </p>
</div>
</section>`;
const statement82p2 = `<section class="page">
<div class="heading">
  <p>.................................................</p>
  <p class="small-font">(określenie pracowni psychologicznej)</p>
</div>
<div>
  <p class="title big-font">
    ORZECZENIE PSYCHOLOGICZNE NR
    <span class="decisionNumber giga-font" id="decisionNumber82u1p2"></span>
  </p>
</div>
<div class="contents big-font">
  <p>
    W wyniku badania psychologicznego przeprowadzonego na podstawie art.
    82 ust. 1 <span class="cross">pkt 1 lit. a/ lit. b/ lit. c/</span> pkt 2/ <span class="cross">pkt 3/ pkt 4 lit. a/
    lit. b/ lit. c/ pkt 5</span>**) ustawy z dnia 5 stycznia 2011 r. o
    kierujących pojazdami (Dz. U. z 2014 r. poz. 600) <br /><br />u
    <span id="male">Pana</span>/<span id="female">Pani</span>**)
    <span id="imieNazwisko" class="giga-font imieNazwisko"></span>
  </p>
  <br />
  <p>
    nr PESEL, a w przypadku osoby, której nie nadano nr PESEL – nazwa i
    numer dokumentu stwierdzającego <br />tożsamość
    <span id="pesel" class="giga-font pesel"></span>
  </p>

  <p>
    zamieszkałego(-ej)&nbsp;<span
      id="address"
      class="giga-font address"
    ></span>
  </p>
</div>
<div class="decision big-font" id="decision">
  <p>
    stwierdzam <span id="noContraindications">brak</span>/<span
      id="contraindications" 
      >istnienie</span
    >**) przeciwwskazań psychologicznych do kierowania:
  </p>
  <br />
  <p>
    1)&nbsp; pojazdem w zakresie prawa jazdy kategorii:<br />
    <span class="space"
      >a) [<span id="82p2abX"></span>] <span id="82p2KategorieAB" class="cross">AM, A1, A2, A, B1, B, B+E, T,</span></span
    ><br />
    <span class="space"
      >b) [<span id="82p2cdX"></span>] <span id="82p2KategorieCD" class="cross">C1, C1+E, C, C+E, D1, D1+E, D, D+E;</span></span
    >
  </p>
  <br />
  <p>2)&nbsp; [&nbsp;&nbsp;]<span class="cross" id="tramwaj"> tramwajem</span>**).</p>
</div>
<div class="term--div">
  <br />
  <p class="big-font">
    Termin ważności orzeczenia psychologicznego***)
    <span class="term" id="expirationDate"></span>
  </p>
</div>
<div class="informations--div">
  <div class="low-line-height">
    <p id="releaseDate" class="term"></p>
    <p class="small-font">(data wystawienia)</p>
  </div>
  <div class="low-line-height">
    <p>...................................................</p>
    <p class="small-font">
      (informacje o uprawnionym psychologu oraz jego
      podpis****<sup>)</sup>)
    </p>
  </div>
</div>
<div class="instruction medium-font">
  <p><b>POUCZENIE:</b></p>
  <p>
    1. &nbsp;Osoba badana lub podmiot kierujący na badanie psychologiczne,
    którzy nie zgadzają się z treścią orzeczenia psychologicznego, mogą –
    w terminie 14 dni od dnia otrzymania orzeczenia psychologicznego – za
    pośrednictwem uprawnionego psychologa, który je wydał, wystąpić z
    wnioskiem o przeprowadzenie ponownego badania psychologicznego do
    wojewódzkiego ośrodka medycyny pracy, właściwego ze względu na miejsce
    zamieszkania osoby badanej.**)
  </p>
  <p class="light-break">
    2. &nbsp;Orzeczenie psychologiczne wydane po przeprowadzeniu ponownego
    badania psychologicznego jest ostateczne.**)
  </p>
</div>
<div class="explanations small-font">
  <p>Objaśnienia:</p>
  <p>
    *)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Należy podać następujące dane:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– nazwa i adres pracowni
    psychologicznej,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do rejestru
    przedsiębiorców prowadzących pracownię psychologiczną, o którym mowa w
    art. 83 ust. 1 pkt 1 ustawy z dnia 5 stycznia 2011 r.
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o kierujących
    pojazdami, albo do ewidencji jednostek, o której mowa w art. 86 ust. 4
    tej ustawy, oraz oznaczenie podmiotu prowadzącego odpowiednio rejestr
    albo<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ewidencję,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer identyfikacji
    podatkowej (NIP) przedsiębiorcy – jeżeli taki posiada.<br />
    **)&nbsp;&nbsp;&nbsp; Niepotrzebne skreślić.<br />
    ***)&nbsp; Orzeczenie jest wydane na okres, o którym mowa w art. 13
    ust. 1 pkt 2 oraz art. 16 ust. 3 ustawy z dnia 5 stycznia 2011 r. o
    kierujących pojazdami.<br />
    ****) Należy podać:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – imię i nazwisko
    uprawnionego psychologa,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do
    ewidencji uprawnionych psychologów oraz oznaczenie podmiotu
    prowadzącego ewidencję.
  </p>
</div>
</section>`;
const statement82p6 = `<section class="page">
<div class="heading">
  <p>.................................................</p>
  <p class="small-font">(określenie pracowni psychologicznej)</p>
</div>
<div>
  <p class="title big-font">
    ORZECZENIE PSYCHOLOGICZNE NR
    <span class="decisionNumber giga-font" id="decisionNumber82u1p6"></span>
  </p>
</div>
<div class="contents big-font">
  <p>
    W wyniku badania psychologicznego przeprowadzonego na podstawie art.
    82 ust. 1 pkt 6 ustawy z dnia 5 stycznia 2011 r. o kierujących
    pojazdami (Dz. U. z 2014 r. poz. 600)<br /><br />u <span id="male">Pana</span>/<span id="female">Pani</span>**)
    <span id="imieNazwisko" class="giga-font imieNazwisko"></span>
  </p>
  <br />
  <p>
    nr PESEL, a w przypadku osoby, której nie nadano nr PESEL – nazwa i
    numer dokumentu stwierdzającego <br />tożsamość
    <span id="pesel" class="giga-font pesel"></span>
  </p>

  <p>
    zamieszkałego(-ej)&nbsp;<span
      id="address"
      class="giga-font address"
    ></span>
  </p>
</div>
<div class="decision big-font">
  <p>
    stwierdzam <span id="noContraindications">brak</span>/<span
      id="contraindications"
      >istnienie</span
    >**) przeciwwskazań psychologicznych do kierowania pojazdem
    uprzywilejowanym lub przewożącym wartości pieniężne:
  </p>
  <br />
  <p>
    <span class="space">a) [<span id="82p6aX"></span>] <span id="82p6KategorieA" class="cross">A1, A2, A,</span></span><br />
    <span class="space"> b) [<span id="82p6bX"></span>] <span id="82p6KategorieB" class="cross">B1, B, B+E,</span></span><br />
    <span class="space"
      >c) [<span id="82p6cdX"></span>] <span id="82p6KategorieCD" class="cross">C1, C1+E, C, C+E, D1, D1+E, D, D+E</span>**).</span
    >
  </p>
  <br />
</div>
<div class="term--div big-font">
  <br />
  <p>
    Termin ważności orzeczenia psychologicznego***)
    <span class="term" id="expirationDate"></span>
  </p>
</div>
<div class="informations--div">
  <div class="low-line-height">
    <p id="releaseDate" class="term"></p>
    <p class="small-font">(data wystawienia)</p>
  </div>
  <div class="low-line-height">
    <p>...................................................</p>
    <p class="small-font">
      (informacje o uprawnionym psychologu oraz jego
      podpis****<sup>)</sup>)
    </p>
  </div>
</div>
<div class="instruction medium-font">
  <p><b>POUCZENIE:</b></p>
  <p>
    1. &nbsp;Osoba badana lub podmiot kierujący na badanie psychologiczne,
    którzy nie zgadzają się z treścią orzeczenia psychologicznego, mogą –
    w terminie 14 dni od dnia otrzymania orzeczenia psychologicznego – za
    pośrednictwem uprawnionego psychologa, który je wydał, wystąpić z
    wnioskiem o przeprowadzenie ponownego badania psychologicznego do
    wojewódzkiego ośrodka medycyny pracy, właściwego ze względu na miejsce
    zamieszkania osoby badanej.**)
  </p>
  <p class="light-break">
    2. &nbsp;Orzeczenie psychologiczne wydane po przeprowadzeniu ponownego
    badania psychologicznego jest ostateczne.**)
  </p>
</div>
<div class="explanations small-font">
  <p>Objaśnienia:</p>
  <p>
    *)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Należy podać następujące dane:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– nazwa i adres pracowni
    psychologicznej,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do rejestru
    przedsiębiorców prowadzących pracownię psychologiczną, o którym mowa w
    art. 83 ust. 1 pkt 1 ustawy z dnia 5 stycznia 2011 r.
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o kierujących
    pojazdami, albo do ewidencji jednostek, o której mowa w art. 86 ust. 4
    tej ustawy, oraz oznaczenie podmiotu prowadzącego odpowiednio rejestr
    albo<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ewidencję,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer identyfikacji
    podatkowej (NIP) przedsiębiorcy – jeżeli taki posiada.<br />
    **)&nbsp;&nbsp;&nbsp; Niepotrzebne skreślić.<br />
    ***)&nbsp; Orzeczenie jest wydane na okres, o którym mowa w art. 13
    ust. 1 pkt 2 oraz art. 16 ust. 3 ustawy z dnia 5 stycznia 2011 r. o
    kierujących pojazdami.<br />
    ****) Należy podać:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – imię i nazwisko
    uprawnionego psychologa,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do
    ewidencji uprawnionych psychologów oraz oznaczenie podmiotu
    prowadzącego ewidencję.
  </p>
</div>
</section>`;
const statement39k = `<section class="page">
<div class="heading">
  <p>.................................................</p>
  <p class="small-font">(określenie pracowni psychologicznej)</p>
</div>
<div>
  <p class="title big-font">
    ORZECZENIE PSYCHOLOGICZNE NR
    <span class="decisionNumber giga-font" id="decisionNumber39k"></span>
  </p>
</div>
<div class="contents big-font">
  <p>
    W wyniku badania psychologicznego przeprowadzonego na podstawie art.
    39k ust. 1/<span class="cross">art. 39m</span>**) ustawy z dnia 6 września 2001 r. o transporcie
    drogowym (Dz. U. z 2013 r. poz. 1414, z późn. zm.)<br /><br />u
    <span id="male">Pana</span>/<span id="female">Pani</span>**)
    <span id="imieNazwisko" class="giga-font imieNazwisko"></span>
  </p>
  <br />
  <p>
    nr PESEL, a w przypadku osoby, której nie nadano nr PESEL – nazwa i
    numer dokumentu stwierdzającego <br />tożsamość
    <span id="pesel" class="giga-font pesel"></span>
  </p>

  <p>
    zamieszkałego(-ej)&nbsp;<span
      id="address"
      class="giga-font address"
    ></span>
  </p>
</div>
<div class="decision big-font">
  <p>
    stwierdzam <span id="noContraindications">brak</span>/<span
      id="contraindications"
      >istnienie</span
    >**) przeciwwskazań psychologicznych do wykonywania pracy na
    stanowisku kierowcy.
  </p>
  <br /><br />
  <p>
    Termin następnego badania psychologicznego zgodnie z art. 39k ust. 3
    pkt 1/<span class="cross">pkt 2</span>**) ustawy z dnia 6 września 2001 r. o transporcie drogowym:
    <span class="term" id="expirationDate"></span>
  </p>
  <br />
</div>
<div class="term--div">
  <br />
</div>
<div class="informations--div">
  <div class="low-line-height">
    <p id="releaseDate" class="term"></p>
    <p class="small-font">(data wystawienia)</p>
  </div>
  <div class="low-line-height">
    <p>...................................................</p>
    <p class="small-font">
      (informacje o uprawnionym psychologu oraz jego
      podpis****<sup>)</sup>)
    </p>
  </div>
</div>
<div class="instruction medium-font">
  <p><b>POUCZENIE:</b></p>
  <p>
    1. &nbsp;Osoba badana lub podmiot kierujący na badanie psychologiczne,
    którzy nie zgadzają się z treścią orzeczenia psychologicznego, mogą –
    w terminie 14 dni od dnia otrzymania orzeczenia psychologicznego – za
    pośrednictwem uprawnionego psychologa, który je wydał, wystąpić z
    wnioskiem o przeprowadzenie ponownego badania psychologicznego do
    wojewódzkiego ośrodka medycyny pracy, właściwego ze względu na miejsce
    zamieszkania osoby badanej.**)
  </p>
  <p class="light-break">
    2. &nbsp;Orzeczenie psychologiczne wydane po przeprowadzeniu ponownego
    badania psychologicznego jest ostateczne.**)
  </p>
</div>
<div class="explanations small-font">
  <p>Objaśnienia:</p>
  <p>
    *)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Należy podać następujące dane:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– nazwa i adres pracowni
    psychologicznej,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do rejestru
    przedsiębiorców prowadzących pracownię psychologiczną, o którym mowa w
    art. 83 ust. 1 pkt 1 ustawy z dnia 5 stycznia 2011 r.
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o kierujących
    pojazdami, albo do ewidencji jednostek, o której mowa w art. 86 ust. 4
    tej ustawy, oraz oznaczenie podmiotu prowadzącego odpowiednio rejestr
    albo<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ewidencję,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer identyfikacji
    podatkowej (NIP) przedsiębiorcy – jeżeli taki posiada.<br />
    **)&nbsp;&nbsp;&nbsp; Niepotrzebne skreślić.<br />
    ***)&nbsp; Należy podać:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – imię i nazwisko
    uprawnionego psychologa,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;– numer wpisu do
    ewidencji uprawnionych psychologów oraz oznaczenie podmiotu
    prowadzącego ewidencję.
  </p>
</div>
</section>`;

if (boolean82u1p6 === "true") {
  statementsArray.push(statement82p6);
  statementsNumber++;
}
if (boolean82u1p2 === "true") {
  statementsArray.push(statement82p2);
  statementsNumber++;
}
if (boolean82u1p1 === "true") {
  statementsArray.push(statement82p1);
  statementsNumber++;
}
if (boolean39k === "true") {
  statementsArray.push(statement39k);
  statementsNumber++;
}
const formatData = function (data) {
  return data.split("-").reverse().join(".");
};

////////////// Assigning personal informations from the localStorage to every statement
for (let i = 0; i < statementsNumber; i++) {
  body.insertAdjacentHTML("afterbegin", statementsArray[i]);
  const numerOrzeczenia39k = document.getElementById("decisionNumber39k");
  const numerOrzeczenia82u1p1 = document.getElementById("decisionNumber82u1p1");
  const numerOrzeczenia82u1p2 = document.getElementById("decisionNumber82u1p2");
  const numerOrzeczenia82u1p6 = document.getElementById("decisionNumber82u1p6");

  const plec = localStorage.getItem("gender");
  const imie = document.getElementById("imieNazwisko");
  const pesel = document.getElementById("pesel");
  const adres = document.getElementById("address");
  const dataWydania = document.getElementById("releaseDate");
  const dataWaznosci = document.getElementById("expirationDate");
  const decyzja = localStorage.getItem("decision");

  const boolean82u1p1Amat = localStorage.getItem("82u1p1Amat");
  const boolean82u1p1Prof = localStorage.getItem("82u1p1Prof");
  const boolean82u1p2Amat = localStorage.getItem("82u1p2Amat");
  const boolean82u1p2Prof = localStorage.getItem("82u1p2Prof");
  const boolean82p1p6katA = localStorage.getItem("82p1p6katA");
  const boolean82p1p6katB = localStorage.getItem("82p1p6katB");
  const boolean82p1p6katCD = localStorage.getItem("82p1p6katCD");

  const x82p1AB = document.getElementById("82p1abX");
  const x82p1CD = document.getElementById("82p1cdX");
  const x82p2AB = document.getElementById("82p2abX");
  const x82p2CD = document.getElementById("82p2cdX");
  const x82p6A = document.getElementById("82p6aX");
  const x82p6B = document.getElementById("82p6bX");
  const x82p6CD = document.getElementById("82p6cdX");

  ///// text values
  imie.textContent = localStorage.getItem("name");
  pesel.textContent = localStorage.getItem("pesel");
  adres.textContent = localStorage.getItem("address");

  dataWydania.textContent = formatData(localStorage.getItem("releaseDate"));
  dataWaznosci.textContent = formatData(localStorage.getItem("expirationDate"));

  // Setting choosed categories
  /////// IF NO CONSTRAINDICATIONS //////////
  // art. 82 ust. 1 pkt 1
  if (decyzja === "noContraindications") {
    if (statementsArray[i] === statement82p1) {
      numerOrzeczenia82u1p1.textContent = localStorage.getItem(
        "statementNumber82u1p1"
      );
      if (boolean82u1p1 === "true") {
        // IF art 82 ust. 1 pkt 1 is ON
        if (boolean82u1p1Amat === "true") {
          document.getElementById("82p1KategorieAB").classList.remove("cross");
          x82p1AB.textContent = "X";
        }
        if (boolean82u1p1Prof === "true") {
          document.getElementById("82p1KategorieCD").classList.remove("cross");
          x82p1CD.textContent = "X";
        }
      }
    }
    // art. 82 ust. 1 pkt 2
    else if (statementsArray[i] === statement82p2) {
      if (boolean82u1p2 === "true") {
        numerOrzeczenia82u1p2.textContent = localStorage.getItem(
          "statementNumber82u1p2"
        );
        if (boolean82u1p2Amat === "true") {
          document.getElementById("82p2KategorieAB").classList.remove("cross");
          x82p2AB.textContent = "X";
        }
        if (boolean82u1p2Prof === "true") {
          document.getElementById("82p2KategorieCD").classList.remove("cross");
          x82p2CD.textContent = "X";
        }
      }
    }
    // art. 82 ust. 1 pkt 6
    else if (statementsArray[i] === statement82p6) {
      if (boolean82u1p6 === "true") {
        numerOrzeczenia82u1p6.textContent = localStorage.getItem(
          "statementNumber82u1p6"
        );
        if (boolean82p1p6katA === "true") {
          document.getElementById("82p6KategorieA").classList.remove("cross");
          x82p6A.textContent = "X";
        }
        if (boolean82p1p6katB === "true") {
          document.getElementById("82p6KategorieB").classList.remove("cross");
          x82p6B.textContent = "X";
        }
        if (boolean82p1p6katCD === "true") {
          document.getElementById("82p6KategorieCD").classList.remove("cross");
          x82p6CD.textContent = "X";
        }
      }
    } else if (statementsArray[i] === statement39k) {
      numerOrzeczenia39k.textContent =
        localStorage.getItem("statementNumber39k");

      // console.log("39k Passed");
    }
  } /////// IF CONTRAINDICATIONS OR BLANK - REMOVE ALL CROSS-LINES
  else if (statementsArray[i] === statement82p1) {
    document.getElementById("82p1KategorieAB").classList.remove("cross");
    document.getElementById("82p1KategorieCD").classList.remove("cross");
    document.getElementById("tramwaj").classList.remove("cross");
  } else if (statementsArray[i] === statement82p2) {
    document.getElementById("82p2KategorieAB").classList.remove("cross");
    document.getElementById("82p2KategorieCD").classList.remove("cross");
    document.getElementById("tramwaj").classList.remove("cross");
  } else if (statementsArray[i] === statement82p6) {
    document.getElementById("82p6KategorieA").classList.remove("cross");
    document.getElementById("82p6KategorieB").classList.remove("cross");
    document.getElementById("82p6KategorieCD").classList.remove("cross");
  } else if (statementsArray[i] === statement39k) {
    // console.log("39k Passed");
  }

  ///// contraindications
  if (decyzja === "noContraindications") {
    document.getElementById("contraindications").classList.add("cross");
    document.getElementById("noContraindications").classList.add("bold");
  } else if (decyzja === "contraindications") {
    // console.log(decyzja);
    document.getElementById("noContraindications").classList.add("cross");
    document.getElementById("contraindications").classList.add("bold");
  }
  ///// gender
  if (plec === "male") {
    document.getElementById("female").classList.add("cross");
  } else {
    document.getElementById("male").classList.add("cross");
  }
}

////////// Converting page content to pdf file

window.onload = function () {
  const invoice = this.document.getElementById("invoice");
  const opt = {
    margin: 0,
    filename: `${localStorage.getItem("name")}`,
    image: { type: "jpeg", quality: 1 },
    // imageTimeout: 0,
    // html2canvas: { scale: 1 },
    // jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().from(invoice).set(opt).save();
};

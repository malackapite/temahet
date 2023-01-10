window.scroll(0, 0);

hol = 0;
olaj = [
  `
  A kőolaj egy fosszilis tüzelőanyag, amelyet a Föld felszíne alól nyerhetnek ki. A
  kőolaj tározói a növények, algák és üledékek keverékéből származtak a sekély tengerekben, nagy
  nyomás alatt. A kőolajat többnyire olajfúrásból nyerik ki. Szeizmikus felméréseket és egyéb
  módszereket alkalmaznak az olajtározók felkutatására. Olajfúró fúrótornyokat és olajfúró
  platformokat használnak hosszú lyukak fúrására a földbe, hogy olajkutat hozzanak létre és
  kőolajat nyerjenek ki.
`,
  "a",
  "2",
  `A mikroműanyag, vagy más néven mikroplasztik az 5 milliméternél kisebb műanyagdarabokat jelenti. Ezek az apró darabkák a műanyagok bomlási folyamata során keletkeznek a műanyagok szerkezetének szétesésével, melyet első sorban az ultraviola sugarak okoznak, a napsugárzáson keresztül. A műanyag szerkezeti változásának a másik okozója az anyag elöregedése, szerkezetében a kötések megváltozása.`,
  "4",
  "A savas eső alapvetően megváltozott pH-értékű csapadék. Nehéz elhatárolni az antropogén hatásra kialakuló savas esőt a természetes folyamatok között kialakulótól. Ezen mindennapi folyamatok hatására a csapadékvíz természetes pH-értéke 5 körüli. Itt főleg a vízben oldott szén-dioxid és szulfátrészecskék játsszák a főszerepet. Néhány jól ismert folyamatban is meghatározó szerepe van a csapadék természetes savasságának, ilyen például a karsztosodás is.",
  "Az olajszennyezés emberi tevékenység következtében folyékony kőolajból származó szénhidrogén kibocsátása a környezetbe, különösen a tengeri ökoszisztémába, és a szennyezés egy formája. A kifejezést általában a tengeri olajszennyezésekre szokták használni, amikor az olaj az óceánba vagy a part menti vizekbe kerül, de előfordulhatnak kiömlések a szárazföldön is.",
];

function a() {
  for (let ix = 0; ix < 3; ix++) {
    document.getElementsByClassName("tuz")[ix].style.animation = "tuz 4s";
    document.getElementsByClassName("tuz")[ix].style.animationDelay =
      ix * 0.3 + "s";
    setTimeout(() => {
      document.getElementsByClassName("tuz")[ix].style.animation = null;
    }, 5000);
  }
  new Audio("../css/sounds/mixkit-fire-swoosh-burning-1328.wav").play();
  setTimeout(() => {
    document.getElementsByTagName("article")[1].scrollIntoView();
  }, 2000);
}
function animacio(nth) {
  switch (nth) {
    case 0:
      a();
      break;
    case 1:
      document.getElementById("foil").style.animation = "tuz 4s";
      setTimeout(() => {
        document.getElementById("foil").style.animation = null;
      }, 4000);
      break;
    case 2:
      document.getElementById("gas").style.animation = "tuz 4s";
      setTimeout(() => {
        document.getElementById("gas").style.animation = null;
      }, 4000);
      break;

    // default:
    //     break
  }
}
function lapoz(nth) {
  console.log(nth);
  for (var ix = 0; ix < 3; ix++)
    document.getElementById("menu").getElementsByTagName("div")[
      ix
    ].style.backgroundColor = "gray";
  document.getElementById("menu").getElementsByTagName("div")[
    nth
  ].style.backgroundColor = "black";
  setTimeout(() => {
    document.getElementsByTagName("article")[0].style.display = "none";
    document.getElementsByTagName("article")[1].style.display = "none";
    document.getElementsByTagName("article")[2].style.display = "none";
    document.getElementsByTagName("article")[nth].style.display = "grid";
    // document.getElementsByTagName("article")[nth].style.animation="float-right 2s forwards"
  }, 2000);
}

var asd;
function le(event) {
  asd = event.clientX;
  console.log(asd);
}
function fel(event) {
  console.log(event.clientX);
  if (event.clientX <= asd - 100 && hol < 2) {
    animacio(hol);
    lapoz(++hol);
  } else if (event.clientX >= asd + 100 && hol > 0) {
    animacio(hol);
    lapoz(--hol);
  }
}

function csere(nth) {
  document.getElementById("csere").innerHTML = olaj[nth];
}

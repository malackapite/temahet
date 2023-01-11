window.onload = function(){
  window.scroll(0, 0);
}
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
  "A kőolaj számos összetevője összetett keverék. Az olajok toxicitása a toxikus potenciál alapján, illetve az egyes olajkomponensek toxicitása alapján érthető meg az adott komponens vízoldhatóságánál. A különböző olajváltozatok eltérő toxicitási szintje ellenére minden kőolajból származó termék káros hatással van az emberi egészségre és az ökoszisztémára.",
  "A kőolaj-kitermelés megbontja a Föld szénciklusának egyensúlyát azáltal, hogy a megkötött geológiai szenet a bioszférába szállítja. A szenet a fogyasztók különféle formákban használják fel, és nagy része elégetik a légkörbe; így hatalmas mennyiségű üvegházhatású gáz, szén-dioxid keletkezik hulladéktermékként. A földgáz (többnyire metán) még erősebb üvegházhatású, ha elégetése előtt a légkörbe kerül.",
  `A műanyagok nagy részét nem hasznosítják újra, és idővel egyre kisebb darabokra töredeznek. A mikroműanyagok olyan részecskék, amelyek mérete kisebb, mint 5 mm. A mikroműanyagok a földfelszín szinte minden helyéről gyűjtött levegő-, víz- és talajmintákban, és egyre inkább biológiai mintákon is megfigyelhetők. A műanyaghulladék környezeti felhalmozódásának hosszú távú hatásai tudományos értékelés alatt állnak, de eddig többnyire ismeretlenek. A mikroműanyagok aggodalomra adnak okot, mert hajlamosak a szennyező anyagok felszívódására a felületükön, valamint bioakkumulálódni is képesek.`,
  "Az olajháború a kőolajforrásokkal, vagy azok szállításával, fogyasztásával vagy szabályozásával kapcsolatos konfliktus. A kifejezés általánosságban utalhat bármely konfliktusra egy olyan régióban, amely olajtartalékokkal rendelkezik, vagy földrajzilag olyan helyen található, ahol egy entitás kőolajtermékek termelési vagy szállítási infrastruktúráját fejleszti, vagy fejleszteni kívánja.",
  "A savas eső alapvetően megváltozott pH-értékű csapadék. Nehéz elhatárolni az antropogén hatásra kialakuló savas esőt a természetes folyamatok között kialakulótól. Ezen mindennapi folyamatok hatására a csapadékvíz természetes pH-értéke 5 körüli. Itt főleg a vízben oldott szén-dioxid és szulfátrészecskék játsszák a főszerepet. Néhány jól ismert folyamatban is meghatározó szerepe van a csapadék természetes savasságának, ilyen például a karsztosodás is.",
  "Az olajszennyezés emberi tevékenység következtében folyékony kőolajból származó szénhidrogén kibocsátása a környezetbe, különösen a tengeri ökoszisztémába, és a szennyezés egy formája. A kifejezést általában a tengeri olajszennyezésekre szokták használni, amikor az olaj az óceánba vagy a part menti vizekbe kerül, de előfordulhatnak kiömlések a szárazföldön is.",
];

function animacio(nth) {
  switch (nth) {
    case 0:
      for (let ix = 0; ix < 3; ix++) {
        document.getElementsByClassName("tuz")[ix].style.animation = "tuz 4s";
        document.getElementsByClassName("tuz")[ix].style.animationDelay =
          ix * 0.3 + "s";
        setTimeout(() => {
          document.getElementsByClassName("tuz")[ix].style.animation = null;
        }, 5000);
      }
      new Audio("../css/sounds/mixkit-fire-swoosh-burning-1328.wav").play();
      break;
    case 1:
      document.getElementById("foil").style.animation = "tuz 4s";
      setTimeout(() => {
        document.getElementById("foil").style.animation = null;
      }, 4000);
      new Audio("../css/sounds/oil.wav").play();
      break;
    case 2:
      document.getElementById("gas").style.animation = "tuz 4s";
      setTimeout(() => {
        document.getElementById("gas").style.animation = null;
      }, 4000);
      new Audio("../css/sounds/air.wav").play();
      break
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

var NicolasVonCursor;
function le(event) {
  NicolasVonCursor = event.clientX;
  console.log(NicolasVonCursor);
}
function fel(event) {
  console.log(event.clientX);
  if (event.clientX <= NicolasVonCursor - 100 && hol < 2) {
    animacio(hol);
    lapoz(++hol);
  } else if (event.clientX >= NicolasVonCursor + 100 && hol > 0) {
    animacio(hol);
    lapoz(--hol);
  }
}

function csere(nth) {
  document.getElementById("csere").innerHTML = olaj[nth];
}

hol = 1
olaj=[`
Petroleum is a fossil fuel that can be drawn from beneath the earth's surface. Reservoirs of
                        petroleum was formed through the mixture of plants, algae, and sediments in shallow seas under
                        high
                        pressure. Petroleum is mostly recovered from oil drilling. Seismic surveys and other methods are
                        used to locate oil reservoirs. Oil rigs and oil platforms are used to drill long holes into the
                        earth to create an oil well and extract petroleum. After extraction, oil is refined to make
                        gasoline
                        and other products such as tires and refrigerators. Extraction of petroleum can be dangerous and
                        have led to oil spills.
`,"a","2",`
A mikroműanyag, vagy más néven mikroplasztik az 5 milliméternél kisebb műanyagdarabokat jelenti. Ezek az apró darabkák a műanyagok bomlási folyamata során keletkeznek a műanyagok szerkezetének szétesésével, melyet első sorban az ultraviola sugarak okoznak, a napsugárzáson keresztül. A műanyag szerkezeti változásának a másik okozója az anyag elöregedése, szerkezetében a kötések megváltozása. A műanyagok fizikai, illetve kémiai folyamatok végeredményeként is aprózódhatnak. Előfordulhatnak a környezetben éppúgy, mint az emberek, vagy az állatok szervezetében. A természetes vizek, az eső, a levegő, de még a talaj is tartalmazhat mikroműanyagokat, akárcsak a táplálék. Eredetük különböző lehet: kozmetikumokból, a ruházatból, csomagolóanyagokból és ipari folyamatok során kerülhetnek a környezetbe.`,
"4",
"A savas eső (másik nevén savas ülepedés) alapvetően megváltozott pH-értékű csapadék. Nehéz elhatárolni az antropogén hatásra kialakuló savas esőt a természetes folyamatok között kialakulótól. Ezen mindennapi folyamatok hatására a csapadékvíz természetes pH-értéke 5 körüli. Itt főleg a vízben oldott szén-dioxid és szulfátrészecskék játsszák a főszerepet. Néhány jól ismert folyamatban is meghatározó szerepe van a csapadék természetes savasságának, ilyen például a karsztosodás is.",
"An oil spill is the release of a liquid petroleum hydrocarbon into the environment, especially the marine ecosystem, due to human activity, and is a form of pollution. The term is usually given to marine oil spills, where oil is released into the ocean or coastal waters, but spills may also occur on land. Oil spills may be due to releases of crude oil from tankers, offshore platforms, drilling rigs and wells, as well as spills of refined petroleum products (such as gasoline, diesel) and their by-products, heavier fuels used by large ships such as bunker fuel, or the spill of any oily refuse or waste oil."]

function a() {
    for (let ix = 0; ix < 3; ix++) {
        document.getElementsByClassName("tuz")[ix].style.animation = "tuz 4s"
        document.getElementsByClassName("tuz")[ix].style.animationDelay = ix * .3 + "s"
        setTimeout(() => {
            document.getElementsByClassName("tuz")[ix].style.animation = null
        }, 5000);
    }
    new Audio("mixkit-fire-swoosh-burning-1328.wav").play()
    setTimeout(() => {
        document.getElementsByTagName("article")[1].scrollIntoView();
    }, 2000);
}
function animacio(nth) {
    switch (nth) {
        case 1:
            document.getElementById("foil").style.animation = "tuz 4s"
            setTimeout(() => {
                document.getElementById("foil").style.animation = null
            }, 4000);
        break
        case 2:
            document.getElementById("gas").style.animation = "tuz 4s"
            setTimeout(() => {
                document.getElementById("gas").style.animation = null
            }, 4000);
        break
        
        // default:
        //     break
    }
}
function lapoz(nth) {
    console.log(nth)

    setTimeout(() => {
        document.getElementsByTagName("article")[1].style.display = "none"
        document.getElementsByTagName("article")[2].style.display = "none"
        document.getElementsByTagName("article")[nth].style.display = "grid"
        // document.getElementsByTagName("article")[nth].style.animation="float-right 2s forwards"
    }, 2000);
}

var asd
function le(event) {
    asd = event.clientX;
    console.log(asd)
}
function fel(event) {

    console.log(event.clientX)
    if (event.clientX <= asd - 100 && hol < 2) {
        animacio(hol)
        lapoz(++hol)
    }
    else if (event.clientX >= asd + 100 && hol > 1) {
        animacio(hol)
        lapoz(--hol)

    }
}

function csere(nth){
    document.getElementById("csere").innerHTML=olaj[nth]
}
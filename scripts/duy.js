let szovegek=[
    `<p>Jelenleg az elektromos járművek legyártásának nagyobb széndioxid-terhelése van mint a belső égésű motorral rendelkező járműveknek. <br>
    Lítium szükséges az elektromos járművek elemeinek legyártásához, aminek a bányászata rengeteg uvegházi gázt termel.<br>
    Egy darab elektromos jármű elkészítése átlagosan 8-10 tonna szén-dioxidot termel.<br>
    Egy kisebb elektromos autó legyártása nagyjából 2-5, egy nagyobb pedig 17-20 tonna szén-dioxidot termel, miközben egy belső égésű motorral rendelkező auto kb. 7-et.<br>
    </p>`,
    `<p>A világ lítiumkészletének fele az úgynevezett lítium háromszogből származik, egy terület Chíle, Bolivia, és Argentína között.<br>
    A bányászatához rengeteg vizet kell felhasználni a fúrás körülötti területekről, ami csökkentette a vízellátást így kevés felhasználható víz maradt a helyi mezőgazdaság számára.<br>
    A bányászvállalatok Chile Salar de Atacama nevű régió vizének 65%-át már felhasználták.<br>
    750 tonna sóoldat szükséges 1 tonna lítium előállításához, de a lítium csak az egyik komponense az elemeknek.<br>
    </p>`,
    `<p>Egyre nagyobb aggodalom övezi beszerzését a kóbalt, ami szintén szükséges az elemek gyártásához.<br>
    Viszont a probléma inkább az etikai dilemma ennek a nyersanyag beszerzésével, mivel egyes kóbaltbányákban gyerekmunkát alkalmaznak, ami elítélendő.<br>
    </p>`,
    `<p>A folyamat, amelyben a lítium-ion akkumulátorokat újrahasznosítják nem azon a ponton van ahol lennie kéne, ahoz ,hogy megbírkozzon a növekvő számú kimerült akumulátorokkal.<br>
    Rengetek különböző probléma van az ilyes fajta elemek újrahasznosításával.<br>
    Például a tárolásuk nagy gondot okoz volatilitásuk miatt, már több tűz eset is volt régi akkumulátorokat feldolgozó létesítményekben.<br>
    Az gázmotorokhoz képest még gyerekcipőben jár a tekhnológia az elektromos autók előállításához, így nagy valószínűséggel még sokat fog fejlődni a jövőben.<br>
    </p>`,
    `<p>
    Jelenleg számos régiókban a világon még mindig szénerőművekből nyerik az energiát.<br>
    Tehát a vezetés hatása nulla károsanyag-libocsátású autóval azokban a régiókban, jobban károsítja a környezetet, mint egy elektromos jármű vezetése tiszta energiával.<br>
    mint pl.:
</p>
<ul>
    <li>Szélerőmű</li>
    <li>Napelem</li>
    <li>Vízerőmű</li>
</ul>
<p>
    Viszont ahogy az ilyen tipusú energia egyre gyakoribbá válik, az elektromos járművek hatékonysága csak javulni fog.
</p>`,
    `<p>
    Az átlag gyártása egy belső égésű járműnek 7 tonna szén-dioxidot termel.<br>
    Ez az egy szám mindent figyelembe vesz a fém bányászatától addig a pillanatig míg a jármű legurul a gyártósorról.<br>
    Ez a szám kisebb az elektomos autóknál a lítium akumulátorok hiánya miatt.<br>
    Ehez annak is köze van, hogy milyen fejletté vált már a gázmotoros autók gyártása az évek során.<br>
    Miután az autó kigurul a gyárból a benzin üzemű autókból származó üvegházhatású kibocsátások átlaga 5,2 tonna évente, akkor ha az autó az átlagosan 18990 km-t ment.<br>
    Az autó élete alatt 57 tonna szén-dioxidért felelős, a lítiumhoz hasonlóan a benzint is bányászni kell.<br>
    Átlagosan egy autó 1900 l-t benzint fogyaszt évente. 
</p>`,
    `<p>
    Sok lépés van a kőolaj kitermelése és az autó tankolása között a benzinkútnál, és minden lépésnek környezeti hatása van.<br>
    A kőolaj litermelése a földbefúrással kezdődik, akár a szárazföldön, akár az oceán fenekén.<br>
    Miután a kőolajat kibányásszák, benzinné kell finomítani és egyéb kőolajtermékek mint például:<br>
</p>
<ul>
    <li>Repülőgép üzemanyag</li>
    <li>Vazelin</li>
    <li>Müanyag</li>
</ul>
<p>
    is készül a finomítás után.
    Ez az egész folyamat több tonna üvegházhatású gázt bocsát ki, beleértve nemcsak a szén-dioxidot, hanem a metánt és a dinitrogén-oxidot is.<br>
    Minden nap szerte a világon közel 95 millió hordó olajat állítanak elő és minden nap az olajfinomítás a felelős 767 millió tonna szén-dioxid kivocsátásáért.<br>
    Persze az átlagos autó évente 5,2 tonna szén-dioxidotért felelős, de az olajfinomítók 280 MILLIÁRD tonna szén-dioxidot bocsátanak ki ugyan abban az időkeretben.<br>
</p>`

]

function csere(nth){
    // document.getElementById("kicsi").getElementsByTagName("div")[nth].innerHTML="a"
    document.getElementById("csere").innerHTML=szovegek[nth]
}
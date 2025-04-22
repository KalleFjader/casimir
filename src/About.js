import myphoto from './images/casusavant.jpg';
import aibucket from './images/bucketai.png';

function About() {
  return (
    <div className="about-container">
      

      <div className="about-item">
      <h1>Avant 635i</h1>
      <div className="about-content">
        <img src ={myphoto}alt="Bild på Avant 600"className="placeholder-image"/>
        <p>
          "Avant 600-sarja on todellinen jokapaikan monitoimikone. Siinä on yhdistetty koneen kokoon nähden suuri nostoteho, työntövoima, ajonopeus ja työhydrauliikan tuotto erittäin kompaktiin pakettiin. 
          Tämän ansiosta 600-sarja on jo vuosia ollut erittäin suosittu niin viherrakentamisessa, viheralueiden hoidossa, rakennustyömailla, maataloudessa, 
          hevostalleilla kuin monissa muissakin töissä. Reilun tonnin nostokyky riittää mitä erilaisimpiin tarpeisiin ja tehokas työlaitehydrauliikka mahdollistaa useimpien Avant-työlaitteiden käytön."
        </p>
      </div>
      </div>
      
      <div className="about-item">
      <h1>Lisävarusteet</h1>
      <div className="about-content">
        <img src={aibucket} alt="Kauha" className="bucket-image" />
        <div className="text-content">
        <p>
          Vuokraamme myös tarpeidesi mukaan erilaisia lisävarusteita koneisiin kuten esimerkiksi:
        </p>
        <ul className="accessory-list">
        <li>Maapora 400mm + ruuvipaaluadapteri</li>
        <li>Trukkipiikit</li>
        <li>Lumikauha/multa ja muut kevyet materiaalit</li>

      </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

  
  export default About;
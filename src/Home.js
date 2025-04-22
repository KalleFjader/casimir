import './Main.css';
import myphoto from './images/avantai.png';

function Home() {
  return (
    <div>
      <div className="main-content">
        <h1>Konevuokraus</h1>
        <p className='infotext'>Tarvitsetko työmaakoneita rakentamiseen, pihatyöhön tai muihin projekteihin?
        Meiltä löydät koneita vuokralle helposti ja nopeasti. Toimitamme koneet suoraan kotiisi tai työmaallesi vaivattomasti.</p>
        <img src={myphoto} alt="A description of the photo" className="main-image" />
        <p>Casimir Fjäder  |  0408219491</p>
      </div>
    </div>
  );
}

export default Home;
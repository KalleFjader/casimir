import './Main.css';
import myphoto from './images/casubil2.png';

function Home() {
  return (
    <div>
      <div className="main-content">
        <h1>Konehuolto</h1>
        <p className='infotext'>Vi är ett serviceföretag som specialiserar oss på reparationer och underhåll av maskiner. Oavsett om det gäller service på plats hos oss eller hembesök direkt till din dör. Med snabb respons och hög expertis erbjuder vi smidiga lösningar anpassade efter dina behov.</p>
        <img src={myphoto} alt="A description of the photo" className="main-image" />
        <p>Casimir Fjäder  |  0400485752</p>
      </div>
    </div>
  );
}

export default Home;
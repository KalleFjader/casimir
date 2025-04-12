import myphoto from './images/placeholder.png';

function About() {
    return (
      <div>
        <h1>Om oss</h1>
        <p>Vi är ett serviceföretag som specialiserar oss på reparationer och underhåll av maskiner. Oavsett om det gäller service på plats hos oss eller hembesök direkt till din dör. Med snabb respons och hög expertis erbjuder vi smidiga lösningar anpassade efter dina behov.</p>
        <div>
          <img src={myphoto} alt="Bild på tidigare arbete!" className="placeholder-image" />
          <img src={myphoto} alt="Bild på tidigare arbete!" className="placeholder-image" />
          <img src={myphoto} alt="Bild på tidigare arbete!" className="placeholder-image" />
        </div>
      
      </div>

    );
  }
  
  export default About;
import map from './images/map.png';

function Hinnasto() {
    return (
      <div className="main-content hinnasto-page">
        <h1 className="hinnasto-header">Hinnasto</h1>
        <ul className="price-list">
          <li>1 Päivä - 150€</li>
          <li>3 päivää - 300€</li>
          <li>Pidemmät ajat sopimiksen mukaan</li>
          
        </ul>
        <ul className="price-list">
        <li>Kuljetus - 50€ (25km säteellä)</li>
        </ul>
        <img src={map} alt="Map of area" className="map-image" />
      </div>
      
    );
  }
  
  export default Hinnasto;
  
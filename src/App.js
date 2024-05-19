import "./App.scss";
import astrixLogo from "./assets/astrix_logo.png";
import headerLogo from "./assets/Logo.png";
import astrickLogo from "./assets/astrick.png";
import profiles from "./assets/profiles.png";
import card from "./assets/Card_Small.png";
import toggle from "./assets/Toggle.png";
import events from "./assets/Events.png";

function App() {
  return (
    <div className="container">
      <div className="events">
        <img src={events}/>
      </div>
      <div>
        <div className="header-logo">
          <div>
            <img src={astrixLogo} />
          </div>
          <div>
            <img src={headerLogo} />
          </div>
        </div>
        <div className="box1">
          <h1 className="heading">ASTRIX COLLECTIBLE</h1>
        </div>
        <div className="toggle">
          <img src={toggle} />
        </div>
      </div>
      <div className="box2">
        <h1>
          Event : Oasis Bus tour , JLN Stadium , Delhi &nbsp;
          <img src={astrickLogo} />
          &nbsp; Collection Live : Meta Lives , live on astrix
        </h1>
      </div>
      <div className="box3">
        <div className="content">
          <div className="content-header">Explore Youre First Collectible</div>
          <div className="content-header2">Meta Lives</div>
          <div className="content-header3">Live in Astrix</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.
          </p>
        </div>
        <div className="content-2">
          <img src={profiles} />
          <div>22k people interested</div>
        </div>
        <div className="collectibles">
          <div>Collectibles</div>
          <div className="cards">
            <img src={card} className="card" />
            <img src={card} className="card" />
            <img src={card} className="card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

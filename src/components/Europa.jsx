import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import EuropaClassifica from "./EuropaClassifica";
import MarcatoriEuropa from "./MarcatoriEuropa";
import RisultatiEuropa from "./RisultatiEuropa";
import CalendarioEuropa from "../data/CalendarioEuropa.json";
import RisultatiEL from "./RisultatiEL";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="classifica"
      id="uncontrolled-tab-example"
      className="justify-content-center mb-3 mt-2 nowrappp"
    >
      <Tab eventKey="classifica" title="Class.">
        {<EuropaClassifica />}
      </Tab>
      <Tab eventKey="marcatori" title="Marc.">
        {<MarcatoriEuropa />}
      </Tab>

      <Tab eventKey="incontri" title="Incontri">
        <RisultatiEuropa partite={CalendarioEuropa} />
      </Tab>

      <Tab eventKey="RisultatiEuropaLeague" title="Ris." tabClassName="customcolor">
        <RisultatiEL />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;

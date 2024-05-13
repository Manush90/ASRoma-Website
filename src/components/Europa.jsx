import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import EuropaClassifica from "./EuropaClassifica";
import Marcatori from "./Marcatori";
import RisultatiEuropa from "./RisultatiEuropa";
import CalendarioEuropa from "../data/CalendarioEuropa.json";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="classifica"
      id="uncontrolled-tab-example"
      className="justify-content-center mb-3 mt-2"
    >
      <Tab eventKey="classifica" title="Classifica">
        {<EuropaClassifica />}
      </Tab>
      <Tab eventKey="marcatori" title="Marcatori">
        {<Marcatori />}
      </Tab>

      <Tab eventKey="incontri" title="Incontri">
        <RisultatiEuropa partite={CalendarioEuropa} />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;

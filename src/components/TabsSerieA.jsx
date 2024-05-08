import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SerieA from "./SerieA";
import Marcatori from "./Marcatori";

function UncontrolledExample() {
  return (
    <Tabs defaultActiveKey="classifica" id="uncontrolled-tab-example" className="mb-3 mt-2">
      <Tab eventKey="classifica" title="Classifica">
        {<SerieA />}
      </Tab>
      <Tab eventKey="marcatori" title="Marcatori">
        {<Marcatori />}
      </Tab>
      <Tab eventKey="incontri" title="Incontri">
        {/* Inserisci qui il componente per gli incontri */}
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SerieA from "./SerieA";
import Marcatori from "./Marcatori";
import Risultati from "./Risultati";
import Calendario from "../data/Calendario.json";
import RisultatiSerieA from "./RisultatiSerieA";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="classifica"
      id="uncontrolled-tab-example"
      className="justify-content-center mb-3 mt-2 nowrappp"
    >
      <Tab eventKey="classifica" title="Class.">
        {<SerieA />}
      </Tab>
      <Tab eventKey="marcatori" title="Marc.">
        {<Marcatori />}
      </Tab>
      <Tab eventKey="incontri" title="Match">
        <Risultati partite={Calendario} />
      </Tab>
      <Tab eventKey="Risultati Serie A" title="Incontri">
        <RisultatiSerieA />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;

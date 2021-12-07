import { Dropdown } from "./components/dropdown/Dropdown";
import { useState } from "react";

function App() {

  const [selectedTenis, setSelectedTenis] = useState(null);

  return (
    <div className="App">
      {selectedTenis && <div>Seu tenis: {selectedTenis}</div>}

      <Dropdown
        title="Selecione o seu tenis Inicial"
        options={['Jordan', 'Dunk', 'SB']}
        onSelect={setSelectedTenis}
      />
    </div>
  );
}

export default App;

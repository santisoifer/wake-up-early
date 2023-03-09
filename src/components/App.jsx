import React from "react";
import Card from "./Card";
import CreateCard from "./CreateCard";

function App() {
  return (
    <div>
      <Card 
      title="Early wake up" 
      description="Wake up earlier in a week!"
      objetive="14/3, 8:00"
      creator="Santi Soifer"
      />
      <Card 
      title="Not a morning person" 
      description="For people that find dificult waking up in the mornings."
      objetive="11/3, 7:30"
      creator="Santi Soifer"
      />

      <CreateCard />
    </div>
  );
}

export default App;

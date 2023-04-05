import React, { useEffect, useState } from "react";
import Card from "./Card";
import CreateCard from "./CreateCard";
import axios from "axios";

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/routines')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      {
        cards.map((routine, index) => (
          <Card
          key={index}
          title={routine.name}
          description={routine.description}
          objetive={routine.time}
          creator={routine.author}
        />
        ))
      }
      <CreateCard />
    </div>
  );
}

export default App;

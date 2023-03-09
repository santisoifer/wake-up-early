import React, {useState} from "react";
import CardForm from "./CardForm";


function CreateCard() {
    const [showForm, setShowForm] = useState(false);

    function buttonClicked() {
        setShowForm(true);
    }

    return (
        <div>
            <button onClick={buttonClicked} className="openCardForm"><i class="fa-solid fa-plus"></i></button>
            {showForm && (<CardForm setShowForm={setShowForm} />)}
        </div>
    )
}

export default CreateCard;
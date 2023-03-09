import React from "react";

function CardForm(props) {

    function handleClick() {
        let setShowForm = props.setShowForm;
        setShowForm(false);
    }

    return (
        <div className="cardForm">
            <form action="/addRoutine" method="post" className="cardForm__flex">

                <div className="cardForm__section">
                    <input type="text" name="title" placeholder="Title of routine" />
                    <input type="text" name="description" placeholder="Description" />
                    <input type="text" name="author" placeholder="Your name" />
                </div>


                <div className="cardForm__section">
                    <input type="time" name="time" placeholder="When?" />
                    <button className="close-cardForm" onClick={handleClick}><i class="fa-solid fa-x"></i></button>
                    <select name="when">
                        <option value="week">In a week</option>
                        <option value="twoWeeks">In two weeks</option>
                        <option value="fiveDays">In five days</option>
                        <option value="threeDays">In three days</option>
                    </select>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default CardForm;
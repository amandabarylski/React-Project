import './CreatureData.css'

import { Creature } from "../../types";

//I had an error on the bestiary page until I added the interface here.
interface CreatureDataProps {
    creature: Creature
}

//The edit and delete buttons won't do anything right now, but having them now allows me to include them in the styling.
export default function CreatureData({ creature }: CreatureDataProps) {
    return (
        <div className="bestiary-entry">
            <h2>{creature.name}</h2>
            <h3>{creature.location}</h3>
            <p className="combat-advice"><strong>Advice: </strong>
            {(creature.defeat == "possible") ? "Bring a shovel!" :
            (creature.defeat == "unlikely") ? "Only engage as a last resort." :
            "Escape is the only option."}
            </p>
            <section className='creature-data'>
                <h4>Creature Data:</h4>
                <div className='data-container'>
                    <p className='creature-description'>{creature.description}</p>
                    <div className='button-div'>
                        <button type="button" className="edit-button" data-index={creature.id}>Edit</button>
                        <button type="button" className="delete-button" data-index={creature.id}>Delete</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
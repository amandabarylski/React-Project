import './CreatureData.css'

import { Creature } from "../../types";
import { useState } from 'react';
import DeleteModal from './Modals/DeleteModal';
import UpdateModal from './Modals/UpdateModal';

//I had an error on the bestiary page until I added the interface here.
interface CreatureDataProps {
    creature: Creature
    deleteCreature: (id: number | string) => void
    toggleCreature: (id: number | string) => void
    updateCreature: (id: number, newDescription: string) => void
}

//The edit and delete buttons won't do anything right now, but having them now allows me to include them in the styling.
//The edit button is still not doing anything in week 2- once we learn how to manage user inputs,
//I will add a small popout for the description box to edit it. But for now the edit button is still static.
export default function CreatureData({ creature, deleteCreature, toggleCreature, updateCreature }: CreatureDataProps) {
    //When working on my modals, I had to add state first.
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

    //When working on state, I decided to add an expand property to the creatures.
    //I added a button to toggle this and styled it.
    //I then added a ternary to determine how much information to show based on the expanded property.
    //With the delete button, I forgot at first to add the parameters to the props,
    //and also formatted the onClick wrong. My top creature data panel was immediately deleted upon saving,
    //just because it had a delete button. Once I fixed it and reloaded I was able to delete only on clicking the button.
    return (
        <>
        {creature.expanded == true ? (
                    <div className="bestiary-entry">
                    <DeleteModal
                    handleClose={()=> setIsDeleteModalOpen(false)}
                    show={isDeleteModalOpen}
                    deleteCreature={()=> deleteCreature(creature.id)} />

                    <UpdateModal
                    handleClose={()=> setIsUpdateModalOpen(false)}
                    show={isUpdateModalOpen}
                    updateCreature={updateCreature}
                    creatureID={creature.id}
                    currentDescription={creature.description} />

                    <h2>{creature.name}
                        <button type='button' 
                        className='expand-button' 
                        onClick={()=> toggleCreature(creature.id)}>^</button>
                    </h2>
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
                                <button type="button" 
                                className="edit-button"
                                onClick={()=> setIsUpdateModalOpen(true)}>Edit</button>
                                <button type="button" 
                                className="delete-button" 
                                onClick={()=> setIsDeleteModalOpen(true)}>Delete</button>
                            </div>
                        </div>
                    </section>
                </div>
        ) : (
            <div className="bestiary-entry">
                <h2>{creature.name}
                    <button type='button' 
                    className='expand-button'
                    onClick={()=> toggleCreature(creature.id)}>V</button>
                </h2>
            </div>
        )}
        </>
    )
}
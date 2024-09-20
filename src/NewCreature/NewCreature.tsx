import { ChangeEvent, useState } from 'react'
import './NewCreature.css'
import { Creature } from '../types'

type NewCreatureProps = {
    addCreature: (userInput: Creature) => void
    creatures: Creature[]
}

//To add a creature to the bestiary, I naturally wanted to use a form.
//Although there's no real way to use the information and the inputs and button won't do anything,
//it is still a part of the page and I wanted to style everything together.
//I put the radio buttons inside the labels to make them easier to work with, and customized their appearance with CSS.
//I also styled the inputs' colors and used flex display to make the form appear on the left side when the screen is large enough.

//To make this a functional create form with React, I needed to add change events to the inputs,
//as well as a piece of state that is an object to pass into the edited addCreature function.
export default function NewCreature ({ addCreature, creatures }: NewCreatureProps) {
//I copied and pasted the handleChange function from the class materials, and decided to keep it called formValues.
//I considered changing the name to userInput but felt that formValues flowed better.
//I was able to create one new creature with the form, but the id that I could see in the dev tools stayed the same.
//After looking over the course materials again, I changed the method to find a new id, and got rid of the state version.
    const [formValues, setFormValues] = useState({
        name: "",
        location: "interior",
        defeat: "unlikely",
        description: "",
        id: creatures[creatures.length - 1].id + 1,
        expanded: true
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => 
        setFormValues({ 
            ...formValues, 
            [event.target.name]: event.target.value
        })

//For the submit button, I wanted it to both create a new creature and empty the form.
//Rather than trying to do that all in the TSX onclick, I made a function to handle the submission.
//This successfully clears the form after creating the new creature.
//However, it left the current radials checked while showing the default value in the component tool.
//This could result in a user error if I left it, so I needed a solution to adjust what was checked.
//I implemented it below after discussing with my instructor.
//For the id, I found incrementing the formValues id worked to keep it counting up without getting stuck.
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        addCreature(formValues)

        setFormValues({
            name: "",
            location: "interior",
            defeat: "unlikely",
            description: "",
            id: formValues.id + 1,
            expanded: true
        })
    }

//I wanted to have "interior" and "unlikely" checked by default, but it threw an error the first time I tried.
//On looking it up I found I should be using defaultChecked instead of simply checked.
//After a discussion with my instructor, I instead set each button to be checked based on the state.
//Now the check is simply visually showing the state change, and can be returned to the default on submit.
    return (
        <div id='new-creature-form'>
            <h2>Enter New Creature Data</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='creature-name-input' className='full-line-label'>Creature Name</label>
                <input type='text' 
                id='creature-name-input' 
                name='name' 
                value={formValues.name}
                onChange={handleChange} required></input>

                <fieldset>
                    <legend>Where did you encounter it?</legend>
                    <label>
                        <input type='radio' 
                        name='location' 
                        value='interior' 
                        checked={formValues.location==='interior'}
                        onChange={handleChange}></input>
                         interior</label>
                    <label>
                        <input type='radio' 
                        name='location' 
                        value='exterior' 
                        checked={formValues.location==='exterior'}
                        onChange={handleChange}></input>
                         exterior</label>
                </fieldset>

                <fieldset>
                    <legend>Is it possible to defeat it?</legend>
                    <label>
                        <input type='radio' 
                        name='defeat' 
                        value='possible' 
                        checked={formValues.defeat==='possible'}
                        onChange={handleChange}></input>
                         possible</label>
                    <label>
                        <input type='radio' 
                        name='defeat' 
                        value='unlikely' 
                        checked={formValues.defeat==='unlikely'}
                        onChange={handleChange}></input>
                         unlikely</label>
                    <label>
                        <input type='radio' 
                        name='defeat' 
                        value='impossible' 
                        checked={formValues.defeat==='impossible'}
                        onChange={handleChange}></input>
                         impossible</label>
                </fieldset>

                <label htmlFor='description-input' className='full-line-label'>Give a brief description of the creature.</label>
                <textarea id='description-input' 
                name='description' 
                value={formValues.description} 
                onChange={handleChange} 
                required></textarea>

                <button type='submit' id='submit-button'>Add</button>
            </form>
        </div>
    )
}
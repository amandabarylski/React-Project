import './NewCreature.css'

type NewCreatureProps = {
    addCreature: () => void
}

//To add a creature to the bestiary, I naturally wanted to use a form.
//Although there's no real way to use the information and the inputs and button won't do anything,
//it is still a part of the page and I wanted to style everything together.
//I put the radio buttons inside the labels to make them easier to work with, and customized their appearance with CSS.
//I also styled the inputs' colors and used flex display to make the form appear on the left side when the screen is large enough.
export default function NewCreature ({ addCreature }: NewCreatureProps) {
    return (
        <div id='new-creature-form'>
            <h2>Enter New Creature Data</h2>
            <form>
                <label htmlFor='creature-name-input' className='full-line-label'>Creature Name</label>
                <input type='text' id='creature-name-input' required></input>
                <fieldset>
                    <legend>Where did you encounter it?</legend>
                    <label><input type='radio' name='location' id='interior'></input> interior</label>
                    <label><input type='radio' name='location' id='exterior'></input> exterior</label>
                </fieldset>
                <fieldset>
                    <legend>Is it possible to defeat it?</legend>
                    <label><input type='radio' name='defeat' id='possible'></input> possible</label>
                    <label><input type='radio' name='defeat' id='unlikely'></input> unlikely</label>
                    <label><input type='radio' name='defeat' id='impossible'></input> impossible</label>
                </fieldset>
                <label htmlFor='description-input' className='full-line-label'>Give a brief description of the creature.</label>
                <textarea id='description-input' required></textarea>
                <button type='button' id='submit-button' onClick={addCreature}>Add</button>
            </form>
        </div>
    )
}
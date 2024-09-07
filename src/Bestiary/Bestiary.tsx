import './Bestiary.css'

import CreatureData from "./CreatureData/CreatureData"
import { Creature } from "../types"

//I followed what the instructor did and created a props interface.
//On looking it up I found using an interface for props is similar to declaring a type.
//I decided to keep it as an interface here as it was already working, though I want to look into the differences more later.
interface BestiaryProps {
    creatures: Creature[]
}
//I gave this div a name in order to help me style it, using flex to have it to the right of the form when the screen was large.
//When making the media queries, I added the link to quickly return to the top of the page where the form will be located.
export default function Bestiary({creatures}: BestiaryProps) {
    return (
        <div className='bestiary'>
            {creatures.map((creature: Creature) => (
                <CreatureData key={creature.id} creature={creature} />
            ))}
            <a href='#top'>Return to top</a>
        </div>
    )
}
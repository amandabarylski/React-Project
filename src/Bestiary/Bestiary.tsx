import './Bestiary.css'

import CreatureData from "./CreatureData/CreatureData"
import { Creature } from "../types"

//I followed what the instructor did and created a props interface.
interface BestiaryProps {
    creatures: Creature[]
}
//I gave this div a name in order to help me style it, using flex to have it to the right of the form when the screen was large.
export default function Bestiary({creatures}: BestiaryProps) {
    return (
        <div className='bestiary'>
            {creatures.map((creature: Creature) => (
                <CreatureData key={creature.id} creature={creature} />
            ))}
        </div>
    )
}
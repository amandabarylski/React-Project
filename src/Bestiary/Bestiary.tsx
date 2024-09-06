import './Bestiary.css'

import CreatureData from "./CreatureData/CreatureData"
import { Creature } from "../types"

//I followed what the instructor did and created a props interface.
interface BestiaryProps {
    creatures: Creature[]
}

export default function Bestiary({creatures}: BestiaryProps) {
    return (
        <div className='bestiary'>
            {creatures.map((creature: Creature) => (
                <CreatureData key={creature.id} creature={creature} />
            ))}
        </div>
    )
}
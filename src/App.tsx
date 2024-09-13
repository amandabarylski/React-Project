import { useState } from 'react'
import './App.css'
import Bestiary from './Bestiary/Bestiary'
import { exampleCreatures } from './Bestiary/ExampleCreatures'
import NewCreature from './NewCreature/NewCreature'

//Currently, I am pushing my exampleCreatures array to the Bestiary.
//Once we start using an API or similar that will be linked here instead.
function App() {
//I started week 2 by adding state, using my imported exampleCreatures array as the initial state.
  const [creatureList, setCreatureList] = useState(exampleCreatures)

//I followed the class materials in making these functions.

//The first function I wanted was one to add a new creature.
//While I would have liked to use the form for this, it is much more complicated in React and we aren't doing that this week.
//I still tie this function to the Add button in the NewCreature form.

//If I added two creatures, deleted one, and then added another one, I got an error
//telling me that two children had the same key. I decided to make another variable for the new ids to increment.
//I set it to 5 as the initial point as that would have been the first newly created creature's id
//when I was using creatureList.length + 1.
//However, I can't increment it when calling the function.

//I eventually decided to make newID a part of state that could change, though it is only needed for addCreature.
//When I was creating objects with json-server it randomly made unique ids, so when I link this code to a backend
//I will probably be able to delete this ID creator.

  const [newID, setNewID] = useState(5)

  const addCreature = () => {

    const newCreature = {
      name: "Bracken",
      location: "interior",
      defeat: "unlikely",
      description: "A stealth predator. Look at it to scare it away.",
      id: newID,
      expanded: true
    }

    setNewID(newID + 1)

    setCreatureList([...creatureList, newCreature])
  }

//Next on the list was the delete function.
//As in the example in the class materials, I used the filter function to copy the array without the deleted data.
  const deleteCreature = (idToDelete: number | string) => {
    setCreatureList(creatureList.filter(creature => creature.id !== idToDelete))
  }

//Finally, the update function for this week will be a toggle.
//It will switch the expanded property of a creature between true and false,
//which will show and hide most of the data.
//I couldn't directly use !expanded here, so I made some adjustments.
  const toggleCreature = (idToToggle: number | string) => {
    setCreatureList(creatureList => creatureList.map(creature => (
      creature.id !== idToToggle ? creature : {
        ...creature,
        expanded: !creature.expanded
      }
    )))
  }

  return (
    <div id='flex-container'>
      <NewCreature addCreature={addCreature} />
      <Bestiary 
      creatures={creatureList} 
      deleteCreature={deleteCreature}
      toggleCreature={toggleCreature} />
    </div>
  )
}

export default App

import './App.css'
import Bestiary from './Bestiary/Bestiary'
import { exampleCreatures } from './Bestiary/ExampleCreatures'
import NewCreature from './NewCreature/NewCreature'

//Currently, I am pushing my exampleCreatures array to the Bestiary.
//Once we start using an API or similar that will be linked here instead.
function App() {

  return (
    <div id='flex-container'>
      <NewCreature />
      <Bestiary creatures={exampleCreatures} />
    </div>
  )
}

export default App

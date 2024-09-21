import { FC, useState } from 'react'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './UpdateModal.css'
// import { Modal, ModalBody, ModalTitle } from 'react-bootstrap'

type UpdateModalProps = {
    handleClose: () => void,
    show: boolean,
    updateCreature: (id: number, newDescription: string) => void,
    creatureID: number,
    currentDescription: string
}
//I tried with Bootstrap and removed it, instead manually styling dialog tags.
//In order to close the modal on save, I added handleClose into the handleSubmit function.
//The edit uses state to track the user input, but only calls updateCreature on submit.
//The cancel doesn't delete the newly typed input, just doesn't add it to the displayed information.
const UpdateModal: FC<UpdateModalProps> = ({ handleClose, show, updateCreature, creatureID, currentDescription }) => {

    const [newDescription, setNewDescription] = useState(currentDescription)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {   
        event.preventDefault()

        updateCreature(creatureID, newDescription)

        handleClose()
    }

    return (
        <dialog style={{display: show ? 'block' : 'none'}}>
            <div className='dialog-interior'>
            <h2>Edit Creature Data</h2>
            <form method='dialog' onSubmit={handleSubmit}>
                <textarea 
                value={newDescription} 
                name='new-description' 
                onChange={e => setNewDescription(e.target.value)}
                autoFocus></textarea>
                <div className='dialog-buttons'>
                <button type='button' className='cancel-button' onClick={handleClose}>Cancel</button>
                <button type='submit' className='save-button'>Save</button>
                </div>
            </form>
            </div>
        </dialog>
    )
}

export default UpdateModal
// import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './DeleteModal.css'
import { FC } from 'react'

type DeleteModalProps = {
    handleClose: () => void,
    show: boolean,
    deleteCreature: () => void
}

//Since I wasn't using Bootstrap it ended up being more complicated to implement the modals than I thought.
//I had to download Bootstrap, but then was having trouble making them be in front of the page instead of hiding it.
//In the end I removed Bootstrap, after my mentor showed me how to manage the display ternary.

const DeleteModal: FC<DeleteModalProps> = ({ handleClose, show, deleteCreature }) => {

    return (
        <dialog style={{display: show ? 'block' : 'none'}}>
            <div className='dialog-interior'>
            <h2>Delete Creature Data</h2>
            <p className='are-you-sure'>Are you sure you want to delete this creature from the bestiary?</p>
            <div className='dialog-buttons'>
                <button type='button' className='cancel-button' onClick={handleClose}>Cancel</button>
                <button type='button' className='delete-button' onClick={deleteCreature}>Delete</button>
            </div>
            </div>
        </dialog>
    )
}

export default DeleteModal
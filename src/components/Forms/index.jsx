import { useEffect, useState } from "react"
import {
  Modal,
  Button,
  Form
} from "react-bootstrap"

const AddModal = ({
  show,
  handleAddModal,
  handleSubmitAdd,
  handleDeleteModal,
  form
}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [level, setLevel] = useState(1)

  const hide = () => {
    setUsername('')
    setEmail('')
    setExperience('')
    setLevel(1)
    handleAddModal()
  }

  useEffect(() => {
    setUsername(form.username)
    setEmail(form.email)
    setExperience(form.experience)
    setLevel(form.level)
  }, [show])

  return(
    <>
      <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Form {username !== '' ? 'Edit' : 'Tambah'} Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" value={experience} placeholder="Enter experience" onChange={(e) => setExperience(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Level</Form.Label>
                <Form.Control type="number" value={level} placeholder="Enter level" onChange={(e) => setLevel(e.target.value)}/>
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitAdd(username, email, experience, level, form.index)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const EditModal = () => {

}

const DeleteModal = ({
  id,
  show,
  handleDeleteModal,
  handleSubmitDelete
}) => {
  return(
    <>
      <Modal show={show} onHide={handleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            Are you sure to delete this?
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleSubmitDelete()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export {
  AddModal,
  EditModal,
  DeleteModal
}
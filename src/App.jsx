import logo from './logo.svg'
import './App.css'
import MyNavbar from './components/Navbar'
import {
  AddModal,
  DeleteModal,
  EditModal
} from './components/Forms'
import { useState } from 'react'



function App() {
  const [showAddModal, setAddShowModal] = useState(false)
  const [showDeleteModal,setDeleteShowModal] = useState(false)
  const [indexDeleted, setIndex] = useState(null)
  const [form, setForm] = useState({
    index: null,
    username: '',
    email: '',
    experience: '',
    level: 0
  })

  const [data, setData] = useState([
    {
      username: 'Pabo Bernando',
      email: 'pabo@gmail.com',
      experience: 'Super User',
      level: 90
    },
    {
      username: 'Bernando',
      email: 'bernando@gmail.com',
      experience: 'user',
      level: 99
    },
  ])

  const {id, setId} = useState(null)

  const handleDeleteModal = (index) => {
    setIndex(index)
    setDeleteShowModal (!showDeleteModal)
  }

  const handleEdit = (index) => {
    setForm({ ...data[index], index })
    setAddShowModal(!showAddModal)
  }
  

  const handleAddModal = () => {
    setForm({
      index: null,
      username: '',
      email: '',
      experience: '',
      level: 0
    })
    setAddShowModal(!showAddModal)
  }

  const handleSubmitAdd = (username, email, experience, level, index) => {
    let rawData = data
    let payload = {
      username,
      email,
      experience,
      level
    }

    if (index !== null) {
     rawData[index] = payload 
    } else {
      rawData.push(payload)  
    }

    setData(rawData)
    setAddShowModal(!showAddModal)
  }

  const handleSubmitDelete = (index) => {
    console.log(index)
    const temp = data.splice(index,1)
    setData (temp)
    setDeleteShowModal (false)
  }
  


  return (
    <>
    <MyNavbar/>
    <AddModal
      show={showAddModal}
      handleAddModal={handleAddModal}
      handleSubmitAdd={handleSubmitAdd}
      form={form}
    />

    <DeleteModal
      index={indexDeleted}
      show={showDeleteModal}
      handleDeleteModal={handleDeleteModal}
      handleSubmitDelete={handleSubmitDelete}
    />
    <div className="container">
        <div className="row mt-3">
          <div className="col-6 text-start">
            <button type="button" className="btn btn-primary" onClick={handleAddModal}>Tambah Data </button>
          </div>
        </div>

        

        {
          data?.map((data, index) => { 
            return(
                <div className="row text-center mt-5 border border-primary text-white" key="{data.email}">
                  <p>username: {data.username}</p>
                  <p>email: {data.email}</p>
                  <p>experience: {data.experience}</p>
                  <p>level: {data.level}</p>
                  <div className="col text-center">
                    <p>
                    <button type="button" className="btn btn-primary rounded" onClick={() => handleEdit(index)}>Edit Data</button>
                    </p>
                    <p>
                    <button type="button" className="btn btn-danger rounded" onClick={() => handleDeleteModal(index)}>Delete Data</button>
                    </p>
                  </div>
                </div>
            )
          })
        }
          <div className="col text-center mt-5 text-white">
            {/* <h1>Pabo Bernando</h1> */}
            <img src={logo} className="reactlogo"/>
          </div>
      </div>

      
    </>
  );
}

export default App;

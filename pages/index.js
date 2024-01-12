import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Modal from '../components/Modal/Modal'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import DateComponent from '../components/DateComponent/DateComponent'
import { useState } from 'react'
import TailwindButton from '../components/TailwindButton/TailwindButton'

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  // Handler for opening the registration form modal
  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  // Handler for closing the registration form modal
  const handleCloseForm = () => {
    setIsFormOpen(false)
  }
  return (
    <div className={styles.container}>
      Hello
      <Modal isOpen={isFormOpen} onClose={handleCloseForm}>
        <RegistrationForm onClose={handleCloseForm} />
      </Modal>
      <TailwindButton size="small" onClick={handleOpenForm}>
        Open Form
      </TailwindButton>
      <DateComponent />
    </div>
  )
}

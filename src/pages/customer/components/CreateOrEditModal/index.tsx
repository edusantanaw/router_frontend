import Modal from '../../../../shared/components/modal/modal'

interface Props {
    handleCloseModal: () => void
}

const CreateOrEditModal = ({handleCloseModal}: Props) => {
  return (
    <Modal handleClose={handleCloseModal}>CreateOrEditModal</Modal>
  )
}

export default CreateOrEditModal
import Modal from './components/Modal'
import Customers from './components/Customers'
import Cakes from './components/Cakes'
const App = () => {
  return (
    <>
      <button type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#customersModal">
        Launch Customer Component
      </button>

      <button type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#cakesModal">
        Launch Cakes Component
      </button>

      <Modal modaltitle="My Customers Component" modalid="customersModal">
           <Customers/>
      </Modal>

      <Modal modaltitle="My Cakes Component" modalid="cakesModal">
           <Cakes/>
      </Modal>
    </>

  );
}

export default App

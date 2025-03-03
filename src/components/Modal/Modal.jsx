import { useEffect } from 'react';
import ReactModal from 'react-modal';
import './Modal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: '#141414',
    borderRadius: '16px',
    border: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(2px)',
  }
};

export function Modal(props) {

  useEffect(() => {
    ReactModal.setAppElement('#modal')
  }, [])


  return (
    <div id='modal'>
      <ReactModal
        isOpen={props.modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className='modalTittle'>
          <h1 className='addTransactionText'>Adicionar Transação</h1>
          <p className='tittleDescription'>Insira as informações abaixo</p>
        </div>
        <div className='inputsDiv'>
          <label className='itemTittle' htmlFor="title">Título</label>
          <input type="text" name="title" className="inputs" placeholder='Título' autoComplete='off' />
        </div>
        <div className='inputsDiv'>
          <label className='itemTittle ' htmlFor="value">Valor</label>
          <input type="number" name="value" className="inputs" placeholder='R$ 0.000.00' autoComplete='off' />
        </div>
        <div className='inputsDiv'>
          <label className='itemTittle' htmlFor="transactionType">Tipo da Transação</label>
          <select name="transactionType" className="inputs" defaultValue="">
            <option value="" disabled >Selecione</option>
            <option value="1">Depósito</option>
            <option value="2">Gasto</option>
            <option value="3">Investimento</option>
          </select>
        </div>
        <div className='inputsDiv'>
          <label className='itemTittle' htmlFor="paymentMethod">Método de pagamento</label>
          <select name="paymentMethod" className="inputs" defaultValue="">
            <option value="" disabled >Selecione</option>
            <option value="1">Cartão de Crédito</option>
            <option value="2">Cartão de Débito</option>
            <option value="3">Dinheiro</option>
          </select>
        </div>
        <div className="inputsDiv">
          <label className='itemTittle' htmlFor="date">Data</label>
          <input type="date" name="date" className="inputs" />
        </div>
        <div className="modalButtons">
          <div style={{ width: '100%' }}>
            <button className='modalButton' style={{
              backgroundColor: '#1f1f21',
              width: '100%'
            }} onClick={function () {
              props.closeModal(false)
            }}>Cancelar</button>
          </div>
          <div style={{ width: '100%' }}>
            <button
              className="modalButton"
              style={{
                backgroundColor: 'rgb(85, 176, 46)',
                color: 'rgb(255, 255, 255)',
                width: '100%'
              }}
            >
              Adicionar
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  )
}
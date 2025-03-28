import { useContext, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { formatNumbers } from '../../Utils/formatNumbers';
import TransactionContext from '../../contexts/transactionContext';
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
  const transactionContext = useContext(TransactionContext)
  const [formData, setFormData] = useState({
    title: "",
    value: "",
    transactionType: "",
    paymentMethod: "",
    date: "",
  })

  useEffect(() => {
    ReactModal.setAppElement('#modal')
  }, [])

  function handleOnInputChange(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name
    if (inputName == "value") {
      const formattedNumber = formatNumbers(inputValue);
      setFormData({
        ...formData, [inputName]: formattedNumber
      })
    } else {
      setFormData({
        ...formData, [inputName]: inputValue
      })
    }
  }

  function setData() {
    transactionContext.addTransaction(formData)
  }

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
          <input type="text" name="title" className="inputs" placeholder='Título' autoComplete='off' value={formData.title} onChange={handleOnInputChange} />
        </div>
        <div className='inputsDiv'>
          <label className='itemTittle ' htmlFor="value">Valor</label>
          <input type="text" name="value" className="inputs" placeholder='R$ 0.000.00' autoComplete='off' onChange={handleOnInputChange} value={formData.value} />
        </div>
        <div className='inputsDiv'>
          <label className='itemTittle' htmlFor="transactionType">Tipo da Transação</label>
          <select name="transactionType" className="inputs" value={formData.transaction_type} onChange={handleOnInputChange}>
            <option value="" disabled >Selecione</option>
            <option value="1">Entrada</option>
            <option value="2">Saída</option>
            <option value="3">Investimento</option>
          </select>
        </div>
        <div className='inputsDiv'>
          <label className='itemTittle' htmlFor="paymentMethod">Método de pagamento</label>
          <select name="paymentMethod" className="inputs" value={formData.paymentMethod} onChange={handleOnInputChange}>
            <option value="" disabled >Selecione</option>
            <option value="1">Cartão de Crédito</option>
            <option value="2">Cartão de Débito</option>
            <option value="3">Dinheiro</option>
          </select>
        </div>
        <div className="inputsDiv">
          <label className='itemTittle' htmlFor="date">Data</label>
          <input type="date" name="date" className="inputs" value={formData.date} onChange={handleOnInputChange} />
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
              onClick={function () {
                setData()
                props.closeModal(false)
              }}
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
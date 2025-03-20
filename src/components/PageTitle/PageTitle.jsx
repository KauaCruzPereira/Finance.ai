import { useContext } from 'react';
import './PageTitle.css'
import TransactionContext from '../../contexts/transactionContext';
export function PageTitle(){

  const { setSelectedMonth } = useContext(TransactionContext);
  const currentMonth = new Date
  
  
  function handleSelectedMonth(event){
     const monthValue = event.target.value
     setSelectedMonth(monthValue)
  }
  
    return(
        <div className="header">
        <div className="leftSideHeader">
          <h1 className="pagetitle">Dashboard</h1>
        </div>
        <div className="rightSideHeader">
          <select className="chooseMonths" defaultValue={currentMonth.getMonth() + 1} onChange={handleSelectedMonth}>
            <option value="" disabled >Selecione um mês</option>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
        </div>
      </div>
    )
}
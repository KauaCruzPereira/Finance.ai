import React, { useEffect, useState } from "react";
import { baseUrl } from "../Utils/api";

const TransactionContext = React.createContext({
  transactions: [],
  addTransaction: Function
})

export const TransactionProvider = function ({ children }) {

  const currentMonth = new Date
  const [transactions, setTransactions] = useState([])
  const [selectedMonth, setSelectedMonth] = useState(currentMonth.getMonth() + 1)

  useEffect(() => {
    const token = localStorage.getItem('API_TOKEN')
    fetch(`${baseUrl}/transaction`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(async (res) => {
      const json = await res.json()
      setTransactions(json)
    })
  }, [])

  async function addTransaction(transaction) {
    const token = await localStorage.getItem('API_TOKEN')
    const res = await fetch(`${baseUrl}/transaction`, {
      method: "POST",
      body: JSON.stringify(transaction),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    if (res.status == 201) {
      const json = await res.json()
      setTransactions([...transactions, json])
    }
  }

  function sumTransactionsByType(type) {
    let transactionValue = 0
    getTransactionsByMonth(selectedMonth).forEach(usuario => {
      if (usuario.transaction_type == type) {
        transactionValue = Number(usuario.value.toString().replace(/\D/g, '')) + transactionValue
      }
    })
    return transactionValue
  }


  function getSumRevenueValue() {
    return sumTransactionsByType(1)
  }

  function getSumExpensesValue() {
    return sumTransactionsByType(2)
  }

  function getSumInvestedValue() {
    return sumTransactionsByType(3)
  }

  function getSumTotalValue() {
    let totalValue = getSumRevenueValue() - getSumExpensesValue() - getSumInvestedValue()
    return totalValue
  }

  function getTransactionsByMonth(month) {
    console.log(transactions)
    return transactions.filter((transaction) => {
      const dateObject = new Date(transaction.date);
      const currentDate = new Date();
      console.log(dateObject)
      return dateObject.getMonth() + 1 === Number(month) && dateObject.getFullYear() === currentDate.getFullYear();
    });
  }

  function getMoneyColorByType(type) {
		if (type == 1) {
			return "earnedMoney"
		} else if (type == 2) {
			return "spentMoney"
		} else {
			return "investedMoney"
		}
  }

  return (
    <TransactionContext.Provider value={{
      transactions,
      selectedMonth,
      addTransaction,
      getSumTotalValue,
      getSumRevenueValue,
      getSumExpensesValue,
      getSumInvestedValue,
      getTransactionsByMonth,
      setSelectedMonth,
      getMoneyColorByType
    }}>
      {children}
    </TransactionContext.Provider>
  )
}
export default TransactionContext
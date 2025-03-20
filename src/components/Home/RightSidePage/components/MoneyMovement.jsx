import { useContext } from "react";
import { TransactionListItemsDisplay } from "./components/TransactionListItemDisplay";
import TransactionContext from "../../../../contexts/transactionContext";
import './MoneyMovement.css'

export function MoneyMovement() {
	const transactionContext = useContext(TransactionContext)

	const filteredTransactions = transactionContext.getTransactionsByMonth(Number(transactionContext.selectedMonth));

	return (
		<div className="itemsDisplay">
			{
				filteredTransactions.map((transaction) => {
					return (<TransactionListItemsDisplay key={transaction.id} transaction={transaction} />)
				})
			}
		</div>
	)
}
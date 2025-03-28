import { useContext } from "react";
import { PiggyBankIcon } from "../../../../../Assets/components/PiggyBank/PiggyBank";
import { TrendingDownIcon } from "../../../../../Assets/components/TrendingDown/TrendingDown";
import { TrendingUpIcon } from "../../../../../Assets/components/TrendingUp/TrendingUp";
import { formatDate } from "../../../../../Utils/formatDate";
import { formatNumbers } from "../../../../../Utils/formatNumbers";
import TransactionContext from "../../../../../contexts/transactionContext";
import '../../../../../Utils/transactionsMoneyColor.css'

export function TransactionListItemsDisplay(props) {

	const transactionContext = useContext(TransactionContext)

	function getTransactionIcon() {
		if (props.transaction.transaction_type == 1) {
			return <TrendingUpIcon />
		} else if (props.transaction.transaction_type == 2) {
			return <TrendingDownIcon />
		} else {
			console.log(props.transaction)
			return <PiggyBankIcon />
		}
	}

	function showMoneyStatus() {
		return props.transaction.transaction_type == 1 ? "+" : "-"
	}

	return (
		< div className='moneyMovement' >
			<div className='transactionType'>
				{getTransactionIcon()}
			</div>
			<div>
				<div className="itemTittle"><p>{props.transaction.title}</p></div>
				<div className="itemDate"><p>{formatDate(props.transaction.date)}</p></div>
			</div>
			<div className={`${transactionContext.getMoneyColorByType(props.transaction.transaction_type)} rightSideTextDisplay`}>
				<p>{showMoneyStatus()}{formatNumbers(props.transaction.value)}</p></div>
		</div >
	)
}
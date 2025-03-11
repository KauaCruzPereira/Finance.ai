import { PiggyBankIcon } from "../../../../../Assets/components/PiggyBank/PiggyBank";
import { TrendingDownIcon } from "../../../../../Assets/components/TrendingDown/TrendingDown";
import { TrendingUpIcon } from "../../../../../Assets/components/TrendingUp/TrendingUp";
import { formatNumbers } from "../../../../../Utils/formatNumbers";

export function TransactionListItemsDisplay(props) {

	function getTransactionIcon() {
		if (props.transaction.transactionType == 1) {
			return <TrendingUpIcon />
		} else if (props.transaction.transactionType == 2) {
			return <TrendingDownIcon />
		} else {
			return <PiggyBankIcon />
		}
	}

	function getMoneyColor() {
		if (props.transaction.transactionType == 1) {
			return "earnedMoney"
		} else if (props.transaction.transactionType == 2) {
			return "spentMoney"
		} else {
			return "investedMoney"
		}
	}

	function showMoneyStatus(){
		return props.transaction.transactionType == 1 ? "+" : "-"
	}

	return (
		< div className='moneyMovement' >
			<div className='transactionType'>
				{getTransactionIcon()}
			</div>
			<div>
				<div className="itemTittle"><p>{props.transaction.title}</p></div>
				<div className="itemDate"><p>{props.transaction.date}</p></div>
			</div>
			<div className={getMoneyColor()}><p>{showMoneyStatus()}{formatNumbers(props.transaction.value)}</p></div>
		</div >
	)
}
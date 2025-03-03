import { PiggyBankIcon } from "../../../../../Assets/components/PiggyBank/PiggyBank";
import { TrendingDownIcon } from "../../../../../Assets/components/TrendingDown/TrendingDown";
import { TrendingUpIcon } from "../../../../../Assets/components/TrendingUp/TrendingUp";
export function TransactionListItemsDisplay(props) {
    function getTransactionIcon() {
        if (props.transaction.type == 1) {
            return <TrendingUpIcon />
        } else if (props.transaction.type == 2) {
            return <TrendingDownIcon />
        } else {
            return <PiggyBankIcon />
        }
    }

    function getMoneyColor(){
        if (props.transaction.type == 1) {
            return "earnedMoney"
        } else if (props.transaction.type == 2) {
            return "spentMoney"
        } else {
            return "investedMoney"
        }
    }

    return (
        < div className='moneyMovement' >
            <div className='transactionType'>
                {getTransactionIcon()}
            </div>
            <div>
                <div className="itemTittle"><p>{props.transaction.tittle}</p></div>
                <div className="itemDate"><p>{props.transaction.date}</p></div>
            </div>
            <div className={getMoneyColor()}><p>{props.transaction.money}</p></div>
        </div >
    )
}
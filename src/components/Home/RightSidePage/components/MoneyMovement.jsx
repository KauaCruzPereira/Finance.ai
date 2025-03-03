import { TransactionListItemsDisplay } from "./components/TransactionListItemDisplay";
import './MoneyMovement.css'

export function MoneyMovement() {
    return (
        <div className="itemsDisplay">
            <TransactionListItemsDisplay transaction={{ type: '1', tittle: 'Salário', date: '25, Nov, 2024', money: '+R$ 2.412' }} />
            <TransactionListItemsDisplay transaction={{ type: '2', tittle: 'Despesas', date: '19, Ago, 2018', money: '-R$ 568' }} />
            <TransactionListItemsDisplay transaction={{ type: '3', tittle: 'Despesas', date: '19, Ago, 2018', money: '-R$ 568' }} />
        </div>
    )
}
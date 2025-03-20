import './LeftSidePage.css'
import '../../../Utils/transactionsMoneyColor.css'
import { WalletIcon } from '../../../Assets/components/WalletIcon/WalletIcon'
import { PiggyBankIcon } from '../../../Assets/components/PiggyBank/PiggyBank'
import { TrendingUpIcon } from '../../../Assets/components/TrendingUp/TrendingUp'
import { TrendingDownIcon } from '../../../Assets/components/TrendingDown/TrendingDown'
import { Modal } from '../../Modal/Modal'
import { useContext, useState } from 'react'
import TransactionContext from '../../../contexts/transactionContext'
import { formatNumbers } from '../../../Utils/formatNumbers'

export function LeftSidePage() {
	const transactionContext = useContext(TransactionContext)
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [isDisplayingTotalValue, setIsDisplayingTotalValue] = useState(true)

	function getTotalValue() {
		if (isDisplayingTotalValue == false) {
			return '• • • • • •'
		} else {
			return formatNumbers(transactionContext.getSumTotalValue())
		}
	}

	return (
		<div className="leftSidePage">
			<div className="moneybalance">
				<div className="leftside">
					<div className='walletTextStyle'><WalletIcon /><p>Saldo</p></div>
					<div className={`accountbalance ${transactionContext.getSumTotalValue() < 0 ? "spentMoney" : "investedMoney"}`}>
						{getTotalValue()}
						<img
							src="images/eye.svg"
							alt="Esconder/Mostrar"
							onClick={() => setIsDisplayingTotalValue(!isDisplayingTotalValue)}
							style={{ cursor: 'pointer' }}
						/>
					</div>
				</div>
				<div className="addtransaction">
					<button
						className="transactionbutton"
						onClick={function () {
							setModalIsOpen(true)
						}}
						id="transactionButton"
					>
						Adicionar Transação<img
							src="images/arrow-down-up.svg"
							alt="SetaCimaEBaixo"
							id="transactionbutton"
						/>
					</button>
				</div>
			</div>
			<div style={{ display: 'flex', gap: '24px' }}>
				<div className="investments">
					<div className='iconsTextStyle'><PiggyBankIcon /><p>Investido</p></div>
					<div className={`${transactionContext.getMoneyColorByType(3)} LeftSideTextDisplay`}>{formatNumbers(transactionContext.getSumInvestedValue())}</div>
				</div>
				<div className="inflowoutflow">
					<div className='iconsTextStyle'><TrendingUpIcon /><p>Entrada</p></div>
					<div className={`${transactionContext.getMoneyColorByType(1)} LeftSideTextDisplay`}>{formatNumbers(transactionContext.getSumRevenueValue())}</div>
				</div>
				<div className="inflowoutflow">
					<div className='iconsTextStyle'><TrendingDownIcon /><p>Saída</p></div>
					<div className={`${transactionContext.getMoneyColorByType(2)} LeftSideTextDisplay`}>{formatNumbers(transactionContext.getSumExpensesValue())}</div>
				</div>
			</div>
			<Modal modalIsOpen={modalIsOpen} closeModal={setModalIsOpen} />
		</div>
	)
}
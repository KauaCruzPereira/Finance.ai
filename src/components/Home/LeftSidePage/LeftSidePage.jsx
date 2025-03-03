import './LeftSidePage.css'
import { WalletIcon } from '../../../Assets/components/WalletIcon/WalletIcon'
import { PiggyBankIcon } from '../../../Assets/components/PiggyBank/PiggyBank'
import { TrendingUpIcon } from '../../../Assets/components/TrendingUp/TrendingUp'
import { TrendingDownIcon } from '../../../Assets/components/TrendingDown/TrendingDown'
import { Modal } from '../../Modal/Modal'
import { useState } from 'react'

export function LeftSidePage() {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	return (
		<div className="leftSidePage">
			<div className="moneybalance">
				<div className="leftside">
					<div className='walletTextStyle'><WalletIcon /><p>Saldo</p></div>
					<div className="accountbalance">
						<p id="moneyBalance">R$ 3.800</p>
						<img
							src="images/eye.svg"
							alt="Esconder/Mostrar" />
					</div>
				</div>
				<div className="addtransaction">
					<button
						className="transactionbutton"
						onClick={function(){
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
					<div className="financialvalue"><p id="investments">R$ 2.908</p></div>
				</div>
				<div className="inflowoutflow">
					<div className='iconsTextStyle'><TrendingUpIcon /><p>Receita</p></div>
					<div className="financialvalue"><p id="revenue">R$ 8.950</p></div>
				</div>
				<div className="inflowoutflow">
					<div className='iconsTextStyle'><TrendingDownIcon /><p>Despesas</p></div>
					<div className="financialvalue"><p id="expenses">R$ 2.300</p></div>
				</div>
			</div>
			<Modal modalIsOpen={modalIsOpen} closeModal={setModalIsOpen}/>
		</div>
	)
}
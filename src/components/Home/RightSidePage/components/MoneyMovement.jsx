import { useEffect, useState } from "react";
import { TransactionListItemsDisplay } from "./components/TransactionListItemDisplay";
import { BASE_URL } from "../../../../Utils/api";
import './MoneyMovement.css'

export function MoneyMovement() {

	const [data, setData] = useState([])
	useEffect(() => {
		fetch(BASE_URL).then(async (res) => {
			const json = await res.json()
			setData(json)
		})
	}, []);

	return (
		<div className="itemsDisplay">
			{
				data.map((transaction) => {
					return <TransactionListItemsDisplay key={transaction.id} transaction={transaction} />
				
				})
			}
		</div>
	)
}
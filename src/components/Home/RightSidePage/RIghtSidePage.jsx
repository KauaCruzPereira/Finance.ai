import { TrendingDownIcon } from '../../../Assets/components/TrendingDown/TrendingDown'
import './RightSidePage.css'

export function RightSidePage() {
    return (
        <div className="transactionsDisplay" id="transactionsDisplay">
            <div className="transactionsInterior">
                <div className="transactionsName"><p>Transações</p></div>
                <div className="showAll">
                    <button className="showAllInterior">Ver Mais</button>
                </div>
            </div>
            <div className="hrDisplay"></div>
        </div>
    )
}
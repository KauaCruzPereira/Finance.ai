import './index.css'
import { NavBar } from "./components/NavBar/NavBar"
import { PageTitle } from './components/PageTitle/PageTitle'
import { LeftSidePage } from './components/Home/LeftSidePage/LeftSidePage'
import { RightSidePage } from './components/Home/RightSidePage/RIghtSidePage'
import { TransactionProvider } from './contexts/transactionContext'

function App() {

  return (
    <TransactionProvider>
      <NavBar />
      <PageTitle />
      <div className='pageContent'>
        <LeftSidePage />
        <RightSidePage />
      </div>
      
    </TransactionProvider>
  )
}

export default App

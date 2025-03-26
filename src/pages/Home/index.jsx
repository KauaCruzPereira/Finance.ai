import { LeftSidePage } from "../../components/Home/LeftSidePage/LeftSidePage";
import { RightSidePage } from "../../components/Home/RightSidePage/RIghtSidePage";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { TransactionProvider } from "../../contexts/transactionContext";

function HomePage() {

  return (
    <TransactionProvider>
      <PageTitle />
      <div className='pageContent'>
        <LeftSidePage />
        <RightSidePage />
      </div>

    </TransactionProvider>
  )
}
export default HomePage
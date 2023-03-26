import { useSelector } from 'react-redux'
import { RootState } from "../../store";

const HistoryPage = () => {

  const history = useSelector<RootState, string[]> (state => state.products.histiryList)
  
  return (
    <div className='history-block'>
      <h1>История</h1>
      {history.map(item=> <ol key={item}>{item}</ol>)}
    </div>
  )
}

export default HistoryPage

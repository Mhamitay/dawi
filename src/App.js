import './App.css';
import Card from './components/card/card'
import data from './data/data'
function App() {

  return (
    data.map((c)=>{
     return <div className='categories-container'>
       <Card title={c.title} descriptioin={c.descriptioin} />
    </div>
    })
    )
  }

export default App;

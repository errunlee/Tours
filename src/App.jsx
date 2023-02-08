import './App.css'
import Tours from './components/Tours'
export default function App() {
  return (
    <main>
      <div className='d-flex justify-content-center align-items-center flex-column mt-4 mb-5'>
      <h1>Our Tours</h1>
      <hr></hr>
        </div>
      <div className='container'>
        <div className='mycontainer'>
      <Tours/>
        </div>
      </div>
    </main>
  )
}

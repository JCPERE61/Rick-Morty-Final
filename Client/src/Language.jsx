import Form from './components/Form/Form';
import './lang.css'

export default function Language({handleEs,handleEn,login,i}) {

  return (
    <div className='landing'>
        <div className='landLang'>
            <button className='handButton' onClick={handleEs}>Español</button>
            <img src="./images/Episode Guest.jpg" alt="" className='imgsize'/> 
            <button className='handButton' onClick={handleEn}>English</button>
        </div> 

        <div className='landForm'>
            <Form login={login} i={i}/>      
        </div>
    
        
    </div>    
  )
}

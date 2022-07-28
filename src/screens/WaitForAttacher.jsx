import './index.css'

export function WaitForAttacher({info}){
  
  return(
    <div className='section' style={{display: 'flex', flexDirection: 'column'}}>
      <h5>Waiting For Attacher</h5>
      <textarea className='textarea' value={info}/>
    </div>
  )
}
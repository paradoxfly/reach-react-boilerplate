import { useState } from 'react'
import './index.css'

export function PasteContractInfo({attach}){
  const [ info, setInfo ] = useState('')

  return(
    <div className='section' style={{display: 'flex', flexDirection: 'column'}}>
      <h5>Paste Contract Info</h5>
      <textarea className='textarea' onChange={e => setInfo(e.target.value)}/>
      <button className='button' onClick={() => attach(info)}>Attach To Contract</button>
    </div>
  )
}
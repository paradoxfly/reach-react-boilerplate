import { useState } from 'react'
import './index.css'

export function ConnectAccount({connect}){
  const [ key, setKey ] = useState('')
  return(
    <div className='section'>
      <button className='button' onClick={() => connect(key)}>Connect With MyAlgoConnect</button>
      <hr/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <textarea className='textarea' onChange={ e => setKey(e.target.value.trim()) }/>
        <button className='button' onClick={() => connect(key, true)}>Connect With Mnemonic Key</button>
      </div>
    </div>
  )
}
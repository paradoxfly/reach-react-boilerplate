import './index.css'

export function SelectRole({deploy, attach}){
  return(
    <div className='section'>
      <button className='button' onClick={() => deploy()}>Deploy Contract</button>
      <hr />
      <button className='button' onClick={() => attach()}>Attach to existing contract</button>
    </div>
  )
}
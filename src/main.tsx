import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from './components/ui/button'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <h1 className='text-xl text-green-500'>Hello</h1> */}
    <Button variant="outline">Click Me</Button>
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserContext } from './Contexts/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <UserContext>
    <App />
  </UserContext>
)

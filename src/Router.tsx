import { Route, Routes } from 'react-router-dom'
import { Events } from './pages/Events'
import { Subscriber } from './pages/Subscriber'

export function Router(){
    return(
      <Routes>
        <Route path='/' element={<Subscriber />} />
        <Route path='/event' element={<Events />}/>
        <Route path='/event/lesson/:slug' element={<Events />}/>
        
      </Routes>
    )
}
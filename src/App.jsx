import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import TaskPage from './pages/taskPage'; "./pages";
import TaskFormPage from './pages/TaskFormPage';
import Navigation from './components/Navigation';
export default function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
    <Navigation/>
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/task-create' element={<TaskFormPage />} />
        <Route path='/task/edit/:id' element={<TaskFormPage />} />

      </Routes>
      <Toaster/>
    </div>
    </BrowserRouter>
  )
}

import './App.scss'

//imports
import {Route, Routes}  from 'react-router-dom'


//components
import CreatePage from './components/CreatePage/CreatePage.component'
import Editor from './components/Editor/Editor.component'


function App() {

  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreatePage />}/>
        <Route path='/editor' element={<Editor />}/>
      </Routes>
    </div>
  )
}

export default App

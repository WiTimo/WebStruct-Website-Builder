import './App.scss'

//imports
import {Route, Routes}  from 'react-router-dom'


//components
import Editor from './components/Editor/Editor.component'


function App() {

  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
  
  return (
    <div className="App">
      <Editor />
    </div>
  )
}

export default App

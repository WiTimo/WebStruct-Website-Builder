import './App.scss'

//components
import Editor from './components/Editor/Editor.component';
  

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

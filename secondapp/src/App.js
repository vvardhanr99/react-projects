import './App.css';
import EnhancedComments from './components/Comments';
import File from './components/File';
import EnhancedLikes from './components/Like';
import Context2 from './Hooks/useContext/Context2';
import UseEffect from './Hooks/UseEffect';
import Useref from './Hooks/Useref';
import UseState from './Hooks/UseState';

function App() {
  return (
    <div className="App">
      {/*<h1>Hello</h1>
      <File/>
      <UseState/>
      <UseEffect/>*/}
      <Context2/>
      <Useref/>
      <EnhancedComments/>
      <EnhancedLikes/>
    </div>
  );
}

export default App;

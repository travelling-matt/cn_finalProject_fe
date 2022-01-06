import { Headers } from './components/Header/header';
import { Layout } from './components/Layout/Layout';
import './styles/global.css';

const App = () =>{
  return (
    <div className="App">
     <Headers/>
     <Layout/>
    </div>
  );
}

export default App;
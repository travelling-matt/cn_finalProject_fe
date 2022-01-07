import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import './styles/global.css';

const App = () =>{
  return (
    <div className="App">
     <Header/>
     <Layout/>
    </div>
  );
}

export default App;
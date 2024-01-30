import './componentes/Styles/reset.css'
import './componentes/Styles/App.css'
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Main from './componentes/Main/Main';
import Sidebar from './componentes/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;

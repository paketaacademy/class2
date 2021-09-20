import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import Different from "./Components/Different"
import Work from "./Components/Work"
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">  
      <GlobalStyle />    
      <Header />
      <Main />
      <Different />
      <Work />
      <Footer />
    </div>
  );
}

export default App;

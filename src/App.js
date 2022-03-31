import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Blog from './components/Blog'
import HeadingComp from './components/HeadingComp';
import Footer from './components/Footer';
import Adcomponent from './components/Adcomponent';

function App() {
  return (
    <>
      <NavigationBar />
      <HeadingComp />
      <Blog />
      <Adcomponent />
      <Footer />
    </>
  );
}

export default App;

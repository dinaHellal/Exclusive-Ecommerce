import Home from './components/pages/Home'
import { BrowserRouter,Routes, Route} from "react-router"; 
import "react/jsx-dev-runtime";
import "./assets/Styles/index.css";
function App(){
return<>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
</BrowserRouter>
</>
}
export default App;

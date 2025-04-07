
import Home from './components/pages/Home';
import { BrowserRouter,Routes, Route} from "react-router"; 
import "react/jsx-dev-runtime";
import "./assets/Styles/index.css";
import PageLayout from './components/layouts/PageLayout';
function App(){
return<>
<BrowserRouter>
<Routes >
<Route element={<PageLayout />}>
  <Route path="/" element={<Home />} />
  </Route>
  </Routes>
</BrowserRouter>

</>
}
export default App;

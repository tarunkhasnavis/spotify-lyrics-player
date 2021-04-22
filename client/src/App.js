import 'bootstrap/dist/css/bootstrap.css';
import Login from "./Login";
import Dashboard from "./Dashboard";

// Get value for 'code' variable in URL
const code = new URLSearchParams(window.location.search).get('code')

// If you get the code then render Dashboard if not render Login component
function App() {
  return  code ? <Dashboard code={code} /> : <Login />
}

export default App;

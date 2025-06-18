import {Route,Routes} from 'react-router-dom';
import Welcome from './components/Welcome';
import Form from './components/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/form" element={<Form/>} />
    </Routes >
  );
}

export default App;
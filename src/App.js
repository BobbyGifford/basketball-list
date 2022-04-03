import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PlayerList, PlayerDetails } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PlayerList />} />
        <Route path='/player/:id' element={<PlayerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

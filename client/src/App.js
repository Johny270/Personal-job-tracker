// import Landing from "./pages/Landing";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Landing, Register, Error} from './pages'
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path='/stats' element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

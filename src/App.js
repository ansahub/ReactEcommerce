import {Routes, Route} from 'react-router-dom';
import Home from './components/routes/home.component'
import Navigation from './components/routes/navigation.component';
import Shop from './components/routes/shop.component';
import Login from './components/routes/login.component';
import Authentication from './components/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

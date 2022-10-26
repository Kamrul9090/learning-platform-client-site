import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './routers/Route';

function App() {
  return (
    <div>
      <RouterProvider router={route}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

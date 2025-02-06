import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfileDetailsPage from './Components/Profile/ProfilePage.jsx';
import HomePage from './Components/Home/HomePage.jsx';
import LinkedInHeader from './Components/Layout/AppLayout.jsx';
import JobsPage from './Components/Jobs/JobsPage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <LinkedInHeader />,
      children: [{
        path: '',
        element: <HomePage />,
      },
      { path: "/ProfilePage", element: <ProfileDetailsPage /> },
      { path: "/jobDetail", element: <JobsPage /> },
      ],
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '../src/scss/css/line-awesome.min.css';
import '../src/scss/css/iconoir.css';
import '../src/scss/css/fontawesome.min.css';
import '../src/scss/css/animate.min.css';

import '../src/scss/css/aixor-unit-test.css';
import '../src/scss/css/style.css';
import '../src/scss/css/responsive.css';

import Routers from "./Routers";
import { ToastContainer } from 'react-toastify';
import Dependency from './components/utilities/Dependency';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import { useEffect, useState } from 'react';
import Preloader from './components/utilities/Preloader';

import '../src/scss/common.scss';//custom
import '../src/scss/css/main.css';//custom
import '../src/scss/css/schedule_calendar.css';


function App() {

  //  Preloader 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Cleanup timeout to avoid potential memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> :
        <>
          <Routers />
          <RoutesScrollToTop />
          <ToastContainer />
          <Dependency />
        </>
      }
    </>
  )
}

export default App
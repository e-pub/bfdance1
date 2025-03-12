import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '../src/scss/line-awesome.min.css';
import '../src/scss/iconoir.css';
import '../src/scss/fontawesome.min.css';
import '../src/scss/animate.min.css';

import '../src/scss/aixor-unit-test.css';
import '../src/scss/style.css';
import '../src/scss/responsive.css';

import Routers from "./Routers";
import { ToastContainer } from 'react-toastify';
import Dependency from './components/utilities/Dependency';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import { useEffect, useState } from 'react';
import Preloader from './components/utilities/Preloader';

import '../src/scss/global.css';


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
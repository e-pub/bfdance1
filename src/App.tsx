import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '@/scss/line-awesome.min.css';
import '@/scss/iconoir.css';
import '@/scss/fontawesome.min.css';
import '@/scss/animate.min.css';
import '@/scss/aixor-unit-test.css';
import '@/scss/style.css';
import '@/scss/responsive.css';
import '@/scss/global.css';

import { useEffect, useState, useCallback } from 'react';
import Routers from './Routers';
import { ToastContainer } from 'react-toastify';
import Dependency from './components/utilities/Dependency';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import Preloader from './components/utilities/Preloader';

// ✅ `secureApiCall`을 사용할 경우 import 유지
// import { secureApiCall } from "@/utils/rateLimiter";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const hidePreloader = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const timeoutId = setTimeout(hidePreloader, 1200);
    return () => clearTimeout(timeoutId);
  }, [hidePreloader]);

  return isLoading ? <Preloader /> : (
    <>
      <Routers />
      <RoutesScrollToTop />
      <ToastContainer />
      <Dependency />
    </>
  );
};

export default App;

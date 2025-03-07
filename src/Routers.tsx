import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import Home2Page from "./pages/homePages/Home2";
import AboutPage from "./pages/innerPages/About";
import BlogPage from "./pages/innerPages/Blog";
import BlogDetailsPage from "./pages/innerPages/BlogDetails";
import ContactPage from "./pages/innerPages/Contact";
import FaqPage from "./pages/innerPages/Faq";
import ProjectsPage from "./pages/innerPages/Projects";
import ProjectDetailsPage from "./pages/innerPages/ProjectDetails";
import ServiceDetailsPage from "./pages/innerPages/ServiceDetails";
import NotFoundPage from "./pages/innerPages/NotFound";
import TeamDetailsPage from "./pages/innerPages/TeamDetails";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/home-2' element={<Home2Page />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
                <Route path='/blog' element={<BlogPage />}></Route>
                <Route path='/blog-details/:id' element={<BlogDetailsPage />}></Route>
                <Route path='/contact' element={<ContactPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                <Route path='/projects' element={<ProjectsPage />}></Route>
                <Route path='/project-details/:id' element={<ProjectDetailsPage />}></Route>
                <Route path='/service-details/:id' element={<ServiceDetailsPage />}></Route>
                <Route path='/team-details/:id' element={<TeamDetailsPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;
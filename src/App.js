import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home pages
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
const HomeBlackFriday = lazy(() => import("./pages/home/HomeBlackFriday"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));


// blog pages
const BlogNoSidebar = lazy(() => import("./pages/blog/BlogNoSidebar"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<HomeFashion/>}
              />

              {/* Homepages */}
              <Route
                path={process.env.PUBLIC_URL + "/home-fashion"}
                element={<HomeFashion/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/home-black-friday"}
                element={<HomeBlackFriday/>}
              />
              
              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop-grid-standard"}
                element={<ShopGridStandard/>}
              />

              {/* Blog pages */}
              <Route
                path={process.env.PUBLIC_URL + "/blog-no-sidebar"}
                element={<BlogNoSidebar/>}
              />

              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                element={<About/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                element={<Contact/>}
              />

              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;
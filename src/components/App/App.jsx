import { lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CampersList = lazy(() => import("../CamperList/CamperList"))
// const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
// const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
// const Features = lazy(() => import("../Feature/Feature"));
// const Reviews = lazy(() => import("../Reviews/Reviews"));

export default function App() {

  return (     
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersList />} />
          {/* <Route path="/catalog" element={<CatalogPage />} /> */}
          {/* <Route path="/catalog/:id" element= {<CamperPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<NotFoundPage />} />          
        </Routes>
      </Suspense>
    </Layout>
  );
}

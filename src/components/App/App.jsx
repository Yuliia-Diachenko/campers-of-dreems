import { lazy, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../../pages/CamperPage/CamperPage"));
const NotFound = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {

  return (  
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="./" element={<HomePage />} />
          <Route path="./catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element= {<CamperPage />}/>
          <Route path="*" element={<NotFound />} />          
        </Routes>
      </Suspense>
    </Layout>
  );
}

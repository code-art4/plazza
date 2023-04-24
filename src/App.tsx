import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes";
import "./App.css";
import Layout from "./utilComponent/UtilsLayout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <PageRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

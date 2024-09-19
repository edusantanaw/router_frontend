import { CustomerPage } from "./pages/customer";
import { RouterPage } from "./pages/routers";
import { Sidebar } from "./shared/layout/siderbar";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <main className="content">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<CustomerPage />} />
            <Route path="/router" element={<RouterPage />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;

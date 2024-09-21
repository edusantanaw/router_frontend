import { CustomerPage } from "./pages/customer";
import { RouterPage } from "./pages/routers";
import { Sidebar } from "./shared/layout/siderbar";
import GlobalStyle from "./style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <main className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<CustomerPage />} />
          <Route path="/router" element={<RouterPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

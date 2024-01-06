import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Service, Register, Login, Error , Logout} from "./Pages";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AdminLayout from "./Components/layouts/Admin-layout";
import AdminUsers from "./Pages/Admin/Admin-users";
import AdminContacts from "./Pages/Admin/Admin-contacts";
import AdminUpdate from "./Pages/Admin/Admin-update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<AdminUsers/>} />
            <Route path="contacts" element={<AdminContacts/>} />
            <Route path="users/:id/edit" element={<AdminUpdate/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

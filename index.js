import ReactDOM from "react-dom/client";
//import Gambar from "./Challenge/ambil";
import HTMLComponent from "./Challenge/HTMLComponent";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Router/Layout";
// import Home from "./Router/Home";
// import Blogs from "./Router/Blogs";
// import Contact from "./Router/Contact";
// import NoPage from "./Router/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HTMLComponent />);

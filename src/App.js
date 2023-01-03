import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Careers, { careersLoader } from "./pages/Careers";
import CareersLayout from "./layouts/CareersLayout";
import CareersDetails, { careerDetailsLoader } from "./pages/CareersDetails";
import CareersError from "./pages/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/*when path is "/" you can use just the boolean prop 'index' */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />

        <Route
          path=":id"
          element={<CareersDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//Don't forget to run server to fetch data.
// json-server -p 4000 -w ./data/db.json

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

// layout components
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

// help-layout components
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";

// career layout
import { Careers, careersLoader } from "./pages/careers/Careers";
import { CareerDetails, CareerDetailsLoader } from "./pages/careers/CareerDetails";

// 404
import NotFound from "./NotFound";
import { CareerError } from "./pages/careers/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareerError />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":id" element={<CareerDetails />} loader={CareerDetailsLoader}/>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

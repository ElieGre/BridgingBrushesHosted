import "./App.css";
import "./Styles/animations.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Artists from "./Components/Artists";
import New from "./Components/New";
import SingleArtist from "./Components/SingleArtist";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exhibition from "./Components/Exhibition";
import Counter from "./Components/Counter";
import RealFooter from "./Components/RealFooter";
import EventsandPrograms from "./Components/EventsandPrograms";
import Gallery from "./Components/Gallery";
import SingleExhebition from "./Components/SingleExhebition";
import Hero2 from "./Components/Hero2";
import Dashboard from "./Dashboard/Dashboard";
import AboutUs from "./Components/Aboutus";
import ContactUs from "./Components/Contactus";
import ContactUs2 from "./Components/contactus2";
import Hero3 from "./Components/Hero3";
import Section21 from "./Components/Section21";
import Hero4 from "./Components/Hero4";
import DashboardHome2 from "./Dashboard/DashboardHome2";
import DashboardHome from "./Components/DashboardHome";
import ArtistDashboard from "./Dashboard/ArtistDashboard";
import DashboardExperience from "./Dashboard/DashboardExperience";
import DashboardSkills from "./Dashboard/DashboardSkills";
import DashboardAbout from "./Dashboard/DashboardAbout";
import AddArtistForm from "./Components/AddArtistForm";
import ExhibitionAddForm from "./Components/ExhibitionAddForm";
import DashboardGalleries from "./Dashboard/DashboardGallery";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminLogin from "./Components/Adminlogin";
import TestPdfViewer from "./Components/TestPdfViewer";
import Newsletter from "./Components/Newsletter";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero4 />
                {/* <Hero /> */}
                {/* <Hero2 /> */}
                {/* <Section1 /> */}
                <Section21 />
                {/* <Section2 /> */}
                {/* <New /> */}
                <Gallery />
                <EventsandPrograms />
                {/* <Counter /> */}
                {/* <Footer /> */}
                <RealFooter />
                <title>Bridging Brushes</title>
              </>
            }
          />
          <Route
            path="/artists"
            element={
              <>
                <Header />
                <Artists />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/artists/:artist_name/:artist_lastname"
            element={
              <>
                <Header />
                <SingleArtist />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Header />
                <AboutUs />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/testpdf/:artistId"
            element={
              <>
                <Header />
                <TestPdfViewer />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <Header />
                <ContactUs2 />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/exhibitions"
            element={
              <>
                <Header />
                <Exhibition />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/newsletter"
            element={
              <>
                <Header />
                <Newsletter />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/exhibitions/:exhibitionName"
            element={
              <>
                <Header />
                <SingleExhebition />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/section21"
            element={
              <>
                <Header />
                <Section21 />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <>
                <Header />
                <AdminLogin />
                <RealFooter />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute portopio={Dashboard} />}
          />
          <Route
            path="/hero4"
            element={
              <>
                <Header />
                <Hero4 />
              </>
            }
          />
          {/* <Route
            path="/singleex"
            element={
              <>
                <Header />
                <SingleExhebition />
                <Footer />
              </>
            }
          /> */}
          <Route
            path="/exhibition123"
            element={
              <>
                <Header />
                <EventsandPrograms />
              </>
            }
          />
          <Route
            path="/gallery123"
            element={
              <>
                <Header />
                <Gallery />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard2"
            element={
              <>
                {/* <DashboardHome />
                <DashboardHome2 /> */}
                <ArtistDashboard />
                {/* <DashboardExperience />
                <DashboardSkills />
                <DashboardAbout /> */}
              </>
            }
          />
          <Route
            path="/dashboard3"
            element={
              <>
                <Header />
                <DashboardGalleries />
                <RealFooter />
              </>
            }
          />
          <Route path="/dashboard4" element={<DashboardHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/CommonPage/Navbar';
import Footer from './Components/CommonPage/Footer';
import WhatsAppButton from './Components/Pages/WhatsAppButton';
import Homepage from './Components/Pages/Homepage';
import Aboutpage from './Components/Pages/Aboutpage';
import Eventspage from './Components/Pages/Eventspage';
import ContactUs from './Components/Contact Us Button/ContactUs';
import OurProgram from './Components/Pages/OurProgram';
import ProgramWork from './Components/Pages/ProgramWork';
import BusinessPartners from './Components/Pages/BusinessPartners';
import GlobalExpansion from './Components/Pages/GlobalExpansion';
import Investors from './Components/Pages/Investors';
import BankFinancial from './Components/Pages/BankFinancial';
import CustomerSupport from './Components/Pages/CustomerSupport';
import FAQs from './Components/Pages/FAQs';
import RefundCancellation from './Components/Pages/RefundCancellation';
import TermsCondition from './Components/Pages/TermsCondition';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import Program from './Components/Homepage/Program';
import ShoppingSaving from './Components/Programpage/Our Programs/Explore Programs/ShoppingSaving';
import WholesaleSaving from './Components/Programpage/Our Programs/Explore Programs/WholesaleSaving';
import PetrolSaving from './Components/Programpage/Our Programs/Explore Programs/PetrolSaving';
import MotorcycleSaving from './Components/Programpage/Our Programs/Explore Programs/MotorcycleSaving';
import CarSaving from './Components/Programpage/Our Programs/Explore Programs/CarSaving';
import CarPlan from './Components/Programpage/Our Programs/Explore Programs/CarPlan';
import PropertySaving from './Components/Programpage/Our Programs/Explore Programs/PropertySaving';
import CropSaving from './Components/Programpage/Our Programs/Explore Programs/CropSaving';
import SelfSaving from './Components/Programpage/Our Programs/Explore Programs/SelfSaving';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ForceHomeOnRefresh() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';

    if (isReload && location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []);

  return null;
}

function App() {

  useEffect(() => {
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (options) {
      if (typeof options === 'object') {
        options.behavior = 'auto';
      }
      originalScrollIntoView.call(this, options);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ForceHomeOnRefresh />
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/program" element={<Program />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/our-programs" element={<OurProgram />} />
          <Route path="/how-it-works" element={<ProgramWork />} />
          <Route path="/business-partners" element={<BusinessPartners />} />
          <Route path="/global-expansion" element={<GlobalExpansion />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/banks" element={<BankFinancial />} />
          <Route path="/customer-support" element={<CustomerSupport />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/refund" element={<RefundCancellation />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/programs/shopping-saving" element={<ShoppingSaving />} />
          <Route path="/programs/wholesale-saving" element={<WholesaleSaving />} />
          <Route path="/programs/petrol-saving" element={<PetrolSaving />} />
          <Route path="/programs/motorcycle-saving" element={<MotorcycleSaving />} />
          <Route path="/programs/car-saving" element={<CarSaving />} />
          <Route path="/programs/car-plan" element={<CarPlan />} />
          <Route path="/programs/property-saving" element={<PropertySaving />} />
          <Route path="/programs/crop-saving" element={<CropSaving />} />
          <Route path="/programs/self-saving" element={<SelfSaving />} />
        </Routes>

        <Footer />

        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
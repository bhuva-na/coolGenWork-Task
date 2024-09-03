import React, { useState} from "react";

import COEdetails from "./components/COEdetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MBAprojects from "./components/MBAprojects";
import Cvwriting from "./components/Cvwriting";
import Internships from './components/Internships';
import Consulting from "./components/consulting";
import EnquiryForm from "./components/enquiry";
import Header from "./components/header"; // Import Header component
import './App.css'; // Import additional CSS for modal styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Only import once
import Price from "./components/price";
import ThesisWriting from "./components/thesiswriting";
import TechnicalWriting from "./components/technicalwriting";
import LiteratureSurvey from "./components/literature";
function App() {
 
  const [showEnquiryForm, setShowEnquiryForm] = useState(false); // State for showing/hiding enquiry form

 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ceodetails",
      element: <COEdetails />,
    },
    {
      path: "/mbaprojects",
      element: <MBAprojects />,
    },
    {
      path: "/cvwriting",
      element: <Cvwriting />,
    },
    {
      path: "/interships",
      element: <Internships />,
    },
    {
      path: "/consulting",
      element: <Consulting />,
    },
    {
      path: "/enquiry",
      element: <EnquiryForm />,
    },
    {
      path: "/charges",
      element: <Price/>,
    },
    {
      path: "/thesiswriting",
      element: <ThesisWriting/>,
    },
    {
      path: "/technicalwriting",
      element: <TechnicalWriting/>,
    },
    {
      path: "/leturature",
      element: <LiteratureSurvey/>,
    },
  ]);

 

  const handleLetsTalkClick = () => {
    setShowEnquiryForm(true);
  };

  const handleCloseEnquiryForm = () => {
    setShowEnquiryForm(false);
  };

  return (
    <div className="App">
      <Header onLetsTalkClick={handleLetsTalkClick} />
      <RouterProvider router={router} />

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-button" onClick={handleCloseEnquiryForm}>
              X
            </button>
            <EnquiryForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

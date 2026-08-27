import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { TopBar } from './components/TopBar';
import { HeaderNavbar } from './components/HeaderNavbar';
import { Footer } from './components/Footer';
import { VoiceSearchModal } from './components/VoiceSearchModal';
import { ComplaintModal } from './components/ComplaintModal';
import { SeatPickerModal } from './components/SeatPickerModal';

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { HistoryPage } from './pages/HistoryPage';
import { AdministrativeOffices } from './pages/AdministrativeOffices';
import { BusStandsDepots } from './pages/BusStandsDepots';
import { Departments } from './pages/Departments';
import { LeadershipMessage } from './pages/LeadershipMessage';
import { RTIAct } from './pages/RTIAct';
import { CitizensCharter } from './pages/CitizensCharter';
import { ActsAndRules } from './pages/ActsAndRules';
import { StudentNCMC } from './pages/StudentNCMC';
import { Tenders } from './pages/Tenders';
import { EAuction } from './pages/EAuction';
import { FAQPage } from './pages/FAQPage';
import { RecruitmentPage } from './pages/RecruitmentPage';
import { ContactUs } from './pages/ContactUs';
import { RouteTimetablePage } from './pages/RouteTimetablePage';

export default function App() {
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [complaintModalOpen, setComplaintModalOpen] = useState(false);
  const [selectedSeatBus, setSelectedSeatBus] = useState(null);

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
          
          <TopBar
            onOpenVoiceSearch={() => setVoiceModalOpen(true)}
            onOpenComplaintModal={() => setComplaintModalOpen(true)}
          />

          <HeaderNavbar
            onOpenComplaintModal={() => setComplaintModalOpen(true)}
          />

          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenComplaintModal={() => setComplaintModalOpen(true)}
                    onSelectSeatBus={(bus) => setSelectedSeatBus(bus)}
                  />
                }
              />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/admin-offices" element={<AdministrativeOffices />} />
              <Route path="/bus-stands-depots" element={<BusStandsDepots />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/leadership-message" element={<LeadershipMessage />} />
              <Route path="/rti" element={<RTIAct />} />
              <Route path="/citizens-charter" element={<CitizensCharter />} />
              <Route path="/acts-rules" element={<ActsAndRules />} />
              <Route path="/student-ncmc" element={<StudentNCMC />} />
              <Route path="/tenders" element={<Tenders />} />
              <Route path="/eauction" element={<EAuction />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/recruitment" element={<RecruitmentPage />} />
              <Route path="/contact" element={<ContactUs onOpenComplaintModal={() => setComplaintModalOpen(true)} />} />
              <Route path="/routes" element={<RouteTimetablePage />} />
            </Routes>
          </main>

          <Footer />

          {/* Modals */}
          <VoiceSearchModal
            isOpen={voiceModalOpen}
            onClose={() => setVoiceModalOpen(false)}
          />

          <ComplaintModal
            isOpen={complaintModalOpen}
            onClose={() => setComplaintModalOpen(false)}
          />

          <SeatPickerModal
            bus={selectedSeatBus}
            onClose={() => setSelectedSeatBus(null)}
          />

        </div>
      </Router>
    </LanguageProvider>
  );
}

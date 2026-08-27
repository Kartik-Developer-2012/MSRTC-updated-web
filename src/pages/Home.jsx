import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { NoticeMarquee } from '../components/NoticeMarquee';
import { BusScheduleSearch } from '../components/BusScheduleSearch';
import { PopularRoutes } from '../components/PopularRoutes';
import { QuickActionHub } from '../components/QuickActionHub';
import { BrandStory } from '../components/BrandStory';
import { FleetShowcase } from '../components/FleetShowcase';
import { ConcessionsPortal } from '../components/ConcessionsPortal';
import { LeadershipSidebar } from '../components/LeadershipSidebar';
import { InfoSection } from '../components/InfoSection';
import { DepotFinder } from '../components/DepotFinder';

export const Home = ({ onOpenComplaintModal, onSelectSeatBus }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#F5F7FA] font-sans">
      
      {/* 1. Hero Carousel */}
      <HeroCarousel />
      
      {/* 2. Notice Marquee Ticker */}
      <NoticeMarquee />

      {/* 3. Bus Schedule Search Bar */}
      <div className="py-4">
        <BusScheduleSearch onSelectSeatBus={onSelectSeatBus} />
      </div>

      {/* 4. Popular Routes Section */}
      <PopularRoutes />

      {/* 5. Quick Action Hub (Bento Grid) */}
      <QuickActionHub onOpenComplaintModal={onOpenComplaintModal} />

      {/* 6. Brand Story Section ("Maharashtra on the Move.") */}
      <BrandStory />

      {/* 7. Fleet Showcase */}
      <FleetShowcase />

      {/* 8. Concessions & Welfare Portal */}
      <ConcessionsPortal />

      {/* 9. Interactive Maharashtra Directory */}
      <DepotFinder />

      {/* 10. Main Grid: Leadership + Info/Tenders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1">
            <LeadershipSidebar />
          </div>
          <div className="lg:col-span-3">
            <InfoSection />
          </div>
        </div>
      </section>

    </div>
  );
};



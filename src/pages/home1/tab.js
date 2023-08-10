import React, { useState } from 'react';

// Libraries
import { TabsPGSLeft } from '../../component/tabs/tabs';

// Template Section
import Missionvision from '../../template/mission-vision';
import OurChallenges from '../../template/our-challenges';
import TechnologyPartners from '../../template/technology-partners';
import MeetOurTeam from '../../template/meet-our-team';
import CareersWithUs from '../../template/careers-with-us';

function TabSection() {
  const [data1] = useState(Missionvision);
  const [data2] = useState(OurChallenges);
  const [data3] = useState(TechnologyPartners);
  const [data4] = useState(MeetOurTeam);
  const [data5] = useState(CareersWithUs);

  return (
    <>
      <TabsPGSLeft
        tabActive="0"
        tabsTitle={[
          { title: 'Mission and vision' },
          { title: 'Our challenges' },
          { title: 'Technology partners' },
          { title: 'Meet the our team' },
          { title: 'Careers with us' },
        ]}
        tabsContent={[
          { content: data1 },
          { content: data2 },
          { content: data3 },
          { content: data4 },
          { content: data5 },
        ]}
      />
    </>
  );
}

export default TabSection;

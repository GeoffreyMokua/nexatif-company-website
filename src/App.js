import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './component/loader';

// All Headers
const Header1 = React.lazy(() => import('./layouts/header/Header1'))
const Header2 = React.lazy(() => import('./layouts/header/header2'))
const Header3 = React.lazy(() => import('./layouts/header/header3'))

// All Footers
const FooterStyle01 = React.lazy(() => import('./layouts/footer/footer-style-01'))
const FooterStyle02 = React.lazy(() => import('./layouts/footer/footer-style-02'))
const FooterStyle03 = React.lazy(() => import('./layouts/footer/footer-style-03'))
const BackTop = React.lazy(() => import('./component/back-top'))

// Home
const  HomeIndex = React.lazy(() => import( './pages/home1/index'));
const  Home2 = React.lazy(() => import( './pages/home2/index'));
const  Home3 = React.lazy(() => import( './pages/home3/index'));
const  Blog = React.lazy(() => import( './pages/blog/Blog'));
const  BlogGrid = React.lazy(() => import( './pages/blog/blog-grid'));
const  BlogSingle = React.lazy(() => import( './pages/blog/blog-details'));
const  CaseStudy = React.lazy(() => import( './pages/case-study/case-study'));
const  CaseStudySingle = React.lazy(() => import( './pages/case-study/case-study-details'));
const  ContactUs = React.lazy(() => import( './pages/contact/contact'));
const  Pricing = React.lazy(() => import( './pages/pricing'));
const  Faq = React.lazy(() => import( './pages/faq/faq'));
const  ComingSoon = React.lazy(() => import( './pages/coming-soon'));
const  Error404 = React.lazy(() => import( './pages/error404/error404'));
const  PrivacyPolicy = React.lazy(() => import( './pages/privacy-policy'));
const  TermsConditions = React.lazy(() => import( './pages/terms-conditions'));

// Pages
const  AboutUs = React.lazy(() => import( './pages/about-us'));
const  Careers = React.lazy(() => import( './pages/careers'));
const  HowWeWork = React.lazy(() => import( './pages/how-we-work'));
const  Team = React.lazy(() => import( './pages/team/team'));
const  TeamSingle = React.lazy(() => import( './pages/team/team-single'));
const  MissionVision = React.lazy(() => import( './pages/mission-vision'));
const  OurValue = React.lazy(() => import( './pages/our-value'));
const  Service = React.lazy(() => import( './pages/services/services'));
const  ServicesSingle = React.lazy(() => import( './pages/services/services-details'));
const  Industries = React.lazy(() => import( './pages/industries'));
const  Industries2 = React.lazy(() => import( './pages/industries/industries-2'));
const  Industries3 = React.lazy(() => import( './pages/industries/industries-3'));
const  Industries4 = React.lazy(() => import( './pages/industries/industries-4'));

// All Elements
const ElementsActionBox = React.lazy(() => import('./elements/action-box'))
const ElementsAccordion = React.lazy(() => import('./elements/accordion'))
const ElementsButton = React.lazy(() => import('./elements/button'))
const ElementsBlog = React.lazy(() => import('./elements/blog'))
const ElementsClientLogo = React.lazy(() => import('./elements/client-logo'))
const ElementsServices = React.lazy(() => import('./elements/services'))
const ElementsServiceBox = React.lazy(() => import('./elements/service-box'))
const ElementsCategoryBox = React.lazy(() => import('./elements/category-box'))
const ElementsCaseStudy = React.lazy(() => import('./elements/case-study'))
const ElementsCountdown = React.lazy(() => import('./elements/countdown'))
const ElementsCounter = React.lazy(() => import('./elements/counter'))
const ElementsTestimonial = React.lazy(() => import('./elements/testimonial'))
const ElementsInfoBox = React.lazy(() => import('./elements/infobox'))
const ElementsFeatureStep = React.lazy(() => import('./elements/feature-step'))
const ElementsPricingTable = React.lazy(() => import('./elements/pricing-table'))
const ElementsTeam = React.lazy(() => import('./elements/team'))
const ElementsTabs = React.lazy(() => import('./elements/tabs'))
const ElementsImageGallery = React.lazy(() => import('./elements/image-gallery'))
const ResponsiveMenu = React.lazy(() => import('./elements/menu'))
const ElementsFeatureInfo = React.lazy(() => import('./elements/feature-info'))
const ElementsList = React.lazy(() => import('./elements/list'))
const ElementsVideo = React.lazy(() => import('./elements/video'))


function App() {
  const location = useLocation();
  const hideFooter = location.pathname !== '/coming-soon';

  return (
    <Suspense fallback={<Loader />}>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Header1 />}>
            {/* Home */}
            <Route index path="/" element={<HomeIndex />} />
            <Route path="/home-2" element={<Home2 />} />
            <Route path="/home-3" element={<Home3 />} />

            {/* Pages */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-details/:id" element={<BlogSingle />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />

            {/* Company */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-details/:id" element={<TeamSingle />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/our-value" element={<OurValue />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service-details/:id" element={<ServicesSingle />} />

            {/* Industries */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries-2" element={<Industries2 />} />
            <Route path="/industries-3" element={<Industries3 />} />
            <Route path="/industries-4" element={<Industries4 />} />

            {/* Case Study */}
            <Route path="/case-study" element={<CaseStudy />} />
            <Route
              path="/case-study-details/:id"
              element={<CaseStudySingle />}
            />

            {/* Elements */}
            <Route
              path="/elements-action-box"
              element={<ElementsActionBox />}
            />
            <Route path="/elements-accordion" element={<ElementsAccordion />} />
            <Route path="/elements-button" element={<ElementsButton />} />
            <Route path="/elements-blog" element={<ElementsBlog />} />
            <Route
              path="/elements-client-logo"
              element={<ElementsClientLogo />}
            />
            <Route path="/elements-services" element={<ElementsServices />} />
            <Route
              path="/elements-service-box"
              element={<ElementsServiceBox />}
            />
            <Route
              path="/elements-category-box"
              element={<ElementsCategoryBox />}
            />
            <Route
              path="/elements-case-study"
              element={<ElementsCaseStudy />}
            />
            <Route path="/elements-counter" element={<ElementsCounter />} />
            <Route path="/elements-countdown" element={<ElementsCountdown />} />
            <Route
              path="/elements-testimonial"
              element={<ElementsTestimonial />}
            />
            <Route path="/elements-infobox" element={<ElementsInfoBox />} />
            <Route
              path="/elements-feature-step"
              element={<ElementsFeatureStep />}
            />
            <Route
              path="/elements-pricing-table"
              element={<ElementsPricingTable />}
            />
            <Route path="/elements-team" element={<ElementsTeam />} />
            <Route path="/elements-tab" element={<ElementsTabs />} />
            <Route path="/elements-image-gallery" element={<ElementsImageGallery />} />
            <Route path="/elements-list" element={<ElementsList />} />
            <Route path="/elements-menu" element={<ResponsiveMenu />} />
            <Route
              path="/elements-feature-info"
              element={<ElementsFeatureInfo />}
            />
            <Route path="/elements-video" element={<ElementsVideo />} />
          </Route>

          {/* Coming Soon Page */}
          <Route path="/coming-soon" element={<ComingSoon />} />

          {/* Header Style 2 */}
          <Route path="/home-2" element={<Header2 />}>
            <Route path="/home-2" element={<Home2 />} />
          </Route>

          {/* Header Style 3 */}
          <Route
            path="/home-3"
            element={<Header3 className="header-transprent" />}
          >
            <Route path="/home-3" element={<Home3 />} />
          </Route>
        </Routes>

        {/* All Footer */}
        {hideFooter && (
          <Routes>
            <Route path="/*" element={<FooterStyle01 />} />{' '}
            {/* Footer Default */}
            <Route path="/home-2" element={<FooterStyle02 />} />{' '}
            {/* Footer Style 02 */}
            <Route path="/home-3" element={<FooterStyle03 />} />{' '}
            {/* Footer Style 03 */}
          </Routes>
        )}

        {/* Back to Top */}
        <BackTop />
      </div>
    </Suspense>
  );
}

export default App;

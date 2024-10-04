import MaintenanceMode from "../components/MaintenanceMode";
import { Helmet } from "react-helmet";
import { Footer, Header, ScrollToTop } from "../Index";

const Blog = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 md:px-32 bg-primary-bgcolor min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Header />
        <div>
          <Helmet>
            <title> Blog | Samuel Doghor </title>

            <meta property="title" content="Blog | Samuel Doghor" />
            <meta property="og:title" content="Blog | Samuel Doghor" />
            <meta
              property="description"
              content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
            />
            <meta
              property="og:description"
              content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
            />
            <meta property="image" content="/img/doghs.jpg" />
            <meta property="og:image" content="/img/doghs.jpg" />
          </Helmet>
        </div>
        <MaintenanceMode
          pagetitle="Blog Page"
          expectedCompletion="Friday, 24th January, 2025"
        />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Blog;

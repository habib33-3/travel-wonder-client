import { Box } from "@mui/material";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PageTitle from "../../../../shared/PageTitle/PageTitle";
import Overview from "./components/Overview/Overview";
import ViewPackages from "./components/ViewPackages/ViewPackages";
import Guides from "./components/Guides/Guides";

const TourismSection = () => {
  return (
    <Box>
      <PageTitle title={"Tourism and Travel Guide Section"} />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Our Packages</Tab>
            <Tab>Meet Our Tour Guides</Tab>
          </TabList>

          <TabPanel>
            <Overview />
          </TabPanel>
          <TabPanel>
            <ViewPackages />
          </TabPanel>
          <TabPanel>
            <Guides />
          </TabPanel>
        </Tabs>
      </Box>
    </Box>
  );
};

export default TourismSection;

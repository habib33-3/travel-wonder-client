import { Box } from "@mui/material";
import { PageTitle } from "../../../../shared";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Guides, Overview, ViewPackages } from "./components";

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

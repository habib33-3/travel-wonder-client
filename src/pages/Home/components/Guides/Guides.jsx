import { Box, Grid, Typography } from "@mui/material";
import GuideCard from "./GuideCard";
import useGuideData from "../../../../hooks/useGuideData/useGuideData";
import Loader from "../../../../components/Loader/Loader";
import PageTitle from "../../../../shared/PageTitle/PageTitle";

const Guides = () => {
  const { guides, isLoading } = useGuideData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box
      sx={{ mt: 10, mx: "auto" }}
      width={{ xs: "100%X", lg: 4 / 5 }}
    >
      {/* <Typography
        textAlign={"center"}
        variant="h4"
      >
        Meet Our Guides
      </Typography> */}
      <PageTitle title={"Meet Our Guides"} />
      
      <Box>
        <Grid
          container
          columns={{ xs: 1, md: 3 }}
          gap={10}
        >
          {guides.map((guide) => (
            <GuideCard
              key={guide._id}
              guide={guide}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Guides;

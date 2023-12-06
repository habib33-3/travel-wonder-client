import { Box, Grid, Typography } from "@mui/material";
import GuideCard from "./GuideCard";
import Loader from "../../../../../../components/Loader/Loader";
import useGuideData from "../../../../../../hooks/useGuideData/useGuideData";

const Guides = () => {
  const { guides, isLoading } = useGuideData();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h4"
      >
        Meet Our Guides
      </Typography>
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

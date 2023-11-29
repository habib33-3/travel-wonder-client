import { Box } from "@mui/material";
import { useTours } from "../../hooks";
import { useParams } from "react-router-dom";
import { PageTitle } from "../../shared";
import { Loader } from "../../components";
import { AvailableGuides, BookingForm, Details } from "./components";

const PackageDetails = () => {
  const { id } = useParams();
  const { tours, isLoading } = useTours();

  if (isLoading) {
    return <Loader />;
  }

  const tour = tours.find((tour) => tour._id == id);

  return (
    <Box>
      <PageTitle title={tour.name} />
      <Details tour={tour} />
      <AvailableGuides />

      <BookingForm tour={tour} />
    </Box>
  );
};

export default PackageDetails;

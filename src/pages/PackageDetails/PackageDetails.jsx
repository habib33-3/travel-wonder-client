import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import useTours from "../../hooks/useTours/useTours";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../shared/PageTitle/PageTitle";
import Details from "./components/Details/Details";
import AvailableGuides from "./components/AvailableGuides/AvailableGuides";
import BookingForm from "./components/BookingForm/BookingForm";

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

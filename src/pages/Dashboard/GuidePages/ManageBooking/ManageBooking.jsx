import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAuth, useAxiosSecure } from "../../../../hooks";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/Loader/Loader";
import { PageTitle } from "../../../../shared";
import toast from "react-hot-toast";

const ManageBooking = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user.email, "bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/guidesBooking?email=${user.email}`);

      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleChangeStatus = (status, id) => {
    const updatedStatus = { status };

    axiosSecure
      .put(`/bookings/changeStatus/${id}`, updatedStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          toast.success("role updated");
          refetch();
        }
      });
  };

  return (
    <Box>
      <PageTitle title={"Manage Your Bookings"} />
      <Box>
        {bookings.length ? (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                    align="center"
                  >
                    Index
                  </TableCell>
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                    align="center"
                  >
                    Package Name
                  </TableCell>
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                    align="center"
                  >
                    Tourist Name
                  </TableCell>
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                    align="center"
                  >
                    Tour Date
                  </TableCell>
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                    align="center"
                  >
                    Tour Price
                  </TableCell>

                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                    align="center"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings?.map((booking, idx) => (
                  <TableRow
                    key={booking._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="user"
                      align="center"
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                    >
                      {idx + 1}
                    </TableCell>
                    <TableCell
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                      align="center"
                    >
                      {booking.tourName}
                    </TableCell>
                    <TableCell
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                      align="center"
                    >
                      {booking.touristName}
                    </TableCell>
                    <TableCell
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                      align="center"
                    >
                      {booking.tourDate}
                    </TableCell>
                    <TableCell
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                      align="center"
                    >
                      {booking.price}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="success"
                        sx={{
                          textTransform: "capitalize",
                          ":active": {
                            transform: "scale(.95)",
                          },
                          fontWeight: 800,
                        }}
                        size="small"
                        onClick={() =>
                          handleChangeStatus("active", booking._id)
                        }
                      >
                        Active
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{
                          textTransform: "capitalize",
                          ":active": {
                            transform: "scale(.95)",
                          },
                          fontWeight: 800,
                        }}
                        size="small"
                        onClick={() =>
                          handleChangeStatus("reject", booking._id)
                        }
                      >
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Typography
              variant="h2"
              color={"red"}
            >
              You Don{"'"}t Have any booking available
            </Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default ManageBooking;

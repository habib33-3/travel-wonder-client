import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PageTitle } from "../../../../shared";
import { useAuth, useAxiosSecure } from "../../../../hooks";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../../../components";
import Swal from "sweetalert2";

const UserBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user.email, "userBookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookings/userBookings?email=${user.email}`
      );

      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/booking/cancelBooking/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Cancelled!",
              text: "The booking has been cancelled.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <Box>
      <PageTitle title={`${user.displayName}'s Bookings`} />
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
                    Guide Name
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
                    Status
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
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                      align="center"
                    >
                      {booking.status}
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
                      {booking.status === "in review" && (
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
                          onClick={() => handleCancelBooking(booking._id)}
                        >
                          Cancel
                        </Button>
                      )}
                      {booking.status === "accepted" && (
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
                        >
                          Pay
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                          textTransform: "capitalize",
                          ":active": {
                            transform: "scale(.95)",
                          },
                          fontWeight: 800,
                        }}
                        size="small"
                        disabled
                      >
                        Apply
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

export default UserBookings;

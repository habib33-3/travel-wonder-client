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
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/Loader/Loader";
import PageTitle from "../../../../shared/PageTitle/PageTitle";

const UserWishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: wishlist,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user.email, "wishlist"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/wishlist/getWishlist?email=${user.email}`
      );

      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlist/deleteItem/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Cancelled!",
              text: "The Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <Box>
      <PageTitle title={`${user.displayName}'s Wishlist`} />
      <Box>
        {wishlist.length ? (
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
                    Thumbnail
                  </TableCell>
                  <TableCell
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "16px",
                    }}
                    align="center"
                  >
                    Price
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
                {wishlist?.map((item, idx) => (
                  <TableRow
                    key={item._id}
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
                      {item.name}
                    </TableCell>
                    <TableCell
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                      align="center"
                    >
                      <Box
                        component={"img"}
                        height={"30px"}
                        width={"50px"}
                        src={item.thumbnail}
                        alt=""
                      />
                    </TableCell>
                    <TableCell
                      sx={{ textTransform: "capitalize", fontWeight: 700 }}
                      align="center"
                    >
                      <TableCell
                        sx={{ textTransform: "capitalize", fontWeight: 700 }}
                        align="center"
                      >
                        {item.price}
                      </TableCell>
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
                        color="info"
                        sx={{
                          textTransform: "capitalize",
                          ":active": {
                            transform: "scale(.95)",
                          },
                          fontWeight: 800,
                        }}
                        size="small"
                        LinkComponent={Link}
                        to={`/package/${item._id}`}
                      >
                        Details
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
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
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
            gap={10}
          >
            <Typography
              variant="h2"
              color={"red"}
            >
              Your Wishlist is empty
            </Typography>
            <Button
              LinkComponent={Link}
              to="/allPackages"
            >
              View Packages
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default UserWishlist;

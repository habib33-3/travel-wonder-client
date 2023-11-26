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
} from "@mui/material";
import { useAxiosSecure, useUsers } from "../../../../hooks";
import { PageTitle } from "../../../../shared";
import { useState } from "react";
import { Loader } from "../../../../component";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const { users, isLoading, refetch } = useUsers();
  const axiosSecure = useAxiosSecure();
  //   const [page, setPage] = useState(0);
  //   const [rowsPerPage, setRowsPerPage] = useState(10);

  //   const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  //   };

  if (isLoading) {
    return <Loader />;
  }

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/makeAdmin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("role updated");
        refetch();
      }
    });
  };

  const handleMakeGuide = (id) => {
    axiosSecure.patch(`/users/makeGuide/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("role updated");
        refetch();
      }
    });
  };

  return (
    <Box>
      <PageTitle title={"Manage Users"} />
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
                  fontSize: "24px",
                }}
                align="center"
              >
                Index
              </TableCell>
              <TableCell
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 900,
                  fontSize: "24px",
                }}
                align="center"
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 900,
                  fontSize: "24px",
                }}
                align="center"
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 900,
                  fontSize: "24px",
                }}
                align="center"
              >
                Role
              </TableCell>
              <TableCell
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 900,
                  fontSize: "24px",
                }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, idx) => (
              <TableRow
                key={user._id}
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
                  {user.name}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 700 }}
                  align="center"
                >
                  {user.email}
                </TableCell>
                <TableCell
                  sx={{ textTransform: "capitalize", fontWeight: 700 }}
                  align="center"
                >
                  {user.role}
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
                    disabled={user.role !== "user"}
                    onClick={() => handleMakeAdmin(user._id)}
                  >
                    Make Admin
                  </Button>
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
                    disabled={user.role !== "user"}
                    onClick={() => handleMakeGuide(user._id)}
                  >
                    Make Guide
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageUsers;

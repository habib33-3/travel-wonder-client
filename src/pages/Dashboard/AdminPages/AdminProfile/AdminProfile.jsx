import { Box, Stack, Typography } from "@mui/material";
import { useAuth } from "../../../../hooks";
import { PageTitle } from "../../../../shared";

const AdminProfile = () => {
  const { user } = useAuth();

  return (
    <Box>
      <PageTitle title={`${user.displayName}'s Profile`} />
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={6}
      >
        <Box
          component={"img"}
          src={user.photURL}
          alt={user.displayName}
          width="80px"
          height="80px"
          sx={{ borderRadius: "50%", p: 2, backgroundColor: "skyblue" }}
        />
        <Box>
          <Typography
            variant="h4"
            component="h3"
            sx={{ color: "blue" }}
          >
            Role: Admin
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default AdminProfile;

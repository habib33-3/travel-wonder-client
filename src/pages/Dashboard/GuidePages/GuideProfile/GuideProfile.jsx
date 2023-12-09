import { Box, Stack, Typography } from "@mui/material";
import UpdateForm from "./UpdateForm/UpdateForm";
import useAuth from "../../../../hooks/useAuth/useAuth";
import PageTitle from "../../../../shared/PageTitle/PageTitle";

const GuideProfile = () => {
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
          src={user.photoURL}
          alt={user.displayName}
          width="120px"
          height="120px"
          sx={{ borderRadius: "50%", p: 1, backgroundColor: "skyblue" }}
        />
        <Box>
          <Typography
            variant="h4"
            component="h3"
            sx={{ color: "blue" }}
          >
            Role: Guide
          </Typography>
        </Box>
      </Stack>
      <UpdateForm />
    </Box>
  );
};

export default GuideProfile;

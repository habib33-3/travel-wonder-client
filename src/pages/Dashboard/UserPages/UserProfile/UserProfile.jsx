import { Box, Stack, Typography } from "@mui/material";
import { PageTitle } from "../../../../shared";
import { useAuth } from "../../../../hooks";
import StoryForm from "./StoryForm/StoryForm";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <Box>
      <PageTitle title={`${user.displayName}'s Profile`} />

      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          component={"img"}
          src={user.photoURL}
          height={"120px"}
          width={"120px"}
          sx={{ borderRadius: "50%" }}
        />
        <Box>
          <Typography
            variant="body1"
            textAlign={"center"}
          >
            Email: {user.email}
          </Typography>
        </Box>
      </Stack>
      <StoryForm user={user} />
    </Box>
  );
};

export default UserProfile;

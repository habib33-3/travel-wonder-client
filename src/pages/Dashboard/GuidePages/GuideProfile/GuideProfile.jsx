import { Box, Stack, Typography } from "@mui/material";
import { useAuth } from "../../../../hooks";
import { PageTitle } from "../../../../shared";

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
    </Box>
  );
};

export default GuideProfile;

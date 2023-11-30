import { Box, Container, Typography } from "@mui/material";
import { PageTitle } from "../../shared";

const ContactUs = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ backgroundColor: "antiquewhite", p: 4 }}>
        <PageTitle title={"Contact Us - Let's Stay Connected!"} />

        <Typography
          variant="h6"
          textAlign={"justify"}
        >
          Our dedicated customer support team is ready to assist you with any
          queries or concerns. Whether you need help planning your next
          adventure or have questions about our services, feel free to reach
          out.
        </Typography>
        <Box sx={{ mt: 2, fontWeight: 500, color: "#111" }}>
          <Typography variant="body1">
            Email: support@travelguide.com
          </Typography>
          <Typography variant="body1">Phone: +1-555-123-4567</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;

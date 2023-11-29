import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth, useAxiosSecure } from "../../../../../hooks";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import toast from "react-hot-toast";

const animatedComponents = makeAnimated();

const UpdateForm = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const [skillValue, setSkillValue] = useState("");
  const [languageValue, setLanguageValue] = useState("");
  const [phone, setPhone] = useState(0);
  const [experience, setExperience] = useState(0);
  const [educationValue, setEducationValue] = useState("");

  const skills = [
    { value: "Swimming", label: "Swimming" },
    { value: "Leadership", label: "Leadership" },
    { value: "Problem Solving", label: "Problem Solving" },
    { value: "Communication", label: "Communication" },
  ];

  const languages = [
    { value: "Bangla", label: "Bangla" },
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Arabic", label: "Arabic" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
  ];

  const educations = [
    { value: "S.S.C", label: "S.S.C" },
    { value: "H.S.C", label: "H.S.C" },
    { value: "Bachelors", label: "Bachelors" },
  ];

  const handleUpdateInfo = (e) => {
    e.preventDefault();

    const skill = skillValue.map((skill) => skill.value);

    const language = languageValue.map((language) => language.value);

    const eduction = educationValue.map((education) => education.value);

    const guideInfo = {
      name: user.displayName,
      email: user.email,
      pic: user.photoURL,
      skill,
      language,
      phone,
      eduction,
      experience,
      updated: "true",
    };

    console.log(guideInfo);

    axiosSecure.post("/guide/saveGuide", guideInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Info Updated");
      }
    });
  };

  return (
    <Box>
      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
          >
            Update Your Info
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleUpdateInfo}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  defaultValue={user.email}
                  disabled
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  defaultValue={user.displayName}
                  disabled
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="pic"
                  label="Pic"
                  name="pic"
                  defaultValue={user.photoURL}
                  disabled
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="number"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Typography>Education</Typography>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // isMulti
                  options={educations}
                  onChange={(selectedOptions) =>
                    setEducationValue(selectedOptions)
                  }
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Typography>Skills</Typography>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={skills}
                  onChange={(selectedOptions) => setSkillValue(selectedOptions)}
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Typography>Language Proficiency</Typography>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={languages}
                  onChange={(selectedOptions) =>
                    setLanguageValue(selectedOptions)
                  }
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  name="experience"
                  label="Work Experience"
                  type="number"
                  id="experience"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                ":active": {
                  transform: "scale(.95)",
                },
              }}
            >
              Update Info
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UpdateForm;

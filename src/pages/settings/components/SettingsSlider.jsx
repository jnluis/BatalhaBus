import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

export default function SettingsSlider(props) {
  const { minLabel, maxLabel, ariaLabel } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        height: 50,
        width: 237,
        backgroundColor: "white",
        borderRadius: 90,
      }}
    >
      <Stack
        spacing={1}
        direction="row"
        sx={{ mb: 2, mt: 0.5, ml: 2 }}
        alignItems="center"
      >
        <p style={{ color: "black" }}>{minLabel}</p>
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-horizontal",
            },
            "& .MuiSlider-thumb": {
              backgroundColor: "black",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#747474",
            },
            "& .MuiSlider-track": {
              backgroundColor: "black",
            },
            "& .MuiSlider-mark": {
              backgroundColor: "black",
            },
            width: 144,
            height: 5,
          }}
          aria-label={ariaLabel}
          orientation="horizontal"
          value={value}
          onChange={handleChange}
          size="2000px"
          min={parseInt(minLabel)}
          max={parseInt(maxLabel)}
        />
        <p style={{ color: "black" }}>{maxLabel}</p>
      </Stack>
    </Box>
  );
}

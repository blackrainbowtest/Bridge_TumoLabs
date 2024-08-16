import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Skeleton,
} from "@mui/material";
import MainContainerRow from "components/_GlobalComponents/MainContainerRow";
import MainGridContainer from 'components/_GlobalComponents/MainGridContainer';
import { memo, useState } from "react";
import styled from "styled-components";

function FilterComponent() {
  const [value, setValue] = useState("type1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <MainContainerRow>
      <FormControlContainer>
        <FormLabel id='demo-controlled-radio-buttons-group'>
          Type of work
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value='type1' control={<Radio />} label='Type 1' />
          <FormControlLabel value='type2' control={<Radio />} label='Type 2' />
          <FormControlLabel value='type3' control={<Radio />} label='Type 3' />
          <FormControlLabel value='type4' control={<Radio />} label='Type 4' />
          <FormControlLabel value='type5' control={<Radio />} label='Type 5' />
        </RadioGroup>
      </FormControlContainer>
      {/* FIXME:  */}
      <MainGridContainer>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
        <Box sx={{ minWidth: "100%" }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
      </MainGridContainer>
    </MainContainerRow>
  );
}

export default memo(FilterComponent);

const FormControlContainer = styled(FormControl)(({ theme }) => ({
  minWidth: "100px!important",
  display: "flex",
  borderRadius: "5px",
  flexDirection: "row",
  "&& label, div": {
    minWidth: "100%",
  },
  "& div > label:hover": {
    backgroundColor: theme.palette.background.secondary,
  },
}));

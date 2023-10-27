import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

function TutorialMarksViewActions(props) {
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton>
        <VisibilityIcon onClick = {() => navigate("/tutorial-marks",{state: {title: props.title}})}/>
      </IconButton>
    </Box>
  );
}

export default TutorialMarksViewActions
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ResultDashboardRowActions(props) {
const navigate = useNavigate();

  return (
    <Box>
      <IconButton>
        <VisibilityIcon onClick = {() => navigate("/course-info", {state: {courseId: props.courseId, courseName: props.courseName, title: props.title}})}/>
      </IconButton>
    </Box>
  );
}

export default ResultDashboardRowActions
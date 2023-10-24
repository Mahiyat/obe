import { Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CourseInfo from "./CourseInfo";

function ResultDashboardRowActions() {
  return (
    <Box>
      <IconButton onClick={()=>{<CourseInfo />}}>
        <VisibilityIcon />
      </IconButton>
    </Box>
  );
}

export default ResultDashboardRowActions
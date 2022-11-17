import { Box } from "@mui/material";
import { ProfileBox } from "../component/ProfileBox";

function Usuario() {
  return (
    <>
      <Box
        display="flex"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <ProfileBox />
      </Box>
    </>
  );
}

export default Usuario;

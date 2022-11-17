import { Box, Container } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import CustomizedAccordions from "../component/Accordion";

function ActivitiesPage() {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setData(new Date());
    }, 1000);
  });

  return (
    <>
      <Container>
        <Box
          sx={{
            height: "100vh",
            width: "90wv",
            marginTop: 4,
          }}
        >
          <h3>Atividades</h3>
          <CustomizedAccordions />
        </Box>
      </Container>
      <section>Data: {data.toLocaleString()}</section>
    </>
  );
}

export default ActivitiesPage;

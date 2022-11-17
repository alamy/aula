import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";

function UseEffectActivity() {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setData(new Date());
    }, 1000);
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    fontSize: 20,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <section></section>
      <Stack spacing={2}>
        <Item>Data: {data.toLocaleString()}</Item>
      </Stack>
    </>
  );
}

export default UseEffectActivity;

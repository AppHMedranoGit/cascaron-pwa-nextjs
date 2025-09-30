"use client";

import { useState } from "react";
import { AppBar, Tabs, Tab, Box, Typography } from "@mui/material";
import Dashboard from "@/components/Dashboard";

function TabPanel({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

export default function HomePage() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Dashboard" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
          <Tab label="Tab 4" />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Contenido del Tab 2</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Contenido del Tab 3</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Contenido del Tab 4</Typography>
      </TabPanel>
    </Box>
  );
}

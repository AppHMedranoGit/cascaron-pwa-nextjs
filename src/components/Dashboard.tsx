"use client";

import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

type DashboardData = {
  users: number;
  sales: number;
  revenue: number;
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tu-n8n-webhook-url/dashboard")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;
  if (!data) return <Typography color="error">Error cargando datos</Typography>;

   return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Usuarios</Typography>
            <Typography variant="h4">{data.users}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Ventas</Typography>
            <Typography variant="h4">{data.sales}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Ingresos</Typography>
            <Typography variant="h4">${data.revenue}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

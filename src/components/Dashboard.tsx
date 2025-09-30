"use client";

import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

type DashboardData = {
  users: number;
  sales: number;
  activeSessions: number;
  conversionRate: number;
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  /* useEffect(() => {
    fetch("https://tu-n8n-webhook-url/dashboard")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []); */

   useEffect(() => {
    // Simulamos una llamada a la API de n8n
    const fetchData = async () => {
      setLoading(true);

      // 🚀 Aquí pondrías tu endpoint real de n8n
      // const res = await fetch("https://mi-n8n-endpoint.com/data");
      // const json = await res.json();

      // Datos ficticios para simular n8n
      const json: DashboardData = {
        users: 120,
        sales: 3500,
        activeSessions: 48,
        conversionRate: 3.7,
      };

      setTimeout(() => {
        setData(json);
        setLoading(false);
      }, 1000); // simulamos delay de red
    };

    fetchData();
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
       <Grid size={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">Sesiones Activas</Typography>
            <Typography variant="h4">{data?.activeSessions}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={3}>
        <Card>
          <CardContent>
            <Typography variant="h6">Tasa Conversión</Typography>
            <Typography variant="h4">{data?.conversionRate}%</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

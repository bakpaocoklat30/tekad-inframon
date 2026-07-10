import { Card, Loader, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

import { getHealth } from "../../services/health.service";

export default function DashboardPage() {
  const [status, setStatus] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHealth() {
      try {
        const data = await getHealth();
        setStatus(data.status);
      } catch {
        setStatus("Offline");
      } finally {
        setLoading(false);
      }
    }

    loadHealth();
  }, []);

  return (
    <Stack>
      <Title order={2}>Welcome to Tekad Inframon</Title>

      <Card withBorder shadow="sm" radius="md">
        <Text fw={600}>Backend Status</Text>

        {loading ? (
          <Loader size="sm" mt="sm" />
        ) : (
          <Text c={status === "ok" ? "green" : "red"}>
            {status === "ok" ? "🟢 Online" : "🔴 Offline"}
          </Text>
        )}
      </Card>

      <Card withBorder shadow="sm" radius="md">
        <Text fw={600}>Version</Text>
        <Text>0.1.0</Text>
      </Card>
    </Stack>
  );
}

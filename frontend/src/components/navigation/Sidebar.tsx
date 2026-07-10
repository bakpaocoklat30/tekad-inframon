import {
  IconDashboard,
  IconServer,
  IconCloud,
  IconChartBar,
  IconSettings,
} from "@tabler/icons-react";
import { Stack, NavLink } from "@mantine/core";

export default function Sidebar() {
  return (
    <Stack gap="xs">
      <NavLink label="Dashboard" leftSection={<IconDashboard size={18} />} active />
      <NavLink label="Assets" leftSection={<IconServer size={18} />} />
      <NavLink label="Providers" leftSection={<IconCloud size={18} />} />
      <NavLink label="Monitoring" leftSection={<IconChartBar size={18} />} />
      <NavLink label="Settings" leftSection={<IconSettings size={18} />} />
    </Stack>
  );
}
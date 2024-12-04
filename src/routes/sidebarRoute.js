import { RiDashboardLine } from "react-icons/ri";

export const sAdminRoutes = [
  {
    label: "Dashboard",
    value: "/admin",
    icon: RiDashboardLine,
    isExtendAble: false,
    subRoutes: [],
  },
];

export const sLibrarianRoutes = [
  {
    label: "Library Items",
    icon: RiDashboardLine,
    isExtendAble: true,
    subRoutes: [
      {
        label: "View All",
        value: "/librarian",
        icon: RiDashboardLine,
      },
      {
        label: "Add New Item",
        value: "/librarian/add",
        icon: RiDashboardLine,
      },
    ],
  },
];

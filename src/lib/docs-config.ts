export interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

export const docsConfig: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
      {title: "Prompt" , href: "/docs/prompt"},
    ],
  },
  {
    title: "CLI Reference",
    items: [
      { title: "CLI Options", href: "/docs/cli-options" },
      { title: "Project Structure", href: "/docs/project-structure" },
    ],
  },
  // {
  //   title: "Tutorials",
  //   items: [
  //     { title: "Create REST API", href: "/docs/tutorials/rest-api" },
  //     { title: "Using Routers", href: "/docs/tutorials/routers" },
  //     { title: "Database Integration", href: "/docs/tutorials/database" },
  //     { title: "Extend the CLI", href: "/docs/tutorials/extend" },
  //   ],
  // },
  {
    title: "Community",
    items: [
      { title: "Roadmap", href: "/docs/roadmap" },
      { title: "Contributing", href: "/docs/contributing" },
      { title: "License", href: "/docs/license" },
    ],
  },
];

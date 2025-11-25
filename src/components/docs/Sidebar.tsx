import { NavLink } from "@/components/NavLink";
import { docsConfig } from "@/lib/docs-config";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border py-8">
      <nav className="space-y-6 px-6">
        {docsConfig.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 text-sm font-semibold">{section.title}</h4>
            {section.items && (
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href!}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
                      )}
                      activeClassName="text-sidebar-accent-foreground bg-sidebar-accent font-medium"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

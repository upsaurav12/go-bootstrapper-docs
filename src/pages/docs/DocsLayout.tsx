import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DocsSidebar } from "@/components/docs/Sidebar";
import { TableOfContents } from "@/components/docs/TableOfContents";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex w-full">
        <DocsSidebar />
<main
  className="
    flex-1
    w-full
    px-4 sm:px-6 lg:px-12
    py-6 sm:py-8 lg:py-10
    max-w-none lg:max-w-4xl
    mx-auto
  "
>
  {children}
</main>

        <TableOfContents />
      </div>
      <Footer />
    </div>
  );
}

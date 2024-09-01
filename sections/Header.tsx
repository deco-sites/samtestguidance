import { useScript } from "deco/hooks/useScript.ts";
import HeaderCartButton from "site/islands/features/Header/HeaderCartButton.tsx";
import Drawer from "site/islands/features/Header/MobileDrawer.tsx";
import Image from "apps/website/components/Image.tsx";
import { links } from "../features/Header/links.ts";

const onScroll = () => {
  let lastScrollY = globalThis.scrollY;

  const onScroll = () => {
    globalThis.requestAnimationFrame(updateScrollDir);
  };

  const updateScrollDir = () => {
    const scrollY = globalThis.scrollY;
    const isScrollingDown = scrollY > lastScrollY;

    isScrollingDown
      ? updateHeaderClassesOnScrolDown()
      : updateHeaderClassesOnScrollUp(), lastScrollY = scrollY;
  };

  function updateHeaderClassesOnScrolDown() {
    modifyHeaderClassList()
      .add("-top-full");
    modifyHeaderClassList()
      .remove("top-0");
  }

  function updateHeaderClassesOnScrollUp() {
    modifyHeaderClassList().add(
      "top-0",
    );
    modifyHeaderClassList()
      .remove(
        "-top-full",
      );
  }

  function modifyHeaderClassList() {
    return globalThis.document.getElementById("app_header")?.classList!;
  }

  globalThis.addEventListener("scroll", onScroll);
};

interface HeaderProps {
  iconUrl: string;
}
export default function Header(props: HeaderProps) {
  return (
    <>
      <div style={{ height: "64px" }}>
        <header
          id="app_header"
          className="bg-secondary fixed left-0 right-0 z-50 py-4 transition-all duration-600 ease-in-out"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Drawer />
                <div>
                  <Image
                    src={props.iconUrl}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
              <nav className="hidden md:flex space-x-4">
                {links?.map((link) => {
                  return (
                    <a
                      {...link}
                      className="text-neutral hover:text-primary/80 transition-colors"
                    />
                  );
                })}
              </nav>
              <div className="flex items-center gap-2">
                <HeaderCartButton />
                <button class="btn btn-sm btn-accent btn-link text-neutral">
                  Login
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onScroll) }}
      />
    </>
  );
}

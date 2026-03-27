"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { Menu, X } from "lucide-react";

import {
  brandMetaFont,
  brandTitleFont,
  courseDrawerItems,
  headerNavFont,
  navItems,
} from "./home-shared";

export function HomeHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerEdgeRef = useRef<HTMLSpanElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const lastScrollY = useRef(0);

  const openDesktopDrawer = () => {
    if (window.innerWidth >= 1024) {
      setIsDrawerOpen(true);
    }
  };

  const closeDesktopDrawer = () => {
    if (window.innerWidth >= 1024) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    const drawer = drawerRef.current;
    const drawerEdge = drawerEdgeRef.current;
    const items = itemRefs.current.filter(Boolean);

    if (!drawer) return;

    if (isDrawerOpen) {
      gsap.killTweensOf([drawer, drawerEdge, ...items]);
      gsap.set(drawer, { display: "block", pointerEvents: "auto" });
      if (drawerEdge) gsap.set(drawerEdge, { display: "block" });

      gsap.fromTo(
        drawer,
        { x: -28, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.42, ease: "power3.out" },
      );

      if (drawerEdge) {
        gsap.fromTo(
          drawerEdge,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.2, ease: "power2.out" },
        );
      }

      gsap.fromTo(
        items,
        { x: -18, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.34,
          stagger: 0.028,
          delay: 0.05,
          ease: "power2.out",
        },
      );
      return;
    }

    gsap.killTweensOf([drawer, drawerEdge, ...items]);
    gsap.to(items, {
      x: -12,
      autoAlpha: 0,
      duration: 0.18,
      stagger: 0.012,
      ease: "power2.in",
    });

    if (drawerEdge) {
      gsap.to(drawerEdge, {
        autoAlpha: 0,
        duration: 0.16,
        ease: "power2.in",
        onComplete: () => {
          if (drawerEdgeRef.current) {
            gsap.set(drawerEdgeRef.current, { display: "none" });
          }
        },
      });
    }

    gsap.to(drawer, {
      x: -18,
      autoAlpha: 0,
      duration: 0.24,
      ease: "power2.in",
      onComplete: () => {
        if (drawerRef.current) {
          gsap.set(drawerRef.current, {
            display: "none",
            pointerEvents: "none",
          });
        }
      },
    });
  }, [isDrawerOpen]);

  useEffect(() => {
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    gsap.killTweensOf(mobileMenu);

    if (isMobileMenuOpen) {
      gsap.set(mobileMenu, { display: "block", pointerEvents: "auto" });
      gsap.fromTo(
        mobileMenu,
        { y: -18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.28, ease: "power2.out" },
      );
      return;
    }

    gsap.to(mobileMenu, {
      y: -14,
      autoAlpha: 0,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        if (mobileMenuRef.current) {
          gsap.set(mobileMenuRef.current, {
            display: "none",
            pointerEvents: "none",
          });
        }
      },
    });
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const scrollY = window.scrollY;
    document.body.dataset.lockScrollY = String(scrollY);
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      const savedScrollY = Number(document.body.dataset.lockScrollY ?? "0");
      delete document.body.dataset.lockScrollY;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, savedScrollY);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        return;
      }

      setIsDrawerOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.set(header, { y: 0, autoAlpha: 1 });
    lastScrollY.current = window.scrollY;

    const showHeader = () => {
      gsap.to(header, {
        y: 0,
        autoAlpha: 1,
        duration: 0.42,
        ease: "power3.out",
      });
    };

    const hideHeader = () => {
      gsap.to(header, {
        y: -110,
        autoAlpha: 1,
        duration: 0.34,
        ease: "power3.out",
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 12 || isMobileMenuOpen || isDrawerOpen) {
        showHeader();
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current + 4) {
        hideHeader();
      } else if (currentScrollY < lastScrollY.current - 4) {
        showHeader();
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawerOpen, isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 bg-white will-change-transform"
      onMouseLeave={closeDesktopDrawer}
    >
      <div className="grid min-h-24 grid-cols-[minmax(0,1fr)_auto_auto] border-b border-black/15 lg:grid-cols-[314px_346px_1fr_auto] lg:border-b-0">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 border-r border-black/15 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 lg:gap-5 lg:border-b-0"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-black text-2xl font-black sm:size-14 sm:text-3xl">
            B
          </div>
          <div className="min-w-0 leading-[1.05]">
            <p
              className="truncate text-[0.95rem] uppercase sm:text-[1.08rem]"
              style={brandTitleFont}
            >
              ENAG PERU
            </p>
            <p
              className="hidden max-w-[12.5rem] pt-1 text-[0.85rem] text-black/82 sm:block sm:text-[0.94rem]"
              style={brandMetaFont}
            >
              Escuela Nacional de Alcaldes y Gobernadores del Perú
            </p>
          </div>
        </Link>

        <div
          className="relative flex items-center border-r border-black/15 px-4 py-4 sm:px-6 sm:py-5 lg:border-b-0 lg:px-14"
          onMouseEnter={openDesktopDrawer}
        >
          <Link
            href="/cursos"
            className="text-[1.25rem] leading-none sm:text-[1.55rem] lg:text-[2.05rem]"
            style={brandTitleFont}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CURSOS
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-10 px-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[1.08rem] text-black/95 transition-colors hover:text-black"
              style={headerNavFont}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-7">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-full border border-black/35 text-black transition-colors hover:bg-black hover:text-white lg:hidden"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-black/35 text-[1.02rem] transition-colors hover:bg-black hover:text-white"
              style={headerNavFont}
            >
              EN
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full bg-black text-[1.02rem] text-white"
              style={headerNavFont}
            >
              ES
            </button>
          </div>

          <Link
            href="/checkout"
            className="hidden min-h-11 items-center justify-center rounded-full border border-black px-6 text-[1.05rem] transition-colors hover:bg-black hover:text-white lg:inline-flex"
            style={headerNavFont}
          >
            Inscríbete ahora
          </Link>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="pointer-events-none fixed inset-x-0 top-24 z-40 hidden h-[calc(100svh-96px)] overflow-hidden overscroll-none border-b border-black/15 bg-white lg:hidden"
        style={{ display: "none", opacity: 0 }}
      >
        <div className="flex h-full flex-col px-5 py-5 sm:px-6">
          <div className="grid gap-3 border-b border-black/15 pb-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[1.08rem] text-black transition-colors hover:text-black/60"
                style={headerNavFont}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="grid gap-3 border-b border-black/15 py-5">
            {courseDrawerItems.slice(0, 5).map((item) => (
              <Link
                key={item}
                href="/cursos"
                className="text-[1.35rem] leading-[1] tracking-[-0.05em] text-black/92"
                style={brandTitleFont}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 py-5">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-black/35 text-[1rem]"
              style={headerNavFont}
            >
              EN
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full bg-black text-[1rem] text-white"
              style={headerNavFont}
            >
              ES
            </button>
          </div>

          <Link
            href="/checkout"
            className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/85"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inscríbete ahora
          </Link>
        </div>
      </div>

      <div
        ref={drawerRef}
        className="pointer-events-none absolute left-0 top-full hidden h-[calc(100vh-96px)] w-[660px] bg-white lg:block"
        style={{
          display: "none",
          opacity: 0,
        }}
        onMouseEnter={openDesktopDrawer}
      >
        <div className="h-full overflow-y-auto px-8 py-10">
          <div className="space-y-4">
            {courseDrawerItems.map((item, index) => (
              <Link
                key={item}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                href="/cursos"
                className="block text-[3.15rem] leading-[0.95] tracking-[-0.055em] text-black transition-colors hover:text-black/55"
                style={{
                  fontFamily:
                    '"Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <span
        ref={drawerEdgeRef}
        aria-hidden="true"
        className="absolute left-[660px] top-full hidden h-[calc(100vh-96px)] w-px bg-black/15 lg:block"
        style={{ display: "none", opacity: 0 }}
      />
    </header>
  );
}

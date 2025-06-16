import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Início", sectionId: "hero" },
  { label: "Quem somos", sectionId: "quem-somos" },
  { label: "Método R&O 360", sectionId: "metodo" },
  {
    label: "Nossos serviços",
    sectionId: "servicos",
    submenu: [
      { label: "Método 306°", sectionId: "servico-metodo-306" },
      { label: "Método 180° - Coach", sectionId: "servico-metodo-180" },
      { label: "Cliente oculto", sectionId: "servico-cliente-oculto" },
      { label: "Administrativo e controle", sectionId: "servico-administrativo" },
      { label: "Reforma estrutural", sectionId: "servico-reforma" },
      { label: "Marketing e redes sociais", sectionId: "servico-marketing" },
      { label: "Abertura de empreendimento", sectionId: "servico-abertura" }
    ]
  },
  { label: "Contato", sectionId: "contato" }
];

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<null | number>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setOpenMobileSub(false);
    setOpenMenu(null);
  };

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container-custom flex items-center justify-between py-2">
        {/* LOGO GRANDE E CLARA */}
        <div className="flex items-center gap-3 min-w-[120px]">
          <a href="/">
          <img
            src="/reo-consultoria.webp"
            alt="R&O Consultoria Estratégica"
            className="h-16 md:h-20 lg:h-24 w-auto"
            style={{ minWidth: 120, maxWidth: 200 }}
          />
        </a>
        </div>

        {/* NAV LINKS - DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 ml-8">
          {navItems.map((item, i) =>
            item.submenu ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(i)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 font-semibold text-primary hover:text-accent transition-colors px-2 py-1"
                  style={{ fontSize: 17 }}
                >
                  {item.label}
                  <svg width="12" height="8" className="ml-1">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </button>
                {/* SUBMENU */}
                {openMenu === i && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => scrollToSection(sub.sectionId)}
                        className="block w-full text-left px-5 py-2 text-primary font-medium hover:bg-accent/10 hover:text-accent transition"
                        style={{ fontSize: 16 }}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="font-semibold text-primary hover:text-accent transition-colors px-2 py-1"
                style={{ fontSize: 17 }}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* CTA - DESKTOP */}
        <Button
          onClick={() =>
            window.open(
              "https://wa.me/5547992062877?text=Olá! Gostaria de solicitar minha análise gratuita do método R&O 360.",
              "_blank"
            )
          }
          className="bg-accent hover:bg-accent/90 text-white font-bold px-7 py-3 rounded-full shadow-md text-base ml-8 hidden lg:flex"
        >
          Análise gratuita <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden p-2 rounded-xl ml-2 focus:outline-none"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-8 h-8 text-primary" />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex justify-end">
          {/* Drawer */}
          <div className="bg-white w-[92vw] max-w-[380px] h-full p-6 flex flex-col shadow-xl relative animate-fade-in-right">
            <div className="flex items-center justify-between mb-8">
              <a href="/" onClick={() => setMobileOpen(false)}>
                <img
                  src="/reo-consultoria.webp"
                  alt="R&O Consultoria Estratégica"
                  className="h-12 w-auto"
                />
              </a>
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="w-7 h-7 text-primary" />
              </button>
            </div>
            {/* MENU ITENS */}
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) =>
                item.submenu ? (
                  <div key={item.label}>
                    <button
                      className="flex items-center justify-between w-full font-bold text-lg py-3 px-2 text-primary"
                      onClick={() => setOpenMobileSub((v) => !v)}
                    >
                      {item.label}
                      <svg width="18" height="12">
                        <path d="M2 4l7 6 7-6" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </button>
                    {/* SUBMENU MOBILE */}
                    {openMobileSub && (
                      <div className="pl-4 flex flex-col gap-2 mb-2">
                        {item.submenu.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => scrollToSection(sub.sectionId)}
                            className="text-base text-primary py-2 text-left w-full hover:text-accent transition"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="font-bold text-lg py-3 px-2 text-primary text-left w-full hover:text-accent transition"
                  >
                    {item.label}
                  </button>
                )
              )}

              {/* CTA - MOBILE */}
              <Button
                onClick={() => {
                  window.open(
                    "https://wa.me/5547992062877?text=Olá! Gostaria de solicitar minha análise gratuita do método R&O 360.",
                    "_blank"
                  );
                  setMobileOpen(false);
                }}
                className="bg-accent hover:bg-accent/90 text-white font-bold py-4 mt-4 rounded-full text-lg w-full"
              >
                Análise gratuita <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          {/* click to close bg */}
          <div className="flex-1" onClick={() => setMobileOpen(false)}></div>
        </div>
      )}
    </nav>
  );
}

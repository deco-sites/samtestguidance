interface FooterSection {
    title: string;
    links: { url: string; text: string }[];
  }
  
  const department: FooterSection = {
    title: "Departamentos",
    links: [
      { url: "#", text: "Trocas e Devoluções" },
      {
        url: "#",
        text: "Política de Privacidade",
      },
      { text: "Prazos de Envio e Entregas", url: "#" },
      { text: "Política de Reembolso", url: "#" },
      { text: "Termos e Condições", url: "#" },
    ],
  };
  
  const navigation: FooterSection = {
    title: "Navegação",
    links: [
      { text: "Início", url: "#" },
      { text: "Camisas Retrô", url: "#" },
      { text: "Camisas Novas", url: "#" },
      { text: "Inafntil", url: "#" },
      { text: "", url: "#" },
    ],
  };
  
  const resources = {
    title: "Recursos",
    links: [
      { text: "Blog", url: "#" },
      { text: "Newsletter", url: "#" },
      { text: "Eventos", url: "#" },
      { text: "Ajuda", url: "#" },
    ],
  };
  
  const legal = {
    title: "Legal",
    links: [
      { text: "Termos de Serviço", url: "#" },
      { text: "Política de Cookies", url: "#" },
    ],
  };
  export const footerSections: FooterSection[] = [
    department,
    navigation,
    resources,
    legal,
  ];
  
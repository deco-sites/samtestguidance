function Footer() {
  return (
    <footer className="bg-primary text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral">
              Departamentos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral">Início</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-neutral">
                  Prazos de Envio e Entregas
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral">Política de Reembolso</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Termos e Condições</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral">Início</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Camisas Retrô</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Camisas Novas</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Infantil</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral">Blog</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Newsletter</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Eventos</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Ajuda</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral">Termos de Serviço</a>
              </li>
              <li>
                <a href="#" className="text-neutral">Política de Cookies</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-neutral">
              Se inscreva na nossa newsletter
            </h3>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Email" />
              <button type="submit" className="w-full">Inscrever</button>
            </form>
            {
              /* <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground text-neutral">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground text-neutral">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground text-neutral">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground text-neutral">
                <aedin size={24} />
                <span className="sr-only">aedIn</span>
              </a>
              <a href="#" className="text-muted-foreground text-neutral">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div> */
            }
          </div>
        </div>
        <div className="mt-12 border-t border-muted-foreground/10 pt-8 text-center">
          <p className="text-neutral">
            &copy; {new Date().getFullYear()}{" "}
            Camisas de times. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { JSX } from "preact";

export const FootterLink = (props: JSX.IntrinsicElements["a"]) => {
  return <a {...props} className="text-neutral">{props.children}</a>;
};

export const FooterTitle = (props: JSX.IntrinsicElements["h3"]) => {
  return (
    <h3 {...props} className="text-lg font-semibold text-neutral">
      {props.children}
    </h3>
  );
};

export const NewsletterSection = () => {
  return (
    <div className="space-y-4 sm:col-span-2 md:col-span-4 lg:col-span-1">
      <h3 className="text-lg font-semibold text-neutral">
        Se inscreva na nossa newsletter
      </h3>
      <form className="flex flex-col space-y-2">
        <input type="email" placeholder="Email" />
        <button type="submit" className="w-full btn btn-secondary btn-sm">Inscrever</button>
      </form>
    </div>
  );
};

export const SubFooterSection = () => {
  return (
    <div className="mt-12 border-t border-muted-foreground/10 pt-8 text-center">
      <p className="text-neutral">
        &copy; {new Date().getFullYear()}{" "}
        Camisas de times. Todos os direitos reservados.
      </p>
    </div>
  );
};

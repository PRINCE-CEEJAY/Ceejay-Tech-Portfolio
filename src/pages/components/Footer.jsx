import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card flex flex-col border-t border-border mt-12 pt-8 justify-center">
      <p className="text-sm text-muted-foreground ">
        &copy; {new Date().getFullYear()} Ceejay International. All rights
        researved.
      </p>
      <a
        href="#hero"
        className="text-center p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
      >
        <ArrowUp size={20} className="w-full" />
      </a>
    </footer>
  );
};

export default Footer;

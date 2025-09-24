import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="opacity-0 animate-fade-in text-glow">Hi I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Prince{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Ceejay NG
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-2-2xl max-auto opacity-0 animate-fade-in-delay-3 ">
            I am a passionate Front End Web Developer, specializing in React Js
            Library
          </p>
          <div className="pt-4 opacity 0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 justify-center cursor-pointer transform-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;

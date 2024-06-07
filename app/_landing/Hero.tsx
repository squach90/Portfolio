"use client";

import { PropsWithChildren, useState } from "react";
import { Section } from "./Section";
import classNames from "classnames";
import { CustomIcons } from "./icons/CustomIcon";
import { Button } from "@/components/ui/button";
import "../_landing/App.css";

export const Hero = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = () => {
    setIsScrolling(true);
    const section = document.getElementById("calcom");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Durée de l'animation en millisecondes
  };

  return (
    <Section classNames="flex flex-col gap-2 lg:gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold">Hey, I am c3a5m7 👋</h1>
      <p className="text-muted-foreground">
        I am{" "}
        <Code className="whitespace-nowrap">
          <CustomIcons
            className="inline mb-0.5 mr-0.5"
            name="youtube"
            size={18}
          />
          Youtuber
        </Code>{" "}
        and I created a video about <Code>meme</Code> and{" "}
        <Code> aviation </Code>
      </p>

      <div className="mt-4 lg:mt-6 flex items-center flex-wrap gap-4">
        <Button onClick={scrollToSection} size="lg" className="w-fit">
          Schedule a call
        </Button>
        <Button size="lg" variant="ghost" className="w-fit">
          <CustomIcons
            name="twitter"
            size={20}
            className="mr-2 text-foreground"
          />
          @c3a5m7
        </Button>
      </div>
    </Section>
  );
};

export const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span className="px-1 rounded-md inline-flex text-foreground items-center -mx-0.5 bg-accent/20 border-accent border py-1">
      {props.children}
    </span>
  );
};

export default Hero;

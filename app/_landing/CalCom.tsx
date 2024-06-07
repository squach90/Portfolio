"use client";

import { Section } from "./Section";
import { Booker } from "@calcom/atoms";
import { CalComEmbed } from "./CalComEmbed";

export const CalCom = () => {
  return (
    <>
      <Section classNames="mb-0 md:mb-0 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Schedule a call with me
        </h2>
        <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
          30 minutes to talk about your futur on YouTube
        </p>
      </Section>
      <div id="calcom"></div>
      <Section classNames="max-w-4xl mt-8 p-0 md:mt-8 lg:mt-2">
        <CalComEmbed />
      </Section>
    </>
  );
};

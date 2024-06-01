import { Section } from "./Section"
import { YouTubeEmbed } from '@next/third-parties/google'
import Link from "next/link";

export const Footer = () => {
    return (
    <Section classNames="max-w-none w-full border-t mt-32 py-12 md:py-14 gap-4 border-t-accent">
        <div className="max-w-2xl flex flex-col gap-4 m-auto">
            <p className="text-center">
                Made with ❤️ by <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-accent-foreground underline">@squach90</a>
            </p>
            <p className="text-muted-foreground text-center">
                © {new Date().getFullYear()} Squach90. All rights reserved.
            </p>
        </div>
    </Section>
    );
}
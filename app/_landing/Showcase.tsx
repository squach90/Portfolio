import { Section } from "./Section";
import { YouTubeEmbed } from '@next/third-parties/google';
import { Code } from "./Hero";
import Link from "next/link";
import Image from "next/image"

export const Showcase = () => {
    return <Section>
        <h2 className="text-3xl lg:text-4xl font-bold">From 0.01K followers to 0.1K</h2>
        <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
            It's story of <Link href="https://youtube.com/@c3a5m7"><Code>c3a5m7</Code></Link>. It was making it's own video it was no growing FAST. So he call me and I fixed it's channel. 
        </p>
        <br />
        <div className="rounded-md overflow-hidden shadow-md">
            <Image src="/Showcase.webp" alt="video showcase" width={1920} height={1080} className="w-fyll h-auto mt-0 lg:mt-0" />
        </div>
    </Section>;
}
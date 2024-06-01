import { Section } from "./Section"
import { YouTubeEmbed } from '@next/third-parties/google'

export const Work = () => {
    return <Section>
        <h2 className="text-3xl lg:text-4xl font-bold">My best work</h2>
        <p className="text-lg text-muted-foreground mt-2 lg:mt-4">
            This video make 0.5K to 9K of views
        </p>
        <div className="grid grid-cols-2 mt-4 lg:mt-6 gap-2 lg:gap-4">
            <div className="rounded-md overflow-hidden shadow-md">
                <YouTubeEmbed videoid="M4LvTmbbBmM" />
            </div>
            <div className="rounded-md overflow-hidden shadow-md">
                <YouTubeEmbed videoid="pyLDKOAeQR0" />
            </div>
            <div className="rounded-md overflow-hidden shadow-md">
                <YouTubeEmbed videoid="au2Fw95dbJw" />
            </div>
            <div className="rounded-md overflow-hidden shadow-md">
                <YouTubeEmbed videoid="Z2Hzu7JvX8k" />
            </div>
        </div>
    </Section>;
}
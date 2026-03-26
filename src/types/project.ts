export interface ProjectCardProps {
    title: string;
    description?: string;
    slug?: string;
    ctaText?: string;
    className?: string;
    imageCenter: string;
    imageAlt?: string;
    imageLeft?: string;
    imageRight?: string;
    href?: string;
    variant?: 'three-pages' | 'two-pages';
    /** Which side the text panel sits on */
    side?: 'left' | 'right';
    hoverLabelBg?: string;
    hoverLabelText?: string;
}

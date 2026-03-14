export interface ProjectCardProps {
    title: string;
    className?: string;
    imageCenter: string;
    imageAlt?: string;
    imageLeft?: string;
    imageRight?: string;
    titleColor?: string;
    borderColor?: string;
    maskColor?: string;
    href?: string;
    variant?: 'three-pages' | 'two-pages';
    hoverLabelBg?: string;
    hoverLabelText?: string;
}

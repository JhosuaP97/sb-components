/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * This is the message to show in the tag
     */
    label: string;
    /**
     *This is the size of the tag
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     *The whole word is capitalized
     */
    allCaps?: boolean;
    /**
     *Set the color to the tag
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     *Set the custom color to the font
     */
    fontColor?: string;
    /**
     *Set the background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;

import libraryAsset from "@/assets/marsha-portrait-library.png.asset.json";
import joyAsset from "@/assets/marsha-portrait-joy.png.asset.json";
import zebraAsset from "@/assets/marsha-portrait-zebra.png.asset.json";
import circleAsset from "@/assets/marsha-portrait-circle.png.asset.json";

export const portraits = {
  library: libraryAsset.url,
  joy: joyAsset.url,
  zebra: zebraAsset.url,
  circle: circleAsset.url,
};

export const heroSlides: { src: string; alt: string; position?: string }[] = [
  {
    src: portraits.library,
    alt: "Marsha Holland Kahn seated in a quiet library, dressed in black.",
    position: "50% 30%",
  },
  {
    src: portraits.joy,
    alt: "Marsha Holland Kahn smiling in a vibrant painted-print top.",
    position: "50% 25%",
  },
  {
    src: portraits.zebra,
    alt: "Marsha Holland Kahn beside a large zebra painting, arm raised.",
    position: "50% 35%",
  },
];
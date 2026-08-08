import {
  Flame,
  Heart,
  Compass,
  HandHeart,
  Sparkles,
  Sunrise,
  Waves,
  Feather,
  type LucideIcon,
  Church,
  Mountain,
  BookOpen,
  MessagesSquare,
  UsersRound,
  GraduationCap,
} from "lucide-react";

export type Theme = { name: string; blurb: string; Icon: LucideIcon };

export const bookThemes: Theme[] = [
  { name: "Faith", blurb: "Trust that outlasts the season.", Icon: Flame },
  { name: "Healing", blurb: "The quiet, patient work of wholeness.", Icon: Waves },
  { name: "Purpose", blurb: "The reason you were made, gently uncovered.", Icon: Compass },
  { name: "Forgiveness", blurb: "Releasing what was never yours to carry.", Icon: HandHeart },
  { name: "Hope", blurb: "Small, stubborn light in dark rooms.", Icon: Sunrise },
  { name: "Transformation", blurb: "Love finishing what it started.", Icon: Sparkles },
  { name: "Grace", blurb: "The mercy that keeps meeting you.", Icon: Feather },
  { name: "Identity", blurb: "Named, seen, and deeply loved.", Icon: Heart },
];

export const engagementIcons: Record<string, LucideIcon> = {
  flame: Flame,
  church: Church,
  mountain: Mountain,
  "book-open": BookOpen,
  compass: Compass,
  "messages-square": MessagesSquare,
  "users-round": UsersRound,
  "graduation-cap": GraduationCap,
};

export const CONTACT = {
  phone: "(609) 922-4957",
  phoneHref: "tel:+16099224957",
  email: "hello@loveprovokingchange.com",
  city: "Durham, North Carolina",
};

export const SCRIPTURE = {
  text: "Yes, I have loved you with an everlasting love; therefore with loving-kindness have I drawn you and continued My faithfulness to you.",
  ref: "Jeremiah 31:3 (AMPC)",
};

export const BRAND = {
  name: "Love Provoking Change",
  tagline:
    "Encouraging hearts. Empowering lives. Inspiring lasting change through the love of Christ.",
  founder: "Min. Marsha Holland Kahn, M.Div.",
};
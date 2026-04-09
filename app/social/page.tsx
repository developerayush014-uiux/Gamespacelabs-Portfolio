import type { Metadata } from "next";
import SocialClient from "./social-client";

export const metadata: Metadata = {
  title: "Follow Us",
  description: "Stay connected with GameSpace Lab on social media for updates, insights, and behind-the-scenes content.",
};

export default function SocialPage() {
  return <SocialClient />;
}

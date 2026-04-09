import type { Metadata } from "next";
import FaqClient from "./faq-client";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about working with GameSpace Lab.",
};

export default function FaqPage() {
  return <FaqClient />;
}

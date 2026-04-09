import type { Metadata } from "next";
import HelpClient from "./help-client";

export const metadata: Metadata = {
  title: "Help",
  description: "Get support from the GameSpace Lab team. Find answers, contact us, or browse our FAQ.",
};

export default function HelpPage() {
  return <HelpClient />;
}

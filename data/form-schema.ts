// data/form-schema.ts
// Zod-validated contact form schema — JSON-exportable structure

import { z } from "zod";

// ─── JSON Form Definition (CMS-friendly) ─────────────────────────────────────

export const formSchema = {
  id: "contact-form-v1",
  title: "Start a Project",
  description: "Tell us about your project and we'll get back to you within 24 hours.",
  steps: [
    {
      id: "step-1",
      title: "About You",
      description: "Let's start with the basics.",
      fields: [
        {
          id: "fullName",
          type: "text",
          label: "Full Name",
          placeholder: "John Smith",
          required: true,
          validation: { min: 2, max: 80 },
        },
        {
          id: "email",
          type: "email",
          label: "Work Email",
          placeholder: "you@company.com",
          required: true,
          validation: { pattern: "email" },
        },
        {
          id: "phone",
          type: "tel",
          label: "Phone Number",
          placeholder: "+91 70656 34862",
          required: false,
          validation: { pattern: "phone" },
        },
        {
          id: "companyName",
          type: "text",
          label: "Company / Website",
          placeholder: "Acme Inc. or acme.com",
          required: false,
          hint: "Helps us understand if you're a startup, funded company, or individual.",
          validation: { max: 120 },
        },
      ],
    },
    {
      id: "step-2",
      title: "Project Details",
      description: "What are you looking to build?",
      fields: [
        {
          id: "services",
          type: "multi-select",
          label: "Services Required",
          required: true,
          options: [
            { value: "native-android", label: "Native Android Development" },
            { value: "cross-platform", label: "Cross-Platform (Flutter)" },
            { value: "web-app", label: "Web App Development" },
            { value: "backend-api", label: "Backend & API Integration" },
            { value: "app-modernization", label: "App Modernization / Audit" },
            { value: "ux-design", label: "UI/UX Design" },
            { value: "project-management", label: "Project Management" },
          ],
          validation: { min: 1 },
        },
        {
          id: "projectDescription",
          type: "textarea",
          label: "Project Description",
          placeholder: "Briefly describe what you want to build, key features, and any technical requirements...",
          required: true,
          rows: 4,
          validation: { min: 20, max: 1200 },
        },
        {
          id: "timeline",
          type: "select",
          label: "Timeline",
          required: true,
          options: [
            { value: "asap", label: "ASAP (within 1 month)" },
            { value: "1-3months", label: "1–3 months" },
            { value: "3-6months", label: "3–6 months" },
            { value: "flexible", label: "Flexible / Not sure yet" },
          ],
        },
      ],
    },
    {
      id: "step-3",
      title: "Budget & Files",
      description: "Last step — almost there.",
      fields: [
        {
          id: "budget",
          type: "select",
          label: "Estimated Budget",
          required: true,
          hint: "This helps us scope the right team for your project.",
          options: [
            { value: "under-5k", label: "Under $5,000" },
            { value: "5k-15k", label: "$5,000 – $15,000" },
            { value: "15k-50k", label: "$15,000 – $50,000" },
            { value: "50k-plus", label: "$50,000+" },
            { value: "discuss", label: "Let's discuss" },
          ],
        },
        {
          id: "referral",
          type: "select",
          label: "How did you hear about us?",
          required: false,
          options: [
            { value: "google", label: "Google Search" },
            { value: "linkedin", label: "LinkedIn" },
            { value: "referral", label: "Referral / Word of Mouth" },
            { value: "twitter", label: "Twitter / X" },
            { value: "other", label: "Other" },
          ],
        },
        {
          id: "attachment",
          type: "file",
          label: "Attach Files (Optional)",
          hint: "Brief, wireframes, designs, or relevant documents. Max 10MB.",
          required: false,
          accept: ".pdf,.doc,.docx,.png,.jpg,.jpeg,.fig",
          maxSizeMb: 10,
        },
        {
          id: "agreeTerms",
          type: "checkbox",
          label: "I agree to the Privacy Policy and consent to GameSpace Lab contacting me about my inquiry.",
          required: true,
        },
      ],
    },
  ],
};

// ─── Zod Validation Schema ────────────────────────────────────────────────────

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[\+\d\s\-\(\)]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  companyName: z.string().max(120, "Company name is too long").optional().or(z.literal("")),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectDescription: z
    .string()
    .min(20, "Please describe your project in at least 20 characters")
    .max(1200, "Description is too long"),
  timeline: z.enum(["asap", "1-3months", "3-6months", "flexible"], {
    errorMap: () => ({ message: "Please select a timeline" }),
  }),
  budget: z.enum(["under-5k", "5k-15k", "15k-50k", "50k-plus", "discuss"], {
    errorMap: () => ({ message: "Please select a budget range" }),
  }),
  referral: z.enum(["google", "linkedin", "referral", "twitter", "other"]).optional(),
  agreeTerms: z.literal(true, { errorMap: () => ({ message: "You must agree to continue" }) }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

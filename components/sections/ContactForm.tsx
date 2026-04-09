"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Upload,
  AlertCircle,
  Loader2,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";
import { contactFormSchema, type ContactFormData, formSchema } from "@/data/form-schema";
import { cn } from "@/lib/utils";

// Type definitions for form fields
type Option = { value: string; label: string };
type FieldWithOptions = {
  id: string;
  type: string;
  label: string;
  required: boolean;
  options: Option[];
  validation?: any;
};

const STEPS = formSchema.steps;

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  // Field step mapping
  const stepFields: Record<number, (keyof ContactFormData)[]> = {
    0: ["fullName", "email", "phone", "companyName"],
    1: ["services", "projectDescription", "timeline"],
    2: ["budget", "agreeTerms"],
  };

  const nextStep = async () => {
    const valid = await trigger(stepFields[currentStep]);
    if (valid) setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const toggleService = (val: string) => {
    const next = selectedServices.includes(val)
      ? selectedServices.filter((s) => s !== val)
      : [...selectedServices, val];
    setSelectedServices(next);
    setValue("services", next, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within 24 hours.");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-12 border border-green-neon/30 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-neon/10 border border-green-neon/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-neon" />
        </div>
        <h2 className="font-display font-bold text-3xl text-white mb-4">You&apos;re in!</h2>
        <p className="text-white/50 text-lg mb-2">We&apos;ve received your message.</p>
        <p className="text-white/40 text-base">
          Expect a reply within <span className="text-cyan-glow font-semibold">24 hours</span>.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-3xl border border-white/[0.06] overflow-hidden">
      {/* Progress bar */}
      <div className="h-0.5 bg-white/[0.05]">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-glow to-green-neon"
          animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-white/[0.05]">
        {STEPS.map((step, i) => (
          <div key={step.id} className="flex items-center gap-2">
            <div
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all duration-300",
                i < currentStep
                  ? "bg-green-neon/20 border border-green-neon/40 text-green-neon"
                  : i === currentStep
                  ? "bg-cyan-glow/20 border border-cyan-glow/40 text-cyan-glow"
                  : "bg-white/[0.04] border border-white/[0.08] text-white/30"
              )}
            >
              {i < currentStep ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
            </div>
            <span
              className={cn(
                "text-xs font-medium hidden sm:block transition-colors",
                i === currentStep ? "text-white" : "text-white/30"
              )}
            >
              {step.title}
            </span>
            {i < STEPS.length - 1 && (
              <div className="w-8 sm:w-16 h-px bg-white/[0.06] ml-2 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-8">
          {/* Step title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-cyan-glow font-mono text-xs tracking-widest uppercase mb-1">
                Step {currentStep + 1} of {STEPS.length}
              </p>
              <h3 className="font-display font-bold text-2xl text-white mb-1">
                {STEPS[currentStep].title}
              </h3>
              <p className="text-white/40 text-sm mb-8">{STEPS[currentStep].description}</p>

              {/* ── STEP 1: About You ── */}
              {currentStep === 0 && (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name *"
                      error={errors.fullName?.message}
                    >
                      <input
                        {...register("fullName")}
                        placeholder="John Smith"
                        className={cn("form-input w-full px-4 py-3 rounded-xl text-sm", errors.fullName && "error")}
                      />
                    </FormField>
                    <FormField label="Work Email *" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@company.com"
                        className={cn("form-input w-full px-4 py-3 rounded-xl text-sm", errors.email && "error")}
                      />
                    </FormField>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Phone Number" error={errors.phone?.message}>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={cn("form-input w-full px-4 py-3 rounded-xl text-sm", errors.phone && "error")}
                      />
                    </FormField>
                    <FormField
                      label="Company / Website"
                      hint="Helps us understand your business context."
                      error={errors.companyName?.message}
                    >
                      <input
                        {...register("companyName")}
                        placeholder="Acme Inc. or acme.com"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </FormField>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Project Details ── */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <FormField
                    label="Services Required *"
                    error={errors.services?.message}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(formSchema.steps[1].fields[0] as FieldWithOptions).options?.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => toggleService(opt.value)}
                          className={cn(
                            "text-left px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200",
                            selectedServices.includes(opt.value)
                              ? "bg-cyan-glow/10 border-cyan-glow/40 text-cyan-glow"
                              : "bg-white/[0.02] border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={cn(
                                "w-4 h-4 rounded flex items-center justify-center border flex-shrink-0 transition-all",
                                selectedServices.includes(opt.value)
                                  ? "bg-cyan-glow/30 border-cyan-glow"
                                  : "border-white/20"
                              )}
                            >
                              {selectedServices.includes(opt.value) && (
                                <CheckCircle2 className="w-3 h-3 text-cyan-glow" />
                              )}
                            </span>
                            {opt.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </FormField>

                  <FormField
                    label="Project Description *"
                    error={errors.projectDescription?.message}
                  >
                    <textarea
                      {...register("projectDescription")}
                      rows={4}
                      placeholder="Describe what you want to build, key features, and any technical requirements..."
                      className={cn(
                        "form-input w-full px-4 py-3 rounded-xl text-sm resize-none",
                        errors.projectDescription && "error"
                      )}
                    />
                  </FormField>

                  <FormField label="Timeline *" error={errors.timeline?.message}>
                    <select
                      {...register("timeline")}
                      className={cn(
                        "form-input w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer",
                        errors.timeline && "error"
                      )}
                    >
                      <option value="" disabled>Select timeline...</option>
                      <option value="asap">ASAP (within 1 month)</option>
                      <option value="1-3months">1–3 months</option>
                      <option value="3-6months">3–6 months</option>
                      <option value="flexible">Flexible / Not sure yet</option>
                    </select>
                  </FormField>
                </div>
              )}

              {/* ── STEP 3: Budget & Files ── */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <FormField
                    label="Estimated Budget *"
                    hint="Helps us scope the right team and approach for you."
                    error={errors.budget?.message}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { value: "under-5k", label: "Under $5,000" },
                        { value: "5k-15k", label: "$5,000 – $15,000" },
                        { value: "15k-50k", label: "$15,000 – $50,000" },
                        { value: "50k-plus", label: "$50,000+" },
                        { value: "discuss", label: "Let's discuss" },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm border cursor-pointer transition-all",
                            watch("budget") === opt.value
                              ? "bg-cyan-glow/10 border-cyan-glow/40 text-cyan-glow"
                              : "bg-white/[0.02] border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white"
                          )}
                        >
                          <input
                            {...register("budget")}
                            type="radio"
                            value={opt.value}
                            className="sr-only"
                          />
                          <span
                            className={cn(
                              "w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all",
                              watch("budget") === opt.value
                                ? "border-cyan-glow bg-cyan-glow/30"
                                : "border-white/20"
                            )}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </FormField>

                  <FormField label="How did you hear about us?">
                    <select
                      {...register("referral")}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select...</option>
                      <option value="google">Google Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral / Word of Mouth</option>
                      <option value="twitter">Twitter / X</option>
                      <option value="other">Other</option>
                    </select>
                  </FormField>

                  {/* File upload */}
                  <FormField
                    label="Attach Files (Optional)"
                    hint="Brief, wireframes, or reference designs. PDF, Doc, PNG, JPG — max 10MB."
                  >
                    <label className="flex flex-col items-center justify-center gap-3 w-full h-28 rounded-xl border-2 border-dashed border-white/[0.1] hover:border-cyan-glow/30 transition-all cursor-pointer bg-white/[0.01] group">
                      <input
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.fig"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) setFileName(f.name);
                        }}
                      />
                      <Upload className="w-6 h-6 text-white/30 group-hover:text-cyan-glow/60 transition-colors" />
                      <span className="text-sm text-white/30 group-hover:text-white/50 transition-colors">
                        {fileName || "Drop a file or click to upload"}
                      </span>
                    </label>
                  </FormField>

                  {/* Consent */}
                  <FormField error={errors.agreeTerms?.message}>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        {...register("agreeTerms")}
                        type="checkbox"
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          "w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border transition-all",
                          watch("agreeTerms")
                            ? "bg-cyan-glow/20 border-cyan-glow"
                            : "bg-white/[0.04] border-white/20"
                        )}
                      >
                        {watch("agreeTerms") && <CheckCircle2 className="w-3 h-3 text-cyan-glow" />}
                      </span>
                      <span className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                        I agree to the Privacy Policy and consent to GameSpace Lab contacting me
                        about my inquiry.
                      </span>
                    </label>
                  </FormField>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="px-8 pb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          {currentStep < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold font-display"
            >
              <span className="relative z-10">Continue</span>
              <ChevronRight className="w-4 h-4 relative z-10" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold font-display disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 relative z-10 animate-spin" />
                  <span className="relative z-10">Sending...</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-4 h-4 relative z-10" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// ── Sub-component ─────────────────────────────────────────────────────────────
function FormField({
  label,
  hint,
  error,
  children,
}: {
  label?: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white/70">{label}</label>
      )}
      {hint && <p className="text-xs text-white/30">{hint}</p>}
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1.5 text-red-400 text-xs"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

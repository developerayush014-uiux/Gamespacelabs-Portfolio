"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, ArrowRight, ArrowLeft, Upload, Loader2 } from "lucide-react";
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

const STEP_FIELDS: Record<number, (keyof ContactFormData)[]> = {
  0: ["fullName", "email", "phone", "companyName"],
  1: ["services", "projectDescription", "timeline"],
  2: ["budget", "agreeTerms"],
};

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const totalSteps = formSchema.steps.length;

  const {
    register,
    handleSubmit,
    trigger,
    control,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { services: [], agreeTerms: undefined },
  });

  const handleNext = async () => {
    const fields = STEP_FIELDS[step];
    const valid = await trigger(fields);
    if (valid) setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000)); // Simulated API call
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We&apos;ll respond within 24 hours.");
  };

  const toggleService = (value: string) => {
    const updated = selectedServices.includes(value)
      ? selectedServices.filter((s) => s !== value)
      : [...selectedServices, value];
    setSelectedServices(updated);
    setValue("services", updated, { shouldValidate: true });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-neon/10 border border-green-neon/30 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-neon" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-white/50 max-w-sm mx-auto">
          Thanks for reaching out. We&#39;ll review your project and get back to you within{" "}
          <span className="text-white/80 font-medium">24 hours</span>.
        </p>
      </motion.div>
    );
  }

  const currentStepData = formSchema.steps[step];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {formSchema.steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-2">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                i < step
                  ? "bg-green-neon/20 border border-green-neon/40 text-green-neon"
                  : i === step
                  ? "bg-cyan-glow/20 border border-cyan-glow/40 text-cyan-glow"
                  : "bg-white/[0.04] border border-white/[0.08] text-white/30"
              )}
            >
              {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div className={cn("h-px flex-1 w-8 transition-all duration-500", i < step ? "bg-green-neon/30" : "bg-white/[0.06]")} />
            )}
          </div>
        ))}
        <div className="ml-2">
          <p className="text-white/30 text-xs font-mono">Step {step + 1} of {totalSteps}</p>
        </div>
      </div>

      {/* Step header */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-display text-xl font-bold text-white mb-1">{currentStepData.title}</h3>
          <p className="text-white/40 text-sm mb-8">{currentStepData.description}</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ── Step 1: About You ── */}
            {step === 0 && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" required error={errors.fullName?.message}>
                    <input {...register("fullName")} placeholder="John Smith" className={cn("form-input w-full px-4 py-3 rounded-xl", errors.fullName && "error")} />
                  </Field>
                  <Field label="Work Email" required error={errors.email?.message}>
                    <input {...register("email")} type="email" placeholder="you@company.com" className={cn("form-input w-full px-4 py-3 rounded-xl", errors.email && "error")} />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone Number" error={errors.phone?.message}>
                    <input {...register("phone")} type="tel" placeholder="+91 98765 43210" className="form-input w-full px-4 py-3 rounded-xl" />
                  </Field>
                  <Field label="Company / Website" hint="Startup, agency, or individual?" error={errors.companyName?.message}>
                    <input {...register("companyName")} placeholder="Acme Inc. or acme.com" className="form-input w-full px-4 py-3 rounded-xl" />
                  </Field>
                </div>
              </div>
            )}

            {/* ── Step 2: Project Details ── */}
            {step === 1 && (
              <div className="space-y-5">
                <Field label="Services Required" required error={errors.services?.message}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(formSchema.steps[1].fields.find(f => f.id === "services") as FieldWithOptions)?.options?.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => toggleService(opt.value)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left transition-all",
                          selectedServices.includes(opt.value)
                            ? "border-cyan-glow/50 bg-cyan-glow/10 text-cyan-glow"
                            : "border-white/[0.08] bg-white/[0.02] text-white/50 hover:border-white/20 hover:text-white/70"
                        )}
                      >
                        <div className={cn("w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all",
                          selectedServices.includes(opt.value) ? "border-cyan-glow bg-cyan-glow/20" : "border-white/20")}>
                          {selectedServices.includes(opt.value) && <Check className="w-2.5 h-2.5 text-cyan-glow" />}
                        </div>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Project Description" required error={errors.projectDescription?.message}>
                  <textarea
                    {...register("projectDescription")}
                    rows={4}
                    placeholder="Briefly describe what you want to build, key features, and any technical requirements..."
                    className={cn("form-input w-full px-4 py-3 rounded-xl resize-none", errors.projectDescription && "error")}
                  />
                </Field>

                <Field label="Timeline" required error={errors.timeline?.message}>
                  <Controller name="timeline" control={control} render={({ field }) => (
                    <select {...field} className={cn("form-input w-full px-4 py-3 rounded-xl appearance-none", errors.timeline && "error")}>
                      <option value="">Select timeline...</option>
                      {(formSchema.steps[1].fields.find(f => f.id === "timeline") as FieldWithOptions)?.options?.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  )} />
                </Field>
              </div>
            )}

            {/* ── Step 3: Budget & Files ── */}
            {step === 2 && (
              <div className="space-y-5">
                <Field label="Estimated Budget" required hint="Helps us scope the right team." error={errors.budget?.message}>
                  <Controller name="budget" control={control} render={({ field }) => (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(formSchema.steps[2].fields.find(f => f.id === "budget") as FieldWithOptions)?.options?.map(opt => (
                        <button key={opt.value} type="button" onClick={() => field.onChange(opt.value)}
                          className={cn("px-4 py-3 rounded-xl border text-sm text-left transition-all",
                            field.value === opt.value ? "border-cyan-glow/50 bg-cyan-glow/10 text-cyan-glow" : "border-white/[0.08] bg-white/[0.02] text-white/50 hover:border-white/20 hover:text-white/70")}>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )} />
                </Field>

                <Field label="How did you hear about us?">
                  <Controller name="referral" control={control} render={({ field }) => (
                    <select {...field} className="form-input w-full px-4 py-3 rounded-xl appearance-none">
                      <option value="">Select...</option>
                      {(formSchema.steps[2].fields.find(f => f.id === "referral") as FieldWithOptions)?.options?.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  )} />
                </Field>

                {/* File upload hint */}
                <div className="border border-dashed border-white/[0.12] rounded-xl p-6 flex flex-col items-center gap-3 bg-white/[0.01]">
                  <Upload className="w-6 h-6 text-white/30" />
                  <div className="text-center">
                    <p className="text-white/50 text-sm">Attach files (optional)</p>
                    <p className="text-white/30 text-xs mt-0.5">Brief, wireframes, designs — max 10MB</p>
                  </div>
                  <button type="button" className="btn-ghost px-4 py-2 rounded-lg text-xs font-medium">Browse Files</button>
                </div>

                <Field error={errors.agreeTerms?.message}>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <Controller name="agreeTerms" control={control} render={({ field }) => (
                      <button type="button" onClick={() => field.onChange(field.value ? undefined : true)}
                        className={cn("w-5 h-5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-all",
                          field.value ? "border-cyan-glow bg-cyan-glow/20" : "border-white/20 group-hover:border-white/40")}>
                        {field.value && <Check className="w-3 h-3 text-cyan-glow" />}
                      </button>
                    )} />
                    <span className="text-white/40 text-sm leading-relaxed">
                      I agree to the <a href="/privacy" className="text-cyan-glow hover:underline">Privacy Policy</a> and consent to GameSpace Lab contacting me about my inquiry.
                    </span>
                  </label>
                </Field>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
              {step > 0 ? (
                <button type="button" onClick={handleBack} className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {step < totalSteps - 1 ? (
                <button type="button" onClick={handleNext} className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold font-display">
                  <span className="relative z-10">Next Step</span>
                  <ArrowRight className="relative z-10 w-4 h-4" />
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold font-display disabled:opacity-60">
                  {isSubmitting ? (
                    <><Loader2 className="relative z-10 w-4 h-4 animate-spin" /><span className="relative z-10">Sending...</span></>
                  ) : (
                    <><span className="relative z-10">Send Message</span><ArrowRight className="relative z-10 w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Field({
  label, required, hint, error, children,
}: {
  label?: string; required?: boolean; hint?: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-white/70 mb-2">
          {label}
          {required && <span className="text-cyan-glow ml-0.5">*</span>}
        </label>
      )}
      {hint && <p className="text-white/30 text-xs mb-2">{hint}</p>}
      {children}
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 mt-2 text-red-400 text-xs">
          <AlertCircle className="w-3.5 h-3.5" />{error}
        </motion.p>
      )}
    </div>
  );
}

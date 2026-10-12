"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Headphones, ShieldCheck } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      problemType: "",
      contactMethod: "",
      contactTime: "",
      description: "",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Hidden honeypot check
    if (data.honeypot) {
      return;
    }

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formType: "contact",
            ...data,
            submittedAt: new Date().toISOString(),
          }),
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSuccess(true);
    form.reset();
  };

  return (
    <section id="contact" className="bg-[#F8FAFC] py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#FF6B00] shadow-sm">
            <Headphones className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Free 1-on-1 Consultation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0A2540] font-bold tracking-tight">
            Get your credit issue reviewed
          </h2>
          <p className="text-[#4A5568] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your credit report challenge, and our specialists will review your case and reach out with a direct action plan.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden">
          {/* Top Brand Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0072CE] via-[#00C4B4] to-[#FF6B00]"></div>

          {isSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[#00C4B4]/15 text-[#00C4B4] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#0A2540]">
                Intake Request Received
              </h3>
              <p className="text-[#4A5568] text-sm max-w-md mx-auto leading-relaxed">
                Thank you! Our credit specialist is reviewing your submission and will get in touch during your requested time slot.
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-2 border-[#0072CE] text-[#0072CE] hover:bg-[#0072CE]/10 font-semibold px-6 py-2.5 rounded-lg"
                  onClick={() => setIsSuccess(false)}
                >
                  Submit another request
                </Button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} method="POST" className="space-y-8">
                {/* Security Note per W-05 */}
                <div className="bg-[#FFFBEB] border border-[#FCD34D] p-4 rounded-xl text-xs sm:text-sm text-[#92400E] font-medium flex items-start gap-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong className="text-[#78350F] block">Zero Credential Request Policy:</strong>
                    <span>We never ask for your PAN, Aadhaar, bank details, passwords or OTP. Please don&apos;t enter them here.</span>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit number" type="tel" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Email Address (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">City</FormLabel>
                        <FormControl>
                          <Input placeholder="Hyderabad" className="border-line focus-visible:ring-[#004AAD]" {...field} />
                        </FormControl>
                        <FormMessage className="text-xs text-muted-text" />
                      </FormItem>
                    )}
                  />
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name="problemType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-ink">Primary Issue</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-line focus:ring-[#004AAD]">
                                <SelectValue placeholder="Select an issue" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="score_drop">Unexplained Score Drop</SelectItem>
                              <SelectItem value="late_payment">Incorrect Late Payment</SelectItem>
                              <SelectItem value="settlement">Settlement/Default Status</SelectItem>
                              <SelectItem value="identity_theft">Identity Theft / Fraud</SelectItem>
                              <SelectItem value="loan_assistance">Looking for a Loan</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs text-muted-text" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:col-span-2">
                    <FormField
                      control={form.control}
                      name="contactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-ink">Contact Method</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-line focus:ring-[#004AAD]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="phone">Phone Call</SelectItem>
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs text-muted-text" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-ink">Best Time</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-line focus:ring-[#004AAD]">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                              <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs text-muted-text" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ink">Short Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe what happened..."
                          className="resize-none border-line focus-visible:ring-[#004AAD]"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-muted-text" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border border-line p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-[#004AAD] data-[state=checked]:text-white border-[#004AAD]"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">

                        <FormLabel className="text-[12px] text-muted-text leading-snug cursor-pointer select-none font-normal">
                          <strong className="text-ink font-semibold">I agree:</strong>We never request sensitive data without your explicit approval. Read our{" "}
                          <a href="/privacy" className="text-[#004AAD] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-1 rounded-sm" target="_blank" rel="noopener noreferrer">Privacy Policy</a>{" "}
                          and{" "}
                          <a href="/terms" className="text-[#004AAD] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AAD] focus-visible:ring-offset-1 rounded-sm" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
                        </FormLabel>
                        <FormMessage className="text-xs text-muted-text" />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Honeypot field - hidden from users but catches bots */}
                <FormField
                  control={form.control}
                  name="honeypot"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input tabIndex={-1} autoComplete="off" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Global Error Summary (if any fields have errors) */}
                {Object.keys(form.formState.errors).length > 0 && (
                  <div className="p-3 bg-[#FEF2F2] border border-[#B42318]/20 rounded-lg text-sm text-[#B42318] font-medium">
                    Please correct the highlighted fields above before submitting.
                  </div>
                )}

                <p className="text-[13px] text-[#718096] italic">
                  We value your privacy. We will never sell your details or initiate unsolicited marketing phone calls.
                </p>
                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full md:w-auto bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-base px-10 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {form.formState.isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <span>Get your credit issue reviewed &rarr;</span>
                  )}
                </button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}





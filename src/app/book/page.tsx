"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Video, 
  Phone, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  FileSearch, 
  Sparkles,
  HelpCircle,
  Mail,
  UserCheck
} from "lucide-react";
import Link from "next/link";

const bookingSchema = z.object({
  name: z.string().min(2, "Full name is required."),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit Indian mobile number."),
  email: z.string().email("Please enter a valid email address."),
  city: z.string().min(2, "City is required."),
  meetingType: z.string().min(1, "Please select consultation format."),
  dateTime: z.string().min(1, "Please select your preferred date and time."),
  topic: z.string().min(1, "Please select the primary issue."),
  description: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookMeetingPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      meetingType: "",
      dateTime: "",
      topic: "",
      description: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    if (data.honeypot) return;

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
            formType: "booking",
            ...data,
            submittedAt: new Date().toISOString(),
          }),
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
    }
    
    setSubmittedData(data);
    setIsSuccess(true);
    form.reset();
  };

  return (
    <>
      <Header />
      <main className="pt-[74px] min-h-screen bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Context, Deliverables & Security */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0072CE] shadow-sm">
                  <Video className="w-3.5 h-3.5 text-[#0072CE]" />
                  <span>1-on-1 Specialist Advisory</span>
                </div>

              
                
                <h1 className="text-3xl sm:text-4xl font-heading text-[#0A2540] font-bold tracking-tight leading-tight">
                  Book Your Forensic Credit Consultation
                </h1>

                    {/* Session Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#0072CE]/20 text-xs font-semibold text-[#0072CE]">
                  <Clock className="w-3.5 h-3.5" />
                  30-Minute Deep Dive
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6FAF8] border border-[#00C4B4]/20 text-xs font-semibold text-[#00C4B4]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Zero Bureau Inquiries
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5EB] border border-[#FF6B00]/20 text-xs font-semibold text-[#FF6B00]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% Free Consultation
                </span>
              </div>
                
                <p className="text-[#4A5568] text-base leading-relaxed">
                  Schedule a dedicated session with a senior credit analyst. We review your multi-bureau records line-by-line, diagnose loan roadblocks, and formulate an official dispute strategy.
                </p>
              </div>

              {/* Quick Perks / Value Props */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#718096]">
                  What You Get in This Session
                </h3>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EBF8FF] text-[#0072CE] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileSearch className="w-4 h-4 text-[#0072CE]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0A2540]">Line-by-Line Bureau Audit</h4>
                      <p className="text-xs text-[#718096] mt-0.5 leading-relaxed">
                        Cross-checking CIBIL, Experian, Equifax, and CRIF to spot phantom balances, DPD delays, and reporting mismatches.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF5EB] text-[#FF6B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0A2540]">Dispute Viability Assessment</h4>
                      <p className="text-xs text-[#718096] mt-0.5 leading-relaxed">
                        Evaluating whether your negative flags (such as &apos;Settled&apos; vs &apos;Closed&apos; or identity theft) are eligible for official deletion.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E6FAF8] text-[#00C4B4] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <UserCheck className="w-4 h-4 text-[#00C4B4]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0A2540]">Loan Approval Roadmap</h4>
                      <p className="text-xs text-[#718096] mt-0.5 leading-relaxed">
                        Guidance on pre-qualifying for home, personal, or business loans with partner banks without triggering hard inquiry hits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upgraded Data Security & Zero Credential Policy Card */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-md flex items-start gap-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00C4B4] to-[#0072CE]"></div>
                <div className="w-10 h-10 rounded-xl bg-[#EBF8FF] border border-[#0072CE]/15 text-[#0072CE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#0072CE]" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-heading text-sm font-bold text-[#0A2540]">
                      Zero Credential Policy &amp; Confidentiality
                    </h4>
                    <span className="text-[10px] font-bold text-[#208a34] bg-[#4CD964]/15 px-2.5 py-0.5 rounded-full">
                      100% Consent Based
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed">
                    We work with you and on mutual discussion based on the problem you have. We only require your permission and input for any necessary steps or file reviews, keeping your case files in complete enterprise privacy.
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 border-t border-[#E2E8F0] text-[11px] text-[#718096]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4CD964]" />
                      Mutual Discussion First
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4CD964]" />
                      Explicit Permission Required
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4CD964]" />
                      Strict Case Confidentiality
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
                {/* Brand Accent Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#0072CE] to-[#00C4B4]"></div>

                {isSuccess ? (
                  <div className="text-center py-12 space-y-5">
                    <div className="w-16 h-16 bg-[#00C4B4]/15 text-[#00C4B4] rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">
                      ✓
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl font-bold text-[#0A2540]">
                        Consultation Slot Requested!
                      </h3>
                      <p className="text-[#4A5568] text-sm max-w-md mx-auto leading-relaxed">
                        Thank you{submittedData?.name ? `, ${submittedData.name}` : ""}! Our senior credit specialist is preparing your case file and will reach out with the meeting link for your requested time.
                      </p>
                    </div>

                    {submittedData?.dateTime && (
                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] max-w-sm mx-auto text-xs text-left space-y-2">
                        <div className="flex items-center justify-between text-[#718096]">
                          <span>Requested Date &amp; Time:</span>
                          <span className="font-bold text-[#0A2540]">
                            {new Date(submittedData.dateTime).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[#718096]">
                          <span>Format:</span>
                          <span className="font-bold text-[#0072CE] capitalize">
                            {submittedData.meetingType === "video" ? "Video Screen-Share" : "Phone Call"}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        href="/"
                        className="w-full sm:w-auto bg-[#0072CE] hover:bg-[#005bb5] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md transition-all text-center"
                      >
                        Return to Homepage
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto border-[#E2E8F0] text-[#0A2540] hover:bg-slate-50 font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl"
                        onClick={() => setIsSuccess(false)}
                      >
                        Book Another Session
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6 space-y-1">
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0A2540]">
                        Reserve Your Consultation Slot
                      </h2>
                      <p className="text-xs sm:text-sm text-[#718096]">
                        Fill in your details below to schedule an appointment with a credit analyst.
                      </p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        {/* Name & Mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-[#0A2540]">Full Name *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="e.g. Ramesh Kumar" 
                                    className="border-[#E2E8F0] focus-visible:ring-[#0072CE] text-sm" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-xs text-red-500" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-[#0A2540]">Mobile Number *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="10-digit mobile number" 
                                    type="tel" 
                                    className="border-[#E2E8F0] focus-visible:ring-[#0072CE] text-sm" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-xs text-red-500" />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Email & City */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-[#0A2540]">Email Address *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="name@example.com" 
                                    type="email" 
                                    className="border-[#E2E8F0] focus-visible:ring-[#0072CE] text-sm" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-xs text-red-500" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-[#0A2540]">City *</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="e.g. Hyderabad / Vijayawada" 
                                    className="border-[#E2E8F0] focus-visible:ring-[#0072CE] text-sm" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-xs text-red-500" />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Consultation Format & Date-Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="meetingType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-[#0A2540]">Consultation Format *</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="border-[#E2E8F0] focus:ring-[#0072CE] text-sm">
                                      <SelectValue placeholder="Select consultation format" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-white border-[#E2E8F0] shadow-lg">
                                    <SelectItem value="Screen-Share Video (Google Meet)">Screen-Share Video (Google Meet)</SelectItem>
                                    <SelectItem value="Phone Voice Call">Phone Voice Call</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-xs text-red-500" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="dateTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs font-bold text-[#0A2540]">Preferred Date &amp; Time *</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="datetime-local" 
                                    className="border-[#E2E8F0] focus-visible:ring-[#0072CE] text-sm" 
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage className="text-xs text-red-500" />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Primary Issue / Topic */}
                        <FormField
                          control={form.control}
                          name="topic"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-[#0A2540]">Primary Issue to Discuss *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="border-[#E2E8F0] focus:ring-[#0072CE] text-sm">
                                    <SelectValue placeholder="Select your credit challenge" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white border-[#E2E8F0] shadow-lg">
                                  <SelectItem value="closed_loan_active">Closed Loan Still Reported Active</SelectItem>
                                  <SelectItem value="late_payment_error">Erroneous Late Payment (30/60 DPD Tag)</SelectItem>
                                  <SelectItem value="settlement_flag">Settlement / Written-Off Status Flag</SelectItem>
                                  <SelectItem value="identity_fraud">Identity Theft / Commingled Duplicate PAN</SelectItem>
                                  <SelectItem value="excessive_inquiries">Excessive Hard Inquiries Clean-Up</SelectItem>
                                  <SelectItem value="credit_utilization">Credit Card Utilization Optimization</SelectItem>
                                  <SelectItem value="loan_eligibility">Pre-Loan Assessment (Home / Personal / MSME)</SelectItem>
                                  <SelectItem value="other">Other Dispute / Report Consultation</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-xs text-red-500" />
                            </FormItem>
                          )}
                        />

                        {/* Case Description (Optional) */}
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold text-[#0A2540]">
                                Brief Case Details (Optional)
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Mention any specific banks involved (e.g. HDFC, SBI), recent score drop, or loan rejection history..."
                                  className="resize-none border-[#E2E8F0] focus-visible:ring-[#0072CE] text-sm"
                                  rows={3}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-xs text-red-500" />
                            </FormItem>
                          )}
                        />

                        {/* Hidden Honeypot for Anti-Spam */}
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

                        {/* Submit Button */}
                        <div className="pt-2">
                          <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="w-full bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-sm py-4 rounded-xl shadow-md hover:shadow-orange-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>
                              {form.formState.isSubmitting ? "Submitting Booking..." : "Confirm Consultation Request"}
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>

                        <p className="text-[11px] text-[#718096] text-center pt-1 leading-relaxed">
                          By submitting, you agree to our confidential consultation terms. We will never sell your details or initiate unsolicited spam calls.
                        </p>
                      </form>
                    </Form>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* How Your Consultation Works - 3 Step Flow */}
          <div className="mt-16 pt-12 border-t border-[#E2E8F0] space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0072CE] bg-[#EBF8FF] px-3 py-1 rounded-full">
                Simple 3-Step Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0A2540]">
                How Your Consultation Works
              </h2>
              <p className="text-xs sm:text-sm text-[#718096]">
                From booking to receiving your customized dispute resolution blueprint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h4 className="font-bold text-base text-[#0A2540]">1. Select Your Slot</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Choose a date, time, and format (video or phone) that fits your schedule, and briefly describe the bank discrepancy.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h4 className="font-bold text-base text-[#0A2540]">2. Get Calendar Invite</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  You receive an instant confirmation email with direct meeting joining instructions or confirmed callback schedule.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#00C4B4]/10 text-[#00C4B4] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h4 className="font-bold text-base text-[#0A2540]">3. 1-on-1 Action Plan</h4>
                <p className="text-xs text-[#718096] leading-relaxed">
                  Our credit specialist performs a forensic analysis of your reports with 0 bureau score impact and outlines your dispute steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

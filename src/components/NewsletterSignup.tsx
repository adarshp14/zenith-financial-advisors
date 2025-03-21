"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ScrollAnimation from "./ScrollAnimation";

// Form schema for newsletter signup
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }).optional(),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus("submitting");

    try {
      // In a real app, you'd submit this to a newsletter service API
      // This is a simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Newsletter signup:", data);
      setStatus("success");
      setStatusMessage("Thank you for subscribing to our newsletter!");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("Newsletter signup error:", error);
      setStatus("error");
      setStatusMessage("There was an error processing your subscription. Please try again.");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-in">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-primary text-white p-8 md:w-1/2">
                <div className="flex items-center mb-4">
                  <Mail className="mr-2 text-secondary" size={28} />
                  <h2 className="text-2xl font-playfair">Tax & Finance Updates</h2>
                </div>
                <p className="mb-4">
                  Stay informed with the latest tax regulations, financial strategies, and expert advice delivered
                  directly to your inbox.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Tax deadline reminders</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Regulatory changes that affect you</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Expert financial planning tips</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Exclusive content for subscribers</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-200">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              <div className="p-8 md:w-1/2">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Join Our Newsletter
                </h3>

                {status === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
                    <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name (Optional)</label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className={errors.firstName ? "border-red-500" : ""}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={errors.email ? "border-red-500" : ""}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white transition-colors"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

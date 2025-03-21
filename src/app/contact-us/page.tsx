"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

// Define the form schema with validation rules
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactUsPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formStatusMessage, setFormStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("submitting");

    try {
      // In a real application, you would send the form data to a backend service
      // For this demo, we'll simulate a successful submission after a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Form submitted:", data);
      setFormStatus("success");
      setFormStatusMessage("Thank you for your message! Our team will contact you soon.");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setFormStatusMessage("There was an error submitting your form. Please try again later.");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormStatusMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <NavBar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-3xl md:text-4xl font-playfair text-primary mb-4">Contact Us</h1>
            <p className="text-muted-foreground mb-12 max-w-3xl">
              We're here to help with your tax and financial questions. Reach out to our team of experts
              using the form below or contact us directly.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimation animation="slide-in-bottom" delay={100}>
              <div className="flex flex-col items-center text-center p-6 bg-light-gray rounded-lg shadow-md hover-lift">
                <Mail className="text-secondary mb-4" size={32} />
                <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
                <p className="text-muted-foreground">contact@zenithfinancialadvisors.com</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-bottom" delay={200}>
              <div className="flex flex-col items-center text-center p-6 bg-light-gray rounded-lg shadow-md hover-lift">
                <Phone className="text-secondary mb-4" size={32} />
                <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-bottom" delay={300}>
              <div className="flex flex-col items-center text-center p-6 bg-light-gray rounded-lg shadow-md hover-lift">
                <Clock className="text-secondary mb-4" size={32} />
                <h3 className="text-lg font-semibold text-primary mb-2">Office Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9am - 5pm EST</p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slide-in-left">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-playfair text-primary mb-6">Send Us a Message</h2>

                {formStatus === "success" && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                    <p>{formStatusMessage}</p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
                    <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                    <p>{formStatusMessage}</p>
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        {...register("firstName")}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        {...register("lastName")}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      {...register("subject")}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full min-h-[120px] border rounded-md px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        errors.message ? "border-red-500" : "border-input"
                      }`}
                      placeholder="Please provide details about your inquiry..."
                      {...register("message")}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 transition-colors"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-in-right">
              <div className="bg-primary text-white p-8 rounded-lg">
                <h2 className="text-2xl font-playfair mb-6">Our Commitment to You</h2>
                <p className="mb-6">
                  At Zenith Financial Advisors, we pride ourselves on providing exceptional service and
                  personalized solutions to meet your financial needs. When you reach out to us, you can expect:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Prompt responses to all inquiries, typically within 24 business hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Expert advice tailored to your specific situation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Clear explanations of complex tax and financial matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Transparent communication about our services and fees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Confidential handling of all your personal information</span>
                  </li>
                </ul>

                <Separator className="my-6 bg-white/20" />

                <div className="flex items-start">
                  <MapPin className="mr-2 text-secondary shrink-0" />
                  <p className="text-sm">
                    Virtual consultations available worldwide. In-person meetings by appointment in select
                    locations.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

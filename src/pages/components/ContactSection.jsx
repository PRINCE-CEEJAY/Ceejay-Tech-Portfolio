import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Instagram,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    username: "",
    subject: "",
    email: "",
    message: "",
    status: "",
    loading: false,
  });
  const [status, setStatus] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    const emailjsData = {
      serviceId: "service_j9iqa8p",
      templateId: "template_y0ba0pg",
      publicKey: "Gk7Ri3pPE8YcyW8-J",
      templateParams: {
        username: contactForm.username,
        subject: contactForm.subject,
        email: contactForm.email,
        message: contactForm.message,
      },
    };
    e.preventDefault();
    setContactForm((prev) => ({
      ...prev,
      loading: true,
    }));
    setStatus("Sending Message");

    emailjs
      .send(
        emailjsData.serviceId,
        emailjsData.templateId,
        emailjsData.templateParams,
        emailjsData.publicKey
      )
      .then(() => {
        setContactForm((prev) => ({
          ...prev,
          username: "",
          subject: "",
          email: "",
          loading: false,
          message: "",
        }));
        setStatus("Message successfully sent ✅");
      })
      .catch((error) => {
        setStatus(`An error occured ${error}`);
      });
  };
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-bold text-4xl md:text-5xl font-bbold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I am always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:ceejaydroidprince@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    prince.ceejay.n@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a
                    href="tel:+2349049426376"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +2349049426376
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Enugu State, Nigeria
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 mx-auto">
              <h4 className="font-bold text-2xl">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61582924493582"
                  target="_blank"
                  className="flex flex-col items-center font-bold"
                >
                  <p>Facebook</p>
                  <Facebook />
                </a>
                <a
                  href="https://www.youtube.com/@Prince_Ceejay_NG"
                  target="_blank"
                  className="flex flex-col items-center font-bold"
                >
                  <p>Youtube</p>
                  <Youtube />
                </a>
                <a
                  href="https://www.linkedin.com/in/prince-ceejay-ng-01b544233/"
                  target="_blank"
                  className="flex flex-col items-center font-bold"
                >
                  <p>LinkedIn</p>
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  value={contactForm.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Wisky"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Title of the Message"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about ..."
                />
              </div>
              <button
                type="submit"
                disabled={contactForm.loading}
                className={cn(
                  "cosmic-button cursor-pointer w-full flex items-center justify-center gap-2"
                )}
              >
                Send a Message
                <Send size={16} />
              </button>
              <h4 className="text-center text-primary">{status}</h4>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

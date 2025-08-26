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

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    username: "",
    email: "",
    message: "",
    status: "",
    loading: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    setContactForm((prev) => ({
      ...prev,
      loading: true,
      status: "Sending Messsage",
    }));
    e.preventDefault();
    setTimeout(() => {
      setContactForm({
        username: "",
        email: "",
        message: "",
        loading: false,
        status: "Message successfully sent to  Ceejay",
      });
      saveToLocalStorage();
    }, 2000);
  };
  const saveToLocalStorage = () => {
    const userData = {
      name: contactForm.username,
      email: contactForm.email,
      message: contactForm.message,
    };
    try {
      localStorage.setItem(
        JSON.stringify(userData.email),
        JSON.stringify(userData)
      );
    } catch (error) {
      console.log("An error occured saving your details ", error);
    }
  };
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bbold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foregroound mb-12 max-w-2xl mx-auto">
          Have a project in minnd or wnat to collaborate? Feel free to reach
          out. I am always open to discussing neew opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Informations
            </h3>
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
                    ceejaydroidprince@gmail.com
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
              <h4>Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://web.facebook.com/princeceejay.ng.1"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <p>Facebok</p>
                  <Facebook />
                </a>
                <a
                  href="https://www.youtube.com/@Prince_Ceejay_NG"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <p>Youtube</p>
                  <Youtube />
                </a>
                <a
                  href="https://www.linkedin.com/in/prince-ceejay-ng-01b544233/"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <p>LinkedIn</p>
                  <Linkedin />
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <p>Twitter</p>
                  <Twitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <p>Instagram</p>
                  <Instagram />
                </a> */}
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
                  type="message"
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
              <h4 className="text-center text-primary">{contactForm.status}</h4>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

interface ContactSectionProps {
  onSubmit?: (data: FormData) => void;
}

const ContactSection = ({ onSubmit = () => {} }: ContactSectionProps) => {
  return (
    <div className="w-full min-h-[500px] bg-[#0F0F0F] py-16 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <Card className="bg-[#0F0F0F] border border-[#FF3333] border-opacity-20">
          <CardContent className="p-6">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                onSubmit(formData);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="bg-[#1A1A1A] border-[#FF3333] border-opacity-20 text-white
                             focus:border-[#FF3333] focus:ring-[#FF3333] focus:ring-opacity-50
                             focus:border-opacity-100 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-[#1A1A1A] border-[#FF3333] border-opacity-20 text-white
                             focus:border-[#FF3333] focus:ring-[#FF3333] focus:ring-opacity-50
                             focus:border-opacity-100 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400" htmlFor="subject">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Collaboration"
                  className="bg-[#1A1A1A] border-[#FF3333] border-opacity-20 text-white
                           focus:border-[#FF3333] focus:ring-[#FF3333] focus:ring-opacity-50
                           focus:border-opacity-100 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={6}
                  className="bg-[#1A1A1A] border-[#FF3333] border-opacity-20 text-white
                           focus:border-[#FF3333] focus:ring-[#FF3333] focus:ring-opacity-50
                           focus:border-opacity-100 transition-all duration-300"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  className="border-[#FF3333] text-[#FF3333] hover:bg-[#FF3333] hover:text-white"
                  onClick={() =>
                    (window.location.href = "mailto:contact@example.com")
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Directly
                </Button>
                <Button
                  type="submit"
                  className="bg-[#FF3333] text-white hover:bg-[#FF3333]/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;

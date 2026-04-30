"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="border-t">
      <div className="container py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Me</h3>
            <p className="text-muted-foreground">
              A passionate designer and developer focused on creating beautiful
              and functional digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/#about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/#portfolio"
                className="text-muted-foreground hover:text-foreground"
              >
                Portfolio
              </Link>
              <Link
                href="/#services"
                className="text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Me</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/kapildevsapkota"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kapildevsapkota/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading" || status === "success"}
              />
              <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            {status === "success" && (
              <p className="flex items-center gap-1 text-xs text-green-600">
                <CheckCircle className="w-3 h-3" /> Subscribed!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-1 text-xs text-red-500">
                <AlertCircle className="w-3 h-3" /> Something went wrong. Try
                again.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="ml-20 container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} KapilDevSapkota. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

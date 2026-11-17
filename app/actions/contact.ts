"use server";

import { prisma, publicErrorMessage } from "@/lib/prisma";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const phone = readString(formData, "phone");
  const message = readString(formData, "message");

  if (!name || !email || !phone || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, phone, and message.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("@HOST/")) {
    return {
      status: "error",
      message:
        "The contact inbox is not connected yet. Add a Neon DATABASE_URL to .env and try again.",
    };
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, phone, message },
    });

    return {
      status: "success",
      message:
        "Thank you. Your message has been received and we will get back to you soon.",
    };
  } catch (error) {
    publicErrorMessage(error);
    return {
      status: "error",
      message: "We could not send your message. Please try again in a moment.",
    };
  }
}

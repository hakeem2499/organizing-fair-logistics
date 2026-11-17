"use server";

import { isServiceSlug } from "@/lib/services";
import { prisma } from "@/lib/prisma";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const phone = readString(formData, "phone");
  const company = readString(formData, "company");
  const service = readString(formData, "service");
  const origin = readString(formData, "origin");
  const destination = readString(formData, "destination");
  const cargoDetails = readString(formData, "cargoDetails");
  const message = readString(formData, "message");

  if (!name || !email || !phone || !service) {
    return {
      status: "error",
      message: "Please fill in your name, email, phone, and the service you need.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  if (!isServiceSlug(service)) {
    return { status: "error", message: "Select a valid service." };
  }

  if (!process.env.DATABASE_URL) {
    return {
      status: "error",
      message:
        "The quote inbox is not connected yet. Add DATABASE_URL and try again.",
    };
  }

  try {
    await prisma.quoteRequest.create({
      data: {
        name,
        email,
        phone,
        company: company || null,
        service,
        origin: origin || null,
        destination: destination || null,
        cargoDetails: cargoDetails || null,
        message: message || null,
      },
    });

    return {
      status: "success",
      message: "Thank you. We have received your request and will respond shortly.",
    };
  } catch {
    return {
      status: "error",
      message: "We could not save your request. Please try again in a moment.",
    };
  }
}

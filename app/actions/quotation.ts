"use server";

import { prisma, publicErrorMessage } from "@/lib/prisma";
import { isServiceType } from "@/lib/site";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitQuotation(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const fullName = readString(formData, "fullName");
  const companyName = readString(formData, "companyName");
  const email = readString(formData, "email");
  const phone = readString(formData, "phone");
  const serviceType = readString(formData, "serviceType");
  const containerSize = readString(formData, "containerSize");
  const goodsDescription = readString(formData, "goodsDescription");
  const additionalNotes = readString(formData, "additionalNotes");

  if (!fullName || !companyName || !email || !phone || !serviceType || !goodsDescription) {
    return {
      status: "error",
      message: "Please complete all required fields before submitting.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  if (!isServiceType(serviceType)) {
    return { status: "error", message: "Select a valid service type." };
  }

  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("@HOST/")) {
    return {
      status: "error",
      message:
        "The quotation inbox is not connected yet. Add a Neon DATABASE_URL to .env and try again.",
    };
  }

  try {
    await prisma.quotationRequest.create({
      data: {
        fullName,
        companyName,
        email,
        phone,
        serviceType,
        containerSize: containerSize || null,
        goodsDescription,
        additionalNotes: additionalNotes || null,
      },
    });

    return {
      status: "success",
      message:
        "Thank you. Your quotation request has been received. Our team will respond shortly.",
    };
  } catch (error) {
    publicErrorMessage(error);
    return {
      status: "error",
      message: "We could not save your request. Please try again in a moment.",
    };
  }
}

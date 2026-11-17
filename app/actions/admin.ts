"use server";

import { redirect } from "next/navigation";
import {
  clearAdminSession,
  passwordsMatch,
  setAdminSession,
} from "@/lib/admin-auth";

export type AdminLoginState = {
  status: "idle" | "error";
  message: string;
};

export async function loginAdmin(
  _prev: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  const password = formData.get("password");

  if (typeof password !== "string" || !passwordsMatch(password)) {
    return { status: "error", message: "Incorrect password." };
  }

  await setAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin/login");
}

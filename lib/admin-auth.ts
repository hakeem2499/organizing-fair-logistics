import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "ofl-admin";
const SESSION_VALUE = "authenticated";

function getSecret() {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("ADMIN_PASSWORD is not set");
  }
  return secret;
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createAdminSessionToken() {
  const secret = getSecret();
  return `${SESSION_VALUE}.${sign(SESSION_VALUE, secret)}`;
}

export function verifyAdminSessionToken(token: string | undefined) {
  if (!token || !process.env.ADMIN_PASSWORD) {
    return false;
  }

  const [value, signature] = token.split(".");
  if (value !== SESSION_VALUE || !signature) {
    return false;
  }

  const expected = sign(SESSION_VALUE, process.env.ADMIN_PASSWORD);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    return false;
  }

  return timingSafeEqual(a, b);
}

export function passwordsMatch(input: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return false;
  }

  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    return false;
  }

  return timingSafeEqual(a, b);
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  return verifyAdminSessionToken(store.get(ADMIN_COOKIE)?.value);
}

export async function setAdminSession() {
  const store = await cookies();
  store.set(ADMIN_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
}

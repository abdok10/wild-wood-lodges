"use server";

import { auth, signIn, signOut } from "@lib/auth";
import { supabase } from "@lib/supabase";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updatedGuest = { nationalID, nationality, countryFlag };

  // Update the guest in the database
  const { data, error } = await supabase
    .from("guests")
    .update(updatedGuest)
    .eq("id", session.user?.guestId);

  if (error) throw new Error("Guest could not be updated");
  
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

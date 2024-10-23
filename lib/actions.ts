"use server";

import { auth, signIn, signOut } from "@lib/auth";
import { supabase } from "@lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateGuest(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID") as string;
  const country = formData.get("nationality") as string;
  const [nationality, countryFlag] = country.split("%");

  if (!nationalID || !countryFlag)
    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
      throw new Error("Please provide a valid national ID");

  const updatedGuest = { nationalID, nationality, countryFlag };

  // Update the guest in the database
  const { data, error } = await supabase
    .from("guests")
    .update(updatedGuest)
    .eq("email", session.user?.email);


  if (error) throw new Error("Guest could not be updated");
  revalidatePath("/account/profile")
}

export async function signInAction(provider: string) {
  await signIn(provider, { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

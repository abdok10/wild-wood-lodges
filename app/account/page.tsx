import { auth } from "@lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Account() {
  const session = await auth();

  // Check if session or session.user is null or undefined
  if (!session || !session.user || !session.user.name) {
    return null;
  }

  const firstName = session?.user?.name?.split(" ")[0] ?? "Guest";
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-6">
      Welcome back, {firstName} 🎉
    </h2>
  );
}

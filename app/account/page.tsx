import { auth } from "@lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Account() {
  const session = await auth();
  const firstName = session.user.name.split(" ")[0];
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-6">
      Welcome, {firstName} 🎉
    </h2>
  );
}
                                                        
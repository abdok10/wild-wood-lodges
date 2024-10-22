"use client";

import { signInAction } from "@lib/actions";

function SignInButton() {
  const handleSignIn = (provider: "google" | "github") => {
    signInAction(provider);
  };
  return (
    <>
      <button
        onClick={() => handleSignIn("google")}
        className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>

      <button
        onClick={() => handleSignIn("github")}
        className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"
      >
        <img
          src="https://authjs.dev/img/providers/github.svg"
          alt="Github logo"
          height="24"
          width="24"
        />
        <span>Continue with Github</span>
      </button>
    </>
  );
}

export default SignInButton;

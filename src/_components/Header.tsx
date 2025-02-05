"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          {/* If the user is signed out, children of SignedOut component are shown */}
          <SignInButton />
        </SignedOut>
        <div className="flex items-center gap-2">
          <SignedIn>
            {/* If the user is signed in, children of SignedIn component are shown */}
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh(); // re-runs the current route you're on and resend content required to update the page
              }}
            />
            <UserButton /> {/* This will show the user's profile picture */}
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;

"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-black/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div
          className="cursor-pointer text-lg font-medium text-gray-300 transition-colors hover:text-gray-600"
          onClick={() => router.push("/")}
        >
          Gallery
        </div>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <div className="flex items-center gap-4">
            <SignedIn>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={() => {
                  router.refresh();
                }}
                appearance={{
                  button:
                    "rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800",
                }}
              />
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 rounded-full",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          {/* If the user is signed out, children of SignedOut component are shown */}
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* If the user is signed in, children of SignedIn component are shown */}
          <UserButton /> {/* This will show the user's profile picture */}
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;

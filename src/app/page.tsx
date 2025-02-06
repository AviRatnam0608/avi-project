import { SignedIn, SignedOut } from "@clerk/nextjs";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

// by default, because of Next, pages are cached (pages are created and static even if refreshed on the browser),
// i.e. unless you call some explicit Next function, they won't be dynamically generated

export const dynamic = "force-dynamic"; // This will force the page to be dynamically generated

const Images = async () => {
  const images = await getMyImages();

  return (
    <div className="mt-40 grid grid-cols-3 gap-4">
      {[...images].map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-100"
        >
          <img src={image.url} className="h-64 w-full object-cover" />
          <p className="mt-2 px-4 py-2 text-center text-sm font-medium text-gray-700">
            {image.name}
          </p>
          <Link
            href={`/image/${image.id}`}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 to-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
          >
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30">
              View Image
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

// running on server
const HomePage = async () => {
  // Fetch images from the database [images here is the variable]
  // FindMany by default returns db items from latest to oldest
  // const images = await db.query.images.findMany({
  //   orderBy: (model, { desc }) => desc(model.id), // orderBy takes a model and a helper obj
  // });

  return (
    <main className="p-5">
      <SignedOut>
        <h1 className="text-center text-2xl font-bold">
          Please sign in to view the gallery
        </h1>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
};

export default HomePage;

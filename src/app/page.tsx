import { desc } from "drizzle-orm";
import Link from "next/link";
import { db } from "~/server/db";

// by default, because of Next, pages are cached (pages are created and static even if refreshed on the browser),
// i.e. unless you call some explicit Next function, they won't be dynamically generated

export const dynamic = "force-dynamic"; // This will force the page to be dynamically generated

// running on server
const HomePage = async () => {
  // Fetch images from the database [images here is the variable]
  // FindMany by default returns db items from latest to oldest
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id), // orderBy takes a model and a helper obj
  });
  return (
    <main className="p-5">
      <div className="grid grid-cols-3 gap-4">
        {[...images].map((image) => (
          <div key={image.id} className="relative">
            <img src={image.url} className="h-auto w-3/4" />
            <p>{image.name}</p>
            <Link
              href={`/image/${image.id}`}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;

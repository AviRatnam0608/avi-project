import Link from "next/link";

const allImages = [
  "https://utfs.io/f/LkYYOTSW20gj5Se405Fhf6wE2eQPagx5YU8jKRirLTB1Asp4",
  "https://utfs.io/f/LkYYOTSW20gjOaLYTV0wefJyCgm6vDG8ZKPwRnks35VlYt71",
  "https://utfs.io/f/LkYYOTSW20gjIPXhKZsHNrtomysT05z624R1Ydx9BuDjIMGv",
  "https://utfs.io/f/LkYYOTSW20gj6vZjTkW5mbalwn0jiEBeAFpW8L9ZDXdqscfk",
];

const images = allImages.map((image, index) => ({
  id: index,
  src: image,
  alt: `Image ${index + 1}`,
}));

export default function HomePage() {
  return (
    <main className="p-5">
      <div className="grid grid-cols-3 gap-4">
        {[...images, ...images].map((image) => (
          <div key={image.id} className="relative">
            <img src={image.src} alt={image.alt} className="h-auto w-3/4" />
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
}

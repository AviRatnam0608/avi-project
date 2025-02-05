import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "~/app/api/uploadthing/core";

// The <OurFileRouter> syntax is using TypeScript generics
// It tells generateUploadButton what type of FileRouter to expect
// In this case, OurFileRouter is the type we defined in ~/api/uploadthing/core.ts
// This ensures type safety when using the upload button component
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

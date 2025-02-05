// creating api endpoints for uploading files

import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({ router: ourFileRouter }); // file router is all the defintions of the ways user can upload files to the application

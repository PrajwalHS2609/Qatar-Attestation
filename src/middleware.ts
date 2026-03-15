// src/middleware.ts
import { NextResponse } from "next/server";

export function middleware() {
  if (process.env.SITE_DOWN === "true") {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
        <body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;>
          <div style="text-align:center;">
          </div>
        </body>
      </html>
      `,
      {
        status: 404, // or 503 if temporary
        headers: {
          "content-type": "text/html",
        },
      }
    );
  }

  return NextResponse.next();
}
import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function ogp(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "My default title";
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
            '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="201" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="1200" height="630" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="603" cy="131" fill="#00CC99" r="447"></circle><circle cx="38" cy="287" fill="#6600FF" r="447"></circle><circle cx="1182" cy="342" fill="#00CC99" r="447"></circle><circle cx="633" cy="523" fill="#00CC99" r="447"></circle><circle cx="1020" cy="539" fill="#6600FF" r="447"></circle><circle cx="843" cy="207" fill="#00CC99" r="447"></circle></g></svg>'
          )}`})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}

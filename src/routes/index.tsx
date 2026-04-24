import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Macovei — Digital Presence, AI Integration & Performance Ads" },
      {
        name: "description",
        content:
          "Gabriel Macovei helps ambitious businesses grow through modern digital presence, AI integration, and performance marketing. Founder of RielArt and Spotix.",
      },
      {
        property: "og:title",
        content: "Gabriel Macovei — Digital Presence, AI Integration & Performance Ads",
      },
      {
        property: "og:description",
        content:
          "Modern growth systems for serious brands. Websites that convert, AI that automates, ads that scale.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site.html"
      title="Gabriel Macovei"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
    />
  );
}

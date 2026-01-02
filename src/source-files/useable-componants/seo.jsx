import { Helmet } from "react-helmet";

export default function SEO({
  title = "Anime World",
  description = "Modern anime website built with React and Vite",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

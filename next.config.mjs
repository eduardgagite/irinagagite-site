/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const normalizeBasePath = (value) => {
  if (!value) return ""
  return `/${value.replace(/^\/|\/$/g, "")}`
}

const basePath = isGithubPages
  ? normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH || repoName || "irinagagite-site")
  : ""

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

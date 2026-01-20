/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const normalizeBasePath = (value) => {
  if (!value) return ""
  return `/${value.replace(/^\/|\/$/g, "")}`
}

const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH || repoName || ""
)

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

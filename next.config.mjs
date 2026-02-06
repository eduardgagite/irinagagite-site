/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH
const normalizeBasePath = (value) => {
  if (!value) return ""
  return `/${value.replace(/^\/|\/$/g, "")}`
}

const basePath =
  envBasePath !== undefined
    ? normalizeBasePath(envBasePath)
    : normalizeBasePath(repoName || "")
const assetPrefix = basePath ? `${basePath}/` : undefined

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
}

export default nextConfig

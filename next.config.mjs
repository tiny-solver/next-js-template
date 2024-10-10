import { execSync } from "child_process";

const getGitSHA = () => {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch (error) {
    console.error("Failed to get Git SHA:", error);
    return "unknown";
  }
};

const gitSHA = getGitSHA();
console.log("Git SHA:", gitSHA);

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GIT_SHA: gitSHA,
  },
};

export default nextConfig;

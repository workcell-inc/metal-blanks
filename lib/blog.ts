import fs from "fs"
import path from "path"
import matter from "gray-matter"

const blogDir = path.join(process.cwd(), "content", "blog")

export interface BlogPost {
  title: string
  slug: string
  date: string
  tags: string[]
  material: string
  segment: string
  description: string
  readTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"))
  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    return {
      title: data.title,
      slug: data.slug,
      date: data.date,
      tags: data.tags || [],
      material: data.material || "",
      segment: data.segment || "",
      description: data.description || "",
      readTime: data.readTime || "5 min read",
      content,
    } as BlogPost
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug)
}

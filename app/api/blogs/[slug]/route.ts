import { NextRequest, NextResponse } from "next/server"
import { findPostBySlug } from "@/lib/data/mockBlogs"

export const dynamic = "force-dynamic"

interface RouteParams {
  params: Promise<{
    slug: string
  }>
}

export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    // Simulate network delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 300))

    const { slug } = await context.params
    const post = findPostBySlug(slug)

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(post, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    })
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    )
  }
}

/*
// For [slug]/route.ts production version:
export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { slug } = await context.params
    const backendUrl = process.env.BACKEND_API_URL || "http://localhost:3000"
    
    const response = await fetch(`${backendUrl}/api/blogs/${slug}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Blog post not found" },
          { status: 404 }
        )
      }
      throw new Error("Backend request failed")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    )
  }
}
*/
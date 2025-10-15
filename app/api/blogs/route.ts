
import { NextRequest, NextResponse } from "next/server"
import { filterPosts } from "@/lib/data/mockBlogs"
import { BlogListResponse } from "@/types/blog"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    // Simulate network delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 500))

    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category") || undefined
    const tag = searchParams.get("tag") || undefined
    const search = searchParams.get("search") || undefined

    // Filter posts
    const filteredPosts = filterPosts({ category, tag, search })

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

    const response: BlogListResponse = {
      posts: paginatedPosts,
      total: filteredPosts.length,
      page,
      limit,
    }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    })
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    )
  }
}

// PRODUCTION VERSION
// When connecting to backend, We replace the implementation:

/*
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const queryString = searchParams.toString()
    
    // Forward request to your Node.js backend
    const backendUrl = process.env.BACKEND_API_URL || "http://localhost:3000"
    const response = await fetch(`${backendUrl}/api/blogs?${queryString}`, {
      headers: {
        "Content-Type": "application/json",
        // Add any auth headers if needed
        // "Authorization": `Bearer ${token}`,
      },
      next: { revalidate: 60 }, // Next.js 15 cache config
    })

    if (!response.ok) {
      throw new Error("Backend request failed")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    )
  }
}
*/
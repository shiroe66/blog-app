import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";

@injectable()
export class PostService {
  constructor(@inject(PrismaClient) private prisma: PrismaClient) { }

  async getAll(page: number) {
    const postsPerPage = 10
    const skip = page > 0 ? postsPerPage * (page - 1) : 0;

    const [posts, total] = await Promise.all([this.prisma.post.findMany({
      take: postsPerPage, skip, orderBy: {
        updatedAt: 'asc'
      }
    }), this.prisma.post.count()])
    const lastPage = Math.ceil(total / postsPerPage)

    return {
      posts, total, currentPage: page < lastPage ? page : null,
      prevPage: page > 1 && page < lastPage ? page - 1 : null,
      nextPage: page < lastPage ? page + 1 : null,
    }
  }
}
import { inject } from "inversify";
import { BaseHttpController, controller, httpGet, queryParam } from "inversify-express-utils";
import { TYPES } from "../constants";
import { PostService } from "../services";
import { validateDTO } from "../middleware";
import { GetAll } from "../validations/post";

@controller('/post')
export class PostController extends BaseHttpController {
  constructor(@inject(TYPES.PostService) private postService: PostService) {
    super()
  }

  @httpGet('/', validateDTO(GetAll, 'query'))
  async getAll(@queryParam('page') page: number) {
    const posts = await this.postService.getAll(page)
    return posts
  }
}
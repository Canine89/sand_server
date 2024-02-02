import { Controller, Get, NotFoundException, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PostModel, PostsService } from './posts.service';

// nest g resource -> 모듈 생성

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  getPosts() {
    return this.postsService.getAllPosts();
  }

  // /posts/:id
  @Get(":id")
  getPost(@Param("id") id: string) {
    return this.postsService.getPostById(id);
  }

  // /posts
  @Post()
  postPost(
    @Body("author") author: string, @Body("title") title: string, @Body("content") content: string) {
    return this.postsService.createPost(author, title, content);
  }

  // /posts/:id
  @Put(":id")
  putPost(
    @Param("id") id: string, @Body("author") author: string, @Body("title") title: string, @Body("content") content: string
  ) {
    return this.postsService.editPost(author, title, content, id);
  }

  // /posts/:id
  @Delete(":id")
  deletePost(@Param("id") id: string) {
    return this.postsService.deletePost(id);
  }
}

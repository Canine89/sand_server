import { Injectable, NotFoundException } from '@nestjs/common';

export interface PostModel {
    id: number;
    author: string;
    title: string;
    content: string;
    like: number;
    comments: string[];
    commentsCount: number;
}

let posts = [
    {
        id: 1,
        author: "아이기스",
        title: "[공지] 전사 공지입니다",
        content: "사실 공지 없습니다.",
        like: 888,
        comments: ["조아용", "좋습니다"],
        commentsCount: 431232,
    },
    {
        id: 2,
        author: "케이트",
        title: "[계약을 하자] 계약입니다",
        content: "사실 계약 없습니다.",
        like: 888,
        comments: ["조아용", "좋습니다"],
        commentsCount: 431232,
    },
    {
        id: 3,
        author: "바이블",
        title: "[품의를 하자] 품의입니다",
        content: "사실 품의 없습니다.",
        like: 888,
        comments: ["조아용", "좋습니다"],
        commentsCount: 431232,
    },
]

@Injectable()
export class PostsService {
    getAllPosts(): PostModel[] {
        return posts;
    }

    getPostById(id: string): PostModel {
        const findedPost = posts.find((post) => post.id === +id);
        if (!findedPost) {
            throw new NotFoundException();
        }
        return findedPost;
    }

    createPost(author: string, title: string, content: string): PostModel {
        const newPost = {
            id: posts[posts.length - 1].id + 1,
            author,
            title,
            content,
            like: 0,
            comments: [],
            commentsCount: 0,
        }
        posts.push(newPost);
        return newPost;
    }

    editPost(author: string, title: string, content: string, id: string): PostModel {
        const findPost = posts.find((post) => post.id === +id);

        if (!findPost) {
            throw new NotFoundException();
        }

        if (author) {
            findPost.author = author;
        }

        if (title) {
            findPost.title = title;
        }

        if (content) {
            findPost.content = content;
        }

        posts = posts.map(prevPost => prevPost.id === +id ? findPost : prevPost);

        return findPost;
    }

    deletePost(id: string): PostModel {
        const findPost = posts.find((post) => post.id === +id);
        if (!findPost) {
            throw new NotFoundException();
        } else {
            posts = posts.filter(post => post.id !== +id);
        }
        return findPost;
    }
}

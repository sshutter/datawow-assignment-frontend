import { IUsersPostDetails } from "./login.interface";

export interface IAllPosts {
  success: boolean;
  posts: IPost[];
  count: number;
}

export interface IPost {
  id: string;
  title: string;
  body: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface ISinglePost {
  success: boolean;
  post: IPost;
  user: IUsersPostDetails;
}

export interface ICreatePost {
  post: {
    title: string;
    body: string;
  };
}

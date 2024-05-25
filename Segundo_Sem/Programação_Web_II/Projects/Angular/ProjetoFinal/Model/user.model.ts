export interface User {
  username: string;
  password: string;
  likes: string[];
  id: string;
  commentaries?: UserCommentary[];
}

export interface UserCommentary {
  dogId: string;
  dogName: string;
  comment: string;
}

export interface User {
  username: string;
  password: string;
  likes: string[];
  id: string;
  commentaries: UserCommentary[];
}

export interface UserCreate {
  username: string;
  password: string;
  likes: string[];
  commentaries: UserCommentary[];
}

export interface UserCommentary {
  dogId: string;
  dogName: string;
  comment: string;
}
export interface UserLogged {
  name: string;
  id: string;
}
export interface DogModel {
  weight: Eight;
  height: Eight;
  commentaries: DogCommentary[];
  id: string;
  name: string;
  bred_for?: string;
  breed_group?: string;
  life_span: string;
  temperament?: string;
  origin?: string;
  reference_image_id: string;
  image: Image;
  relatedIds?: number[];
  country_code?: string;
  description?: string;
  history?: string;
}

export interface DogCommentary {
  userName: string;
  comment: string;
}

export interface Eight {
  imperial: string;
  metric: string;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
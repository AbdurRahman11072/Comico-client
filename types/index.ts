export type SeriesType = {
  id: string;
  title: string;
  chineseTitle: string;
  description: string;
  genres: string[];
  author: string;
  artist: string;
  status: "Ongoing" | "Completed" | "Stoped";
  releaseDate: string;
  rating: number;
  views: number;
  likes: number;
  coverImg: string;
  sliderImage: string;
  chapters: string[];
};

export type mainDetails = {
  id: number;
  title: string;
  chineseTitle: string;
  description: string;
};

export type Comic = {
  id: string;
  title: string;
  chapters: Chapter[];
};

export type Chapter = {
  chapterId: string;
  chapter: string;
  chapterTitle: string;
  releaseDate: string;
  views: number;
  likes: number;
  timestamp: string;
  contentUrl: string;
  tags: string[];
  images: string[];
};

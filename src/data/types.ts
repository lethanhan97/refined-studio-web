export interface Project {
  pid: string;
  name: string;
  date: Date;
  coverImage: StaticImageData;
  images: StaticImageData[];
}

export type ProjectListItem = Omit<Project, 'images'>;

export type ProjectDatabase = {
  [pid: string]: Project;
};

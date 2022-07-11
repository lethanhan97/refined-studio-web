export interface Project {
  name: string;
  date: Date;
  coverPhoto: StaticImageData;
  photos: StaticImageData[];
}

export type ProjectListItem = Omit<Project, 'photos'>;

export type ProjectDatabase = {
  [pid: string]: Project;
};

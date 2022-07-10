interface Project {
  name: string;
  date: Date;
  coverPhoto: StaticImageData;
  photos: StaticImageData[];
}

type ProjectListItem = Omit<Project, 'photos'>;

type ProjectDatabase = {
  [pid: string]: Project;
};
const projectDatabase: ProjectDatabase = {};

interface GetAllProjectsResponse {
  [pid: string]: ProjectListItem;
}
export function getAllProjects(): GetAllProjectsResponse[] {
  const pidList = Object.keys(projectDatabase);

  return pidList.map((pid) => ({
    [pid]: {
      name: projectDatabase[pid].name,
      date: projectDatabase[pid].date,
      coverPhoto: projectDatabase[pid].coverPhoto,
    },
  }));
}

export function getProject(pid: string) {
  const project = projectDatabase[pid];

  if (!project) throw new Error(`No project with PID: ${pid} found`);

  return project;
}

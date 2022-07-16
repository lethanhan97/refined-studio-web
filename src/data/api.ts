import { projectDatabase } from './database';
import { ProjectListItem } from './types';

export function getAllProjects(): ProjectListItem[] {
  const pidList = Object.keys(projectDatabase);

  return pidList.map((pid) => ({
    pid,
    name: projectDatabase[pid].name,
    date: projectDatabase[pid].date,
    coverPhoto: projectDatabase[pid].coverPhoto,
  }));
}

export function getProject(pid: string) {
  const project = projectDatabase[pid];

  if (!project) throw new Error(`No project with PID: ${pid} found`);

  return project;
}

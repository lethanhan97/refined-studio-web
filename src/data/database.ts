import assets from '../shared/assets';
import { ProjectDatabase } from './types';

// TODO: Replace with actual data
export const projectDatabase: ProjectDatabase = {
  ['mock-data']: {
    pid: 'mock-data',
    name: 'Sample Project',
    date: new Date('10-10-2020'),
    coverPhoto: assets.general.BikeGang,
    photos: [
      assets.general.AboutUsLanding,
      assets.general.BikeGang,
      assets.general.Chipu,
    ],
  },
};

export type DataTypes = {
  name: string;
  photo: string;
  surname: string;
  occupation: string;
  POB: string;
  location: string;
  approved: boolean;
  media: MediaTypes;
};

type MediaTypes = {
  facebook: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
};

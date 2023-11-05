import {StaticImageData} from "next/image";

type Project = {
  name: string;
  description: string;
  image: StaticImageData;
  link: string;
  updated: string;
}

export default Project;
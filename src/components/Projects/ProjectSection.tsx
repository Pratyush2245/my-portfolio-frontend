import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";

type Props = {
  projects: any;
};

const ProjectSection = ({ projects }: Props) => {
  console.log(projects);

  return (
    <>
      {projects && (
        <BentoGrid className="max-w-6xl mx-auto -mt-6">
          {projects.map((project: any, index: number) => (
            <BentoGridItem
              key={index}
              id={project?._id}
              title={project.name}
              description={project.description}
              header={""}
              icon={
                <Image
                  src={project?.projectThumbnail?.url}
                  alt=""
                  objectFit="cover"
                  width={400}
                  height={200}
                  className="rounded-tl-md rounded-tr-md"
                />
              }
              className={`cursor-pointer ${
                index === 3 || index === 6
              } ? "md:col-span-2" : ""`}
            />
          ))}
        </BentoGrid>
      )}
    </>
  );
};

export default ProjectSection;

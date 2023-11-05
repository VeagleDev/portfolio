import styles from "@/css/page.module.scss";
import useProjects from "@/hooks/projects.hook";
import ProjectType from "@/types/project.type";
import Image from "next/image";
export default function Home() {
  const projects = useProjects();
  return (
    <main className={styles.main}>
      {/* Ici, tu peux faire la page principale */}
      {/* Tu peux utiliser @ pour importer les fichiers depuis le dossier src */}
      {/* J'ai rajouté un peu de structure au projet pour que tu puisses t'y retrouver plus facilement */}

      {/* Petite information, tu peux lister les projets en utilisant le hook useProjects() */}
      {projects.map((project: ProjectType, index: number) => (
        <div key={index}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              src={project.image}
              alt={"Image de projet"}
              style={{width: "200px", height: "auto"}}
              placeholder={"blur"}
            />
            <div>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
          </div>

        </div>
      ))}
    </main>
  );
}

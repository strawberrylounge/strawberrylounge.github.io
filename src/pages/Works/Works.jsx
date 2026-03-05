import { useState } from "react";

import Modal from "../../components/Modal";
import { projects } from "../../data/projects";

import "./Works.scss";

function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="wrap">
      <div className="inner">
        <ul className="works">
          {projects.map((project, idx) => (
            <li
              key={project.id}
              className={`work work0${idx + 1}`}
              onClick={() => openModal(project)}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectData={selectedProject}
      >
        {selectedProject?.Content && <selectedProject.Content />}
      </Modal>
    </div>
  );
}

export default Works;

import { useState } from "react";

import Modal from "../../components/Modal";
import { projects } from "../../data/projects";

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
      <section className="section section-works">
        <div className="inner">
          <div className="works">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`work work0${idx + 1}`}
                onClick={() => openModal(project)}
              >
                {project.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectData={selectedProject}
      >
        {selectedProject?.content}
      </Modal>
    </div>
  );
}

export default Works;

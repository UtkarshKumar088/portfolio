import React, {useState} from "react";

//import images
import studybuddy from "../../img/dj.png";
import todo from "../../img/td.png";



import HiddenModalDescription from "./hiddenModals.description";

export default function HiddenModals() {

    const [projects, setProjects] = useState([
        {
            name: "Studybuddy",
            image: studybuddy,
            status: "View Live Demo",
            ref:"./studdy-buddy/index.html",
            description: ["This is a discord like web application, where we can make different rooms having some people and can chat with each other on certain topics. Its not fully developed yet ,Currently its under development."
                
            ]
        },
        
        {
            name: "todolist",
            image: todo,
            
            ref: "./todoList/index.html",
            description: [
                "Developed a todolist with the help of HTML,CSS,javascript and react in this application we can remember what things we have to perform and can remove it after the work is done"
                
            ]
        }
    ]);


    function hiddeModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "none";
        modal.style.display = "none";
    }

    const style = {
        textAlign: "right",
        fontWeight: 900,
        fontSize: 2 + "rem",
        cursor: "pointer"
    }


    return(
		<div id="gallery-card">
        {
            projects.map((project, index) => {
            return (
                <div id={project.name} className="modal-card" key={index}>
                    <div className="visual">
                        <img src={project.image} alt=""/>
                    </div>

                    <div className="modal-info">
                        <h2>{project.name}</h2>

                        <HiddenModalDescription description={project.description} />

                        <div className="modal-bottom">
                            <a href={project.ref} target="_blank">
                                <h3>{project.status}</h3>
                            </a>
                            <p className="close-icon" style={style} onClick={() => hiddeModal(project.name)}>&#10005;</p>
                        </div>

                    </div>
                </div>
            );})
        }
        </div>
    );
}
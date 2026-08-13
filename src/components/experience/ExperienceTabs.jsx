import Button from "../Button";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experiences";
import { useState } from "react";

export default function ExperienceTabs() {

    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

    return (
        <div>
            <div>
                {experiences.map((experience) => (
                    <Button key={experience.id} onClick={()=> setSelectedExperience(experience)}>
                        {experience.title}
                    </Button>
                ))}
            </div>
            <ExperienceCard experience={selectedExperience} />
        </div>
    )

}


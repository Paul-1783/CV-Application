import  "../../styles/tab.css"

import { GeneralForm } from "./generalForm.jsx";
import  {ExperienceForm } from "./experiencesForm.jsx";
import {EducationForm} from "./educationForm.jsx";
import { LanguageForm } from "./languagesForm.jsx";
import { LinkForm} from "./linksForm.jsx";
import { ProjectForm } from "./projectForm.jsx";
import { PublicationForm} from "./publicationFrom.jsx";
import { SkillForm} from "./skillsForm.jsx";
import { EmptyForm } from "./emptyForm.jsx";



const allForms = [GeneralForm(), EducationForm(), ExperienceForm(), LanguageForm(), ProjectForm(), PublicationForm(), SkillForm(),  LinkForm(), EmptyForm()]

export default allForms
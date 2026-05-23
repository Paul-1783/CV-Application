
import "./../../styles/preview.css";

import { EducationPreview } from "./educationPreview.jsx"
import { ExperiencePreview } from "./experiencePreview.jsx";
import { LanguagePreview } from "./languagePreview.jsx";
import { ProjectsPreview } from "./projectsPreview.jsx";
import { PublicationsPreview } from "./publicationsPreview.jsx"
import { SkillsPreview } from "./skillsPreview.jsx"
import { LinksPreview } from "./linksPreview.jsx";

export function PreviewFrame({allForms}) {
 console.log("HIER")
  return <span className="preview-frame">
        <div className="general-info">
        <h1>{allForms[0][0].name }</h1>
        <h3>Phone: {allForms[0][0].phone}</h3>
        <h3>Email: {allForms[0][0].email}</h3>
        </div>
        <div className="education">
            <h2>Education</h2>
            {allForms[1].map(form => < EducationPreview key={form.id} school={form.school} degree={form.degree} start={form.start} end={form.end} location={form.location} /> )}
        </div>
        <div className="experience">
          <h2>Experience</h2>
          {allForms[2].map(form => < ExperiencePreview key={form.id} companyName={form.companyName} jobTitle={form.jobTitle} address={form.address} descriptionTitle={form.descriptionTitle}  />)}
        </div>
        <div className="languages">
          <h2>Languages</h2>
          {allForms[3].map(form => < LanguagePreview key={form.id} languageName={form.languageName} languageLevel={form.languageLevel} />)}
        </div>
        <div className="projects">
          <h2>Projects</h2>
          {allForms[4].map(form => < ProjectsPreview key={form.id} title={form.title}  projectDescription={form.projectDescription} />)}
        </div>
        <div className="publications">
          <h2>Publications</h2>
          {allForms[5].map(form => < PublicationsPreview key={form.id} publicationTitle={form.publicationTitle} journalName={form.journalName} publicationDate={form.publicationDate} />)}
        </div>
        <div className="skills">
          <h2>Skills</h2>
          {allForms[6].map(form => < SkillsPreview key={form.id}   theoreticalKnowledge={form.theoreticalKnowledge} programmingLanguages={form.programmingLanguages} 
          framworkName={form.framworkName} />)}
        </div>
        <div className="links">
          <h2>Links</h2>
          {allForms[6].map(form => < LinksPreview key={form.id}  fullName={form.fullName} linkedinProfile={form.linkedinProfile} xingProfile={form.xingProfile} />)}
        </div>
      </span>;
}
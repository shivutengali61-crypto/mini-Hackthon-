/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PERSONAL_INFO, ACADEMICS, SKILLS, PROJECTS, EXPERIENCES, ACHIEVEMENTS } from '../data/portfolioData.ts';

export const getResumePlainText = (): string => {
  return `# SHIVAKUMAR
Aspiring Software Developer
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
College: ${PERSONAL_INFO.collegeName} (${PERSONAL_INFO.universityName})

---

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.aboutDetails.professionalIntroduction}

Career Objective: ${PERSONAL_INFO.aboutDetails.careerObjective}

---

## ACADEMIC QUALIFICATIONS
- Degree: ${ACADEMICS.degree}
  Department: ${ACADEMICS.department}
  Institution: ${ACADEMICS.institution}
  University: ${ACADEMICS.university}
  Current Standing: ${ACADEMICS.currentStatus} | CGPA: ${ACADEMICS.cgpaOrPercentage}
  Period: ${ACADEMICS.period}

- Previous Education:
${ACADEMICS.previousEducation.map(
  (edu) => `  * ${edu.level}: ${edu.score} (${edu.year}) - ${edu.institution}, ${edu.boardOrUniversity}`
).join('\n')}

---

## CORE TECHNICAL SKILLS
- Programming Languages: Python, Java, C, C++, JavaScript (ES6+), TypeScript
- Frontend Development: React.js (React 19), HTML5, CSS3, Tailwind CSS, Responsive & Accessible Design
- Backend Development: Node.js, Express.js, RESTful API Engineering, Python Flask/FastAPI basics
- Database Management: MySQL, PostgreSQL, MongoDB basics
- Developer Tools: Git, GitHub, VS Code, Postman, Linux Terminal
- AI & ML Fundamentals: OpenCV, Python NumPy, Pandas, Scikit-learn basics, Prompt Engineering

---

## KEY FEATURED PROJECTS

1. ${PROJECTS[0].title}
   Subtitle: ${PROJECTS[0].subtitle}
   Overview: ${PROJECTS[0].overview}
   Problem Solved: ${PROJECTS[0].problemSolved}
   Technologies: ${PROJECTS[0].technologies.join(', ')}
   GitHub: ${PROJECTS[0].githubUrl}

2. ${PROJECTS[1].title}
   Subtitle: ${PROJECTS[1].subtitle}
   Overview: ${PROJECTS[1].overview}
   Problem Solved: ${PROJECTS[1].problemSolved}
   Technologies: ${PROJECTS[1].technologies.join(', ')}
   GitHub: ${PROJECTS[1].githubUrl}

3. ${PROJECTS[2].title}
   Subtitle: ${PROJECTS[2].subtitle}
   Overview: ${PROJECTS[2].overview}
   Problem Solved: ${PROJECTS[2].problemSolved}
   Technologies: ${PROJECTS[2].technologies.join(', ')}
   GitHub: ${PROJECTS[2].githubUrl}

---

## EXPERIENCE & PRACTICAL TRAINING

${EXPERIENCES.map(
  (exp) => `### ${exp.role} — ${exp.organization} [${exp.status.toUpperCase()}]
Period: ${exp.period} | Location: ${exp.location} | Type: ${exp.type}
Summary: ${exp.summary}
Contributions:
${exp.contributions.map((c) => `- ${c}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`
).join('\n')}

---

## ACHIEVEMENTS & CERTIFICATIONS
${ACHIEVEMENTS.map(
  (ach) => `- ${ach.title} (${ach.organization}, ${ach.year})
  Summary: ${ach.summary}
`
).join('\n')}
`;
};

export const downloadResumeFile = () => {
  const resumeText = getResumePlainText();
  const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Shivakumar_Resume.md';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

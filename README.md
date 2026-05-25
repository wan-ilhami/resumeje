# ResumeJe

**AI-powered resume builder, ATS checker, and cover letter generator.**

[resumeje.com](https://resumeje.com)

---

## What is ResumeJe?

ResumeJe is a free, AI-powered resume toolset that helps job seekers build, optimize, and share professional resumes.

**Core features:**

- **Resume Builder** — Structured, live-editing resume builder with auto-save and multiple export formats (PDF, DOCX)
- **ATS Checker** — Score your resume against a job description to identify keyword gaps and improve your chances of passing applicant tracking systems
- **Cover Letter Generator** — AI-generated, tailored cover letters built from your resume and the target job description
- **Upload & Enhance** — Upload an existing PDF, DOCX, or TXT resume and let AI parse and improve it section by section
- **Resume Sharing** — Generate a public share link for your resume with no account required
- **Job Application Tracker** — Track your job applications, statuses, and notes in one place
- **Templates Marketplace** — Choose from multiple professional resume templates

Everything is free to use. No watermarks. No sign-up required for core features.

---

## This Repository

This is the **public** centralized repository for ResumeJe.

It serves as the shared contract layer and public release tracker for the ResumeJe platform. The private `frontend` and `backend` packages both consume the data contract described here.

This repository contains:
- The `ResumeFormData` type definition — the canonical shape of a ResumeJe resume
- Architecture documentation and diagrams
- Public release tracking and version history

It does **not** contain:
- Frontend or backend application code
- API endpoints or server configuration
- Environment variables, secrets, or internal URLs
- Database schemas or proprietary AI prompt templates

---

## Live Site

[https://resumeje.com](https://resumeje.com)

---

## Current Versions

| Package | Version |
|---|---|
| Frontend | <!-- FRONTEND_VERSION -->1.0.0<!-- /FRONTEND_VERSION --> |
| Backend | <!-- BACKEND_VERSION -->1.0.0<!-- /BACKEND_VERSION --> |

Versions are kept in sync automatically — when either package pushes a release to `master`, GitHub Actions dispatches a `version-updated` event here and updates this table.

---

## The Data Contract

The centralized resume is the `ResumeFormData` shape — a single source of truth that every ResumeJe surface reads from and writes to:

```ts
interface ResumeFormData {
  profileImage?: string | null;
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  state: string;
  linkedin?: string;
  portfolio?: string;
  professionalSummary: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  skills: { category: string; skills: string }[];
  certifications: string[];
  projects: ProjectEntry[];
  languages: string[];
}
```

Any surface that needs resume content — exports, AI prompts, ATS scoring, share URLs, email drafts — reads from this shape.

---

## Architecture

The platform is built across three packages:

```
centralized-resume (this repo — public)
    The data contract shared by all surfaces

frontend (private)
    Next.js 16 app — the full product UI and server-side API routes

backend (private)
    Express 5 API — file parsing, AI inference, ATS scoring
```

Resume data is stored in the browser via `localStorage` under the key `resume_form_data`, with optional cloud sync for signed-in users. An edit in the resume builder is immediately available in the cover letter generator, the ATS checker, the templates marketplace, and the share page — because all of them read from the same key.

---

## License

MIT

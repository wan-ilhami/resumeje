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

This is the **public** repository for ResumeJe.

It serves as the public showcase, data contract reference, and release tracker for the ResumeJe platform. The actual `frontend` and `backend` source code lives in separate private repositories.

**What's here:**
- Public-facing product description and feature overview
- The canonical `ResumeFormData` type definition — the data contract all surfaces share
- Platform architecture overview
- Live version tracking for frontend and backend (auto-updated on every release)

**Not here:**
- Frontend or backend source code (private repos)
- API endpoint documentation or server configuration
- Environment variables, secrets, or connection strings
- Database schemas or AI prompt templates

---

## Current Versions

| Package | Version |
|---|---|
| Frontend | <!-- FRONTEND_VERSION -->1.2.0<!-- /FRONTEND_VERSION --> |
| Backend | <!-- BACKEND_VERSION -->1.0.0<!-- /BACKEND_VERSION --> |

Versions update automatically — each push to `master` on the frontend or backend triggers a semantic-release run, which dispatches a `version-updated` event here. GitHub Actions then updates this table and creates a release on this repo.

---

## The Data Contract

All ResumeJe surfaces — the builder, ATS checker, cover letter generator, export, share pages, and AI prompts — read from and write to a single canonical shape:

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

Resume data is stored in the browser via `localStorage` (key: `resume_form_data`), with optional cloud sync for signed-in users. Because every surface reads from the same key, an edit in the resume builder is instantly reflected in the cover letter generator, ATS checker, templates, and share page.

---

## Architecture

The platform runs across three packages:

```
centralized-resume (this repo — public)
    Public showcase + data contract + release tracker

frontend (private — Next.js 16)
    Full product UI, server-side API proxy, Prisma + PostgreSQL

backend (private — Express 5)
    File parsing, AI inference (Groq / Llama 3.3 70B), ATS scoring
```

The browser never calls the backend directly. All requests go:

```
Browser → Next.js server routes → backend API
```

---

## License

MIT

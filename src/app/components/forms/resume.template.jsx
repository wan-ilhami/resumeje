'use client';

import { useEffect, useState } from "react";

export function ResumeTemplate({ data }) {
    const sampleData = {
        profileImage: null,
        fullName: "ALEXANDER TAN WEI JIE",
        jobTitle: "Full Stack Developer / Software Engineer",
        email: "alex.tan.dev@example.com",
        phone: "012-3456789",
        state: "Kuala Lumpur, Malaysia",
        linkedin: "linkedin.com/in/alextan",
        // portfolio: "alextandev.com",
        professionalSummary:
            "Versatile Full Stack Developer and Software Engineer with 2+ years of experience building scalable web and mobile applications using modern JavaScript frameworks and cloud-native technologies. Skilled in React, Node.js, and AWS, with hands-on experience in GraphQL, serverless architecture (Lambda, API Gateway, DynamoDB), and CI/CD automation.",
        skills: [
            { category: "Cloud & Infrastructure", skills: "AWS (Lambda, API Gateway, DynamoDB, SAM, AppSync, Cognito), Azure" },
            { category: "Frontend", skills: "React, React Native, Redux Toolkit, TypeScript, Tailwind CSS" },
            { category: "Backend", skills: "Node.js, Python, PHP (Laravel)" },
            { category: "Databases", skills: "DynamoDB, MongoDB, PostgreSQL" },
            { category: "APIs & Architecture", skills: "GraphQL, REST API, Serverless Architecture" },
        ],
        experience: [
            {
                position: "Full Stack Developer",
                company: "TechNova Solutions Sdn. Bhd., Kuala Lumpur",
                startDate: "October 2023",
                endDate: "Present",
                description:
                    "Developed and deployed full-stack, serverless applications using React, AWS SAM, and DynamoDB.\nImplemented secure GraphQL APIs with AWS AppSync and Cognito.\nAutomated CI/CD pipelines using AWS CodePipeline and GitHub Actions.",
            },
            {
                position: "Software Engineer / Database Administrator",
                company: "DataForge Systems, Petaling Jaya",
                startDate: "August 2023",
                endDate: "October 2023",
                description:
                    "Optimized and secured production databases for performance and scalability.\nCollaborated with teams to implement system improvements.\nMaintained backend systems using PHP (Laravel framework).",
            },
        ],
        //   projects: [
        //     {
        //       title: "ServEase - Technician Booking Platform",
        //       technologies:
        //         "React.js, React Native, AWS SAM, GraphQL, REST API, Stripe, AWS Location Services",
        //       description:
        //         "Developed a technician booking SPA using React.js with responsive design.\nImplemented serverless backend with AWS SAM and GraphQL APIs.\nIntegrated AWS Location Services for real-time geolocation and Stripe for secure payments.",
        //     },
        //   ],
        education: [
            {
                degree: "Bachelor of Computer Science (Software Engineering)",
                school: "University of Malaysia",
                field: "",
                graduationYear: "2021 – 2023",
            },
            {
                degree: "Diploma in Information Technology",
                school: "University of Malaysia",
                field: "",
                graduationYear: "2018 – 2021",
            },
        ],
        //   certifications: [
        //     "AWS Certified Solutions Architect – Associate (2025)",
        //     "Microsoft Certified: Azure AI Engineer Associate (2025)",
        //     "CKA: Certified Kubernetes Administrator (2024)",
        //   ],
        languages: ["English (Fluent)", "Malay (Native)"],
    };

    const [displayData, setDisplayData] = useState(sampleData);

    useEffect(() => {
        // Merge user data with sample data field by field
        const mergedData = {
            profileImage: data?.profileImage || sampleData.profileImage,
            fullName: (data?.fullName && data.fullName.trim()) ? data.fullName : sampleData.fullName,
            jobTitle: (data?.jobTitle && data.jobTitle.trim()) ? data.jobTitle : sampleData.jobTitle,
            email: (data?.email && data.email.trim()) ? data.email : sampleData.email,
            phone: (data?.phone && data.phone.trim()) ? data.phone : sampleData.phone,
            state: (data?.state && data.state.trim()) ? data.state : sampleData.state,
            linkedin: (data?.linkedin && data.linkedin.trim()) ? data.linkedin : sampleData.linkedin,
            portfolio: (data?.portfolio && data.portfolio.trim()) ? data.portfolio : sampleData.portfolio,
            professionalSummary: (data?.professionalSummary && data.professionalSummary.trim()) ? data.professionalSummary : sampleData.professionalSummary,
            skills: (data?.skills && data.skills.some(s => s.category?.trim() || s.skills?.trim())) ? data.skills : sampleData.skills,
            experience: (data?.experience && data.experience.some(e => e.company?.trim() || e.position?.trim())) ? data.experience : sampleData.experience,
            projects: (data?.projects && data.projects.some(p => p.title?.trim() || p.description?.trim())) ? data.projects : sampleData.projects,
            education: (data?.education && data.education.some(e => e.school?.trim() || e.degree?.trim())) ? data.education : sampleData.education,
            certifications: (data?.certifications && data.certifications.some(c => c.trim())) ? data.certifications : sampleData.certifications,
            languages: (data?.languages && data.languages.some(l => l.trim())) ? data.languages : sampleData.languages,
        };
        setDisplayData(mergedData);
    }, [data]);

    if (!displayData) {
        return null;
    }

    return (
        <div style={{
            fontFamily: 'Calibri, Arial, sans-serif',
            lineHeight: '1.5',
            color: '#000',
            fontSize: '11pt'
        }}>

            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15pt',
                marginBottom: '6pt',
                paddingBottom: '16pt',
                borderBottom: '3px solid #000000ff'
            }}>
                {/* Profile Picture - Left Side */}
                {displayData.profileImage && (
                    <div style={{
                        flexShrink: 0
                    }}>
                        <img
                            src={displayData.profileImage}
                            alt="Profile"
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                border: '2px solid #000'
                            }}
                        />
                    </div>
                )}

                {/* Name and Contact - Right Side */}
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <div
                        style={{
                            fontSize: '14pt',
                            fontWeight: 'bold',
                            marginBottom: '6pt'
                        }}
                    >
                        {displayData.fullName}
                    </div>

                    {/* Job Title */}
                    {displayData.jobTitle && (
                        <p
                            style={{
                                fontSize: '10pt',
                                lineHeight: '1.2',
                                margin: '0'
                            }}
                        >
                            {displayData.jobTitle}
                        </p>
                    )}

                    {/* Contact Info */}
                    {(displayData.email || displayData.phone || displayData.state) && (
                        <p
                            style={{
                                fontSize: '10pt',
                                lineHeight: '1.2',
                                margin: '0'
                            }}
                        >
                            {displayData.email && (
                                <span style={{ fontSize: '10pt', lineHeight: '1.2', margin: '0' }}>{displayData.email}</span>
                            )}
                            {displayData.phone && (
                                <span style={{ fontSize: '10pt', lineHeight: '1.2', margin: '0' }}> | {displayData.phone}</span>
                            )}
                            {displayData.state && (
                                <span style={{ fontSize: '10pt', lineHeight: '1.2', margin: '0' }}> | {displayData.state}</span>
                            )}
                        </p>
                    )}

                    {/* Social Links */}
                    {(displayData.linkedin || displayData.portfolio) && (
                        <p
                            style={{
                                fontSize: '10pt',
                                lineHeight: '1.2',
                                margin: '0'
                            }}
                        >
                            {displayData.linkedin && (
                                <span style={{ fontSize: '10pt', lineHeight: '1.2', margin: '0' }}>
                                    LinkedIn: {displayData.linkedin}
                                </span>
                            )}
                            {displayData.portfolio && (
                                <span style={{ fontSize: '10pt', lineHeight: '1.2', margin: '0' }}>
                                    {' '} | Portfolio: {displayData.portfolio}
                                </span>
                            )}
                        </p>
                    )}
                </div>
            </div>

            {/* Professional Summary */}
            {displayData.professionalSummary && (
                <div style={{ marginBottom: '12pt' }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '11pt',
                        marginTop: '10pt',
                        marginBottom: '6pt',
                        borderBottom: '1px solid #000',
                        paddingBottom: '8pt'
                    }}>
                        PROFESSIONAL SUMMARY
                    </div>
                    <p style={{
                        fontSize: '10pt',
                        lineHeight: '1.4',
                        margin: '0'
                    }}>
                        {displayData.professionalSummary}
                    </p>
                </div>
            )}

            {/* Technical Skills */}
            {displayData.skills && displayData.skills.some(s => s.category || s.skills) && (
                <div style={{ marginBottom: '12pt' }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '11pt',
                        marginTop: '10pt',
                        marginBottom: '6pt',
                        borderBottom: '1px solid #000',
                        paddingBottom: '8pt'
                    }}>
                        TECHNICAL SKILLS
                    </div>
                    <div style={{
                        fontSize: '10pt',
                        marginLeft: '0.25in'
                    }}>
                        {displayData.skills.map((skill, i) => (
                            (skill.category || skill.skills) && (
                                <div key={i} style={{ marginBottom: '4pt' }}>
                                    {skill.category && <strong>{skill.category}:</strong>}
                                    {skill.skills && <span> {skill.skills}</span>}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            )}

            {/* Professional Experience */}
            {displayData.experience && displayData.experience.some(e => e.company || e.position) && (
                <div style={{ marginBottom: '12pt' }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '11pt',
                        marginTop: '10pt',
                        marginBottom: '6pt',
                        borderBottom: '1px solid #000',
                        paddingBottom: '8pt'
                    }}>
                        PROFESSIONAL EXPERIENCE
                    </div>
                    {displayData.experience.map((exp, i) => (
                        (exp.company || exp.position) && (
                            <div key={i}>
                                <div style={{
                                    fontWeight: 'bold',
                                    marginTop: '8pt',
                                    marginBottom: '2pt'
                                }}>
                                    {exp.position || "Position"}
                                </div>
                                <div style={{
                                    marginBottom: '4pt',
                                    fontStyle: 'italic',
                                    fontSize: '10pt'
                                }}>
                                    {exp.company && <span>{exp.company}</span>}
                                    {(exp.startDate || exp.endDate) && (
                                        <span> | {exp.startDate}{exp.endDate && ` – ${exp.endDate}`}</span>
                                    )}
                                </div>
                                {exp.description && (
                                    <ul style={{
                                        marginLeft: '0.25in',
                                        marginBottom: '6pt',
                                        listStylePosition: 'inside',
                                        paddingLeft: '0'
                                    }}>
                                        {exp.description.split('\n').filter(line => line.trim()).map((point, idx) => (
                                            <li key={idx} style={{
                                                marginBottom: '3pt',
                                                fontSize: '10pt',
                                                lineHeight: '1.4'
                                            }}>
                                                {point.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )
                    ))}
                </div>
            )}

            {/* Projects */}
            {displayData.projects && displayData.projects.some(p => p.title || p.description) && (
                <div style={{ marginBottom: '12pt' }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '11pt',
                        marginTop: '10pt',
                        marginBottom: '6pt',
                        borderBottom: '1px solid #000',
                        paddingBottom: '8pt'
                    }}>
                        PROJECTS / ACHIEVEMENT
                    </div>
                    {displayData.projects.map((proj, i) => (
                        (proj.title || proj.description) && (
                            <div key={i}>
                                <div style={{
                                    fontWeight: 'bold',
                                    marginTop: '8pt',
                                    marginBottom: '2pt'
                                }}>
                                    {proj.title || "Project"}
                                </div>
                                {proj.technologies && (
                                    <div style={{
                                        marginBottom: '4pt',
                                        fontStyle: 'italic',
                                        fontSize: '10pt'
                                    }}>
                                        Technologies: {proj.technologies}
                                    </div>
                                )}
                                {proj.description && (
                                    <ul style={{
                                        marginLeft: '0.25in',
                                        marginBottom: '6pt',
                                        listStylePosition: 'inside',
                                        paddingLeft: '0'
                                    }}>
                                        {proj.description.split('\n').filter(line => line.trim()).map((point, idx) => (
                                            <li key={idx} style={{
                                                marginBottom: '3pt',
                                                fontSize: '10pt',
                                                lineHeight: '1.4'
                                            }}>
                                                {point.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )
                    ))}
                </div>
            )}

            {/* Education */}
            {displayData.education && displayData.education.some(e => e.school || e.degree) && (
                <div style={{ marginBottom: '12pt' }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '11pt',
                        marginTop: '10pt',
                        marginBottom: '6pt',
                        borderBottom: '1px solid #000',
                        paddingBottom: '8pt'
                    }}>
                        EDUCATION
                    </div>
                    {displayData.education.map((edu, i) => (
                        (edu.school || edu.degree) && (
                            <div key={i} style={{ marginBottom: '6pt' }}>
                                <div style={{
                                    fontWeight: 'bold',
                                    marginTop: '0',
                                    marginBottom: '2pt'
                                }}>
                                    {edu.degree || "Degree"}
                                    {edu.field && <span> in {edu.field}</span>}
                                </div>
                                <div style={{
                                    marginBottom: '4pt',
                                    fontStyle: 'italic',
                                    fontSize: '10pt'
                                }}>
                                    {edu.school && <span>{edu.school}</span>}
                                    {edu.graduationYear && <span> | {edu.graduationYear}</span>}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}

            {/* Certifications */}
            {displayData.certifications && displayData.certifications.some(c => c.trim()) && (
                <div style={{ marginBottom: '12pt' }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '11pt',
                        marginTop: '10pt',
                        marginBottom: '6pt',
                        borderBottom: '1px solid #000',
                        paddingBottom: '8pt'
                    }}>
                        CERTIFICATIONS
                    </div>
                    <ul style={{
                        fontSize: '10pt',
                        listStylePosition: 'inside',
                        paddingLeft: '0'
                    }}>
                        {displayData.certifications.map((cert, i) => (
                            cert.trim() && (
                                <li key={i} style={{ marginBottom: '3pt', lineHeight: '1.4' }}>
                                    {cert}
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            )}

            {/* Languages */}
            {displayData.languages && displayData.languages.some(l => l.trim()) && (
                <div style={{ marginBottom: '12pt' }}>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '11pt',
                        marginTop: '10pt',
                        marginBottom: '6pt',
                        borderBottom: '1px solid #000',
                        paddingBottom: '8pt'
                    }}>
                        LANGUAGES
                    </div>
                    <div style={{
                        fontSize: '10pt'
                    }}>
                        {displayData.languages.map((lang, i) => lang.trim()).filter(Boolean).join(' | ')}
                    </div>
                </div>
            )}

        </div>
    )
}
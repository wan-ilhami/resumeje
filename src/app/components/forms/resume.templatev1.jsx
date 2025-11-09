import { useState, useRef, useEffect } from 'react';

export default function ResumeTemplate() {
    const [pages, setPages] = useState([]);

    const [resumeData] = useState({
        fullName: 'WAN ILHAMI MAHFUDZ BIN WAN MOHD SABRI',
        jobTitle: 'Full Stack Developer / Software Engineer',
        phone: '010-3923664',
        email: 'wan.ilhami@gmail.com',
        linkedin: 'linkedin.com/in/wan-ilhami-435154184',
        location: 'Shah Alam, Selangor, Malaysia',
        profileImage: null,
        initials: 'WI',
        summary: 'I am a versatile Full Stack Developer and Software Engineer with over 2 years of experience in creating scalable web and mobile applications. My expertise encompasses modern JavaScript frameworks like React, along with cloud-native services such as AWS. I excel in managing all stages of the software lifecycle, emphasizing user-centric design and high performance, underpinned by strong skills in automated testing and secure authentication',
        achievements: [
            {
                title: 'Full Stack Application Development',
                description: 'Successfully developed multiple scalable applications that enhance user experience and streamline processes in agile environments'
            }
        ],
        experience: [
            {
                position: 'Full Stack Developer',
                company: 'Neuko Sdn. Bhd',
                date: '10/2023 – 01/1970',
                location: 'Ara Damansara',
                companyDescription: 'An IT company specializing in full-stack solutions and serverless applications',
                duties: [
                    'Built and deployed full-stack, serverless applications using React, AWS SAM, Lambda, and DynamoDB',
                    'Developed GraphQL APIs with AWS AppSync and implemented secure access using AWS Cognito for authentication and authorization',
                    'Automated deployments with AWS CodePipeline and GitHub Actions, improving release efficiency and reducing manual errors',
                    'Enhanced frontend performance and reliability using Redux Toolkit, Jest, and Postman for comprehensive testing coverage'
                ]
            },
            {
                position: 'Software Engineer / Database Administrator',
                company: 'Inteksoft Sdn. Bhd',
                date: '08/2023 – 10/2023',
                location: 'Puchong',
                companyDescription: 'A software development firm focusing on database solutions and application support',
                duties: [
                    'Maintained and optimized databases for MITI, ensuring data security and integrity through regular backups and monitoring',
                    'Collaborated with MITI staff to identify and implement database improvements, meeting evolving business requirements',
                    'Prepared weekly and monthly health reports summarizing key performance metrics and database issues',
                    'Developed and maintained backend systems using PHP (Laravel framework) to support data-driven applications'
                ]
            },
            {
                position: 'Cybersecurity Intern',
                company: 'CyberSecurity Malaysia',
                date: '03/2023 – 06/2023',
                location: 'Cyberjaya',
                companyDescription: 'A national cybersecurity incident response team and security agency',
                duties: [
                    'Installed and configured Elasticsearch and MISP on physical servers and VMware ESXi environments',
                    'Gained practical experience in malware analysis, including static and dynamic analysis techniques, and reverse engineering fundamentals',
                    'Developed web scraping tools using Python 3 to crawl Telegram data and export results in JSON format for security intelligence'
                ]
            }
        ],
        skills: [
            'WAN', 'Gmail', 'GitHub', 'Versatile',
            'JavaScript', 'React', 'Node.js',
            'AWS', 'GraphQL', 'Serverless',
            'AWS Lambda', 'API Gateway',
            'DynamoDB', 'Automated Testing',
            'Jest', 'Postman', 'Cognito', 'Azure',
            'Kubernetes', 'Agile', 'S3', 'SNS',
            'SQS', 'React Native', 'Redux',
            'Redux Toolkit', 'Python', 'PHP',
            'Laravel', 'MongoDB',
            'Google Firebase', 'REST',
            'GitHub Actions', 'Linux', 'Stripe',
            'SDN', 'Cybersecurity',
            'Elasticsearch', 'VMware ESXi',
            'Web Scraping'
        ],
        education: [
            {
                degree: 'Bachelor of Netcentric Computing',
                school: 'Universiti Teknologi MARA',
                period: '03/2021 – 03/2023',
                location: 'Shah Alam, Malaysia'
            },
            {
                degree: 'Diploma in Computer Science',
                school: 'Universiti Teknologi MARA',
                period: '03/2018 – 03/2021',
                location: 'Raub, Malaysia'
            }
        ],
        certifications: [
            'AWS Certified Solutions Architect – Associate',
            'Microsoft Certified: Azure AI Engineer Associate',
            'CKA: Certified Kubernetes Administrator'
        ],
        projects: [
            {
                title: 'Swifix – Technician Booking Platform',
                period: '01/1970 – 01/1970',
                location: 'Location not specified',
                description: 'A platform for users to book technicians efficiently',
                details: [
                    'Built a technician booking platform as a Single Page Application (SPA) using React.js with responsive design',
                    'Developed serverless backend with AWS SAM, integrating GraphQL and REST APIs for flexible data querying',
                    'Integrated AWS Location Services for technician geolocation and Stripe for secure online payment processing'
                ]
            },
            {
                title: 'Felda E-Nota Hantaran – Digital Gift Note Management System',
                period: '01/1970 – 01/1970',
                location: 'Location not specified',
                description: 'A digital solution for managing gift notes effectively',
                details: [
                    'Developed a digital gift note management system as a Single Page Application (SPA) using React.js and Redux for state management',
                    'Implemented serverless architecture using AWS SAM with API Gateway, Lambda, S3, SNS, SQS, DynamoDB, and Cognito',
                    'Integrated Firebase Cloud Messaging and AWS SNS for real-time notifications to end users'
                ]
            },
            {
                title: 'Felda E-Nota Hantaran – Digital Gift Note Management System',
                period: '01/1970 – 01/1970',
                location: 'Location not specified',
                description: 'A digital solution for managing gift notes effectively',
                details: [
                    'Developed a digital gift note management system as a Single Page Application (SPA) using React.js and Redux for state management',
                    'Implemented serverless architecture using AWS SAM with API Gateway, Lambda, S3, SNS, SQS, DynamoDB, and Cognito',
                    'Integrated Firebase Cloud Messaging and AWS SNS for real-time notifications to end users'
                ]
            },
            {
                title: 'Felda E-Nota Hantaran – Digital Gift Note Management System',
                period: '01/1970 – 01/1970',
                location: 'Location not specified',
                description: 'A digital solution for managing gift notes effectively',
                details: [
                    'Developed a digital gift note management system as a Single Page Application (SPA) using React.js and Redux for state management',
                    'Implemented serverless architecture using AWS SAM with API Gateway, Lambda, S3, SNS, SQS, DynamoDB, and Cognito',
                    'Integrated Firebase Cloud Messaging and AWS SNS for real-time notifications to end users'
                ]
            }
        ],
        languages: [
            { name: 'Malay', level: 5, proficiency: 'Native' },
            { name: 'English', level: 4, proficiency: 'Proficient' }
        ],
        training: [
            { title: 'Introduction to Cybersecurity', provider: 'Introduction to Cybersecurity course by Cisco' },
            { title: 'Introduction to IoT', provider: 'Introduction to IoT course by Cisco' }
        ],
        interests: 'Tech Enthusiasm and Cybersecurity - Enthusiast in emerging technologies and cybersecurity, continuously engaging in learning and growth'
    });

    // Section components
    const Header = () => (
        <div style={{ display: 'flex', gap: '20px', marginBottom: '13px', paddingBottom: '5px' }}>
            <div style={{ flex: '1' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 5px 0', lineHeight: '1.2' }}>
                    {resumeData.fullName}
                </h1>
                <p style={{ fontSize: '12px', color: '#0066cc', fontWeight: 'bold', margin: '5px 0 10px 0' }}>
                    {resumeData.jobTitle}
                </p>
                <div style={{ fontSize: '10px', lineHeight: '1.3' }}>
                    <p style={{ margin: '2px 0' }}>📞 {resumeData.phone}  📧 {resumeData.email}  🔗 {resumeData.linkedin}</p>
                    <p style={{ margin: '2px 0' }}>📍 {resumeData.location}</p>
                </div>
            </div>
            <div>
                {resumeData.profileImage ? (
                    <img
                        src={resumeData.profileImage}
                        alt="Profile"
                        style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #000' }}
                    />
                ) : (
                    <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#0066cc', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #000', color: 'white', fontSize: '36px', fontWeight: 'bold' }}>
                        {resumeData.initials}
                    </div>
                )}
            </div>
        </div>
    );

    const Summary = () => (
        <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>SUMMARY</h2>
            <p style={{ fontSize: '10px', lineHeight: '1.4', margin: '0', textAlign: 'justify' }}>
                {resumeData.summary}
            </p>
        </div>
    );

    const Experience = () => (
        <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>EXPERIENCE</h2>
            {resumeData.experience.map((job, idx) => (
                <div key={idx} style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '10px', marginBottom: '2px' }}>
                        {job.position}
                    </div>
                    <div style={{ fontSize: '10px', color: '#0066cc', fontWeight: 'bold', marginBottom: '1px' }}>
                        {job.company}
                    </div>
                    <div style={{ fontSize: '9px', color: '#666', marginBottom: '4px' }}>
                        📅 {job.date}  📍 {job.location}
                    </div>
                    <div style={{ fontSize: '9px', color: '#666', marginBottom: '4px', fontStyle: 'italic' }}>
                        {job.companyDescription}
                    </div>
                    <ul style={{ margin: '0', paddingLeft: '15px', fontSize: '9px', lineHeight: '1.3' }}>
                        {job.duties.map((duty, i) => (
                            <li key={i} style={{ marginBottom: '2px', listStyle: 'disc' }}>
                                {duty}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    const KeyAchievements = () => (
        <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>KEY ACHIEVEMENTS</h2>
            {resumeData.achievements.map((ach, idx) => (
                <div key={idx} style={{ marginBottom: '8px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 'bold', marginBottom: '2px' }}>🏆 {ach.title}</div>
                    <p style={{ fontSize: '8px', color: '#666', margin: '0', lineHeight: '1.3' }}>
                        {ach.description}
                    </p>
                </div>
            ))}
        </div>
    );

    const Skills = () => {
        const thirdLength = Math.ceil(resumeData.skills.length / 3);
        const col1 = resumeData.skills.slice(0, thirdLength);
        const col2 = resumeData.skills.slice(thirdLength, thirdLength * 2);
        const col3 = resumeData.skills.slice(thirdLength * 2);

        return (
            <div>
                <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>SKILLS</h2>
                <div style={{ display: 'flex' }}>
                    <ul style={{ margin: '0', fontSize: '10px', fontWeight: '600', color: '#000000ff', lineHeight: '1.5', flex: '1' }}>
                        {col1.map((skill, idx) => (
                            <li key={idx} style={{ marginBottom: '2px' }}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '10px', fontWeight: '600', color: '#000000ff', lineHeight: '1.5', flex: '1' }}>
                        {col2.map((skill, idx) => (
                            <li key={idx} style={{ marginBottom: '2px' }}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                    <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '10px', fontWeight: '600', color: '#000000ff', lineHeight: '1.5', flex: '1' }}>
                        {col3.map((skill, idx) => (
                            <li key={idx} style={{ marginBottom: '2px' }}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    const Education = () => (
        <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>EDUCATION</h2>
            {resumeData.education.map((edu, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '10px', marginBottom: '2px' }}>
                        {edu.degree}
                    </div>
                    <div style={{ fontSize: '10px', color: '#0066cc', fontWeight: 'bold', marginBottom: '1px' }}>
                        {edu.school}
                    </div>
                    <div style={{ fontSize: '9px', color: '#666' }}>
                        📅 {edu.period}  📍 {edu.location}
                    </div>
                </div>
            ))}
        </div>
    );

    const Certifications = () => (
        <div style={{ marginBottom: '15px', marginTop: '30px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>CERTIFICATION</h2>
            <ul style={{ margin: '0', paddingLeft: '15px', fontSize: '9px', lineHeight: '1.4' }}>
                {resumeData.certifications.map((cert, idx) => (
                    <li key={idx} style={{ marginBottom: '3px', listStyle: 'disc' }}>{cert}</li>
                ))}
            </ul>
        </div>
    );

    const Languages = () => (
        <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>LANGUAGES</h2>
            {resumeData.languages.map((lang, idx) => (
                <div key={idx} style={{ marginBottom: '8px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 'bold', marginBottom: '2px' }}>
                        {lang.name}
                        <span style={{ fontSize: '8px', color: '#666', fontWeight: 'normal', marginLeft: '4px' }}>
                            {lang.proficiency}
                        </span>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: i < lang.level ? '#0066cc' : '#ddd'
                                }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    const Training = () => (
        <div>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>TRAINING / COURSES</h2>
            {resumeData.training.map((course, idx) => (
                <div key={idx} style={{ marginBottom: '8px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 'bold', marginBottom: '1px' }}>{course.title}</div>
                    <p style={{ fontSize: '8px', color: '#666', margin: '0' }}>{course.provider}</p>
                </div>
            ))}
        </div>
    );

    const Projects = () => (
        <div style={{ marginBottom: '15px' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>PROJECTS</h2>
            {resumeData.projects.map((proj, idx) => (
                <div key={idx} style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '10px', marginBottom: '2px' }}>
                        {proj.title}
                    </div>
                    <div style={{ fontSize: '9px', color: '#666', marginBottom: '2px' }}>
                        📅 {proj.period}  📍 {proj.location}
                    </div>
                    <p style={{ fontSize: '9px', color: '#666', marginBottom: '4px', margin: '0 0 4px 0' }}>
                        {proj.description}
                    </p>
                    <ul style={{ margin: '0', paddingLeft: '15px', fontSize: '9px', lineHeight: '1.3' }}>
                        {proj.details.map((detail, i) => (
                            <li key={i} style={{ marginBottom: '2px' }}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    const Interests = () => (
        <div>
            <h2 style={{ fontSize: '11px', fontWeight: 'bold', borderBottom: '2px solid #000', paddingBottom: '4px', marginBottom: '8px' }}>INTERESTS</h2>
            <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ fontSize: '14px', color: '#0066cc', flexShrink: 0 }}>🔍</span>
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '9px', marginBottom: '2px' }}>
                        Tech Enthusiasm and Cybersecurity
                    </div>
                    <p style={{ fontSize: '8px', color: '#666', margin: '0', lineHeight: '1.3' }}>
                        {resumeData.interests}
                    </p>
                </div>
            </div>
        </div>
    );

    const sections = [
        { id: 'header', component: Header },
        { id: 'summary', component: Summary },
        { id: 'experience', component: Experience },
        { id: 'achievements', component: KeyAchievements },
        { id: 'skills', component: Skills },
        { id: 'education', component: Education },
        { id: 'certifications', component: Certifications },
        { id: 'languages', component: Languages },
        { id: 'training', component: Training },
        { id: 'projects', component: Projects },
        { id: 'interests', component: Interests }
    ];

    // Calculate dynamic heights based on data - more conservative estimates
    const calculateSectionHeight = (sectionId) => {
        const baseHeights = {
            'header': 120,
            'summary': 80,
            'achievements': 70,
            'skills': 120,
            'interests': 80
        };

        if (baseHeights[sectionId]) return baseHeights[sectionId];

        switch (sectionId) {
            case 'experience':
                return 70 + (resumeData.experience.length * 150);
            case 'education':
                return 60 + (resumeData.education.length * 70);
            case 'certifications':
                return 80 + (resumeData.certifications.length * 20);
            case 'languages':
                return 60 + (resumeData.languages.length * 60);
            case 'training':
                return 60 + (resumeData.training.length * 60);
            case 'projects':
                return 70 + (resumeData.projects.length * 150);
            default:
                return 100;
        }
    };

    // Distribute sections into pages with independent left and right columns
    useEffect(() => {
        const PAGE_HEIGHT = 297 * 3.78; // mm to px (approximate)
        const PADDING = 12 * 3.78 * 2; // 12mm top and bottom padding
        const AVAILABLE_HEIGHT = PAGE_HEIGHT - PADDING - 20; // Extra buffer for safety
        const HEADER_HEIGHT = 120;

        const headerSection = sections.find(s => s.id === 'header');
        const nonHeaderSections = sections.filter(s => s.id !== 'header');

        // Define sections for left and right columns
        const leftPrioritySections = nonHeaderSections.filter(s => 
            ['summary', 'experience', 'projects'].includes(s.id)
        );
        const rightPrioritySections = nonHeaderSections.filter(s => 
            ['achievements', 'skills', 'certifications', 'languages', 'training', 'interests', 'education'].includes(s.id)
        );

        // Fill LEFT column independently
        const leftPages = [];
        let currentLeftPage = [headerSection];
        let leftHeight = HEADER_HEIGHT;

        leftPrioritySections.forEach(section => {
            const sectionHeight = calculateSectionHeight(section.id);
            
            if (leftHeight + sectionHeight <= AVAILABLE_HEIGHT) {
                currentLeftPage.push(section);
                leftHeight += sectionHeight;
            } else {
                // Start new page
                leftPages.push([...currentLeftPage]);
                currentLeftPage = [section];
                leftHeight = sectionHeight;
            }
        });

        if (currentLeftPage.length > 0) {
            leftPages.push(currentLeftPage);
        }

        // Fill RIGHT column independently - starts accounting for header space on page 1
        const rightPages = [[]];
        let currentRightPageIndex = 0;
        let currentPageHeight = HEADER_HEIGHT; // Reserve space for header on first page

        rightPrioritySections.forEach(section => {
            const sectionHeight = calculateSectionHeight(section.id);
            
            // Check if section fits in current page
            const fits = currentPageHeight + sectionHeight <= AVAILABLE_HEIGHT;
            
            if (fits) {
                // Fits on current page
                rightPages[currentRightPageIndex].push(section);
                currentPageHeight += sectionHeight;
            } else {
                // Doesn't fit - move to next page
                currentRightPageIndex++;
                rightPages[currentRightPageIndex] = [section];
                currentPageHeight = sectionHeight; // Reset height for new page (no header on subsequent pages)
            }
        });

        // Merge left and right pages
        const maxPages = Math.max(leftPages.length, rightPages.length);
        const finalPages = [];

        for (let i = 0; i < maxPages; i++) {
            finalPages.push({
                left: leftPages[i] || [],
                right: rightPages[i] || []
            });
        }

        setPages(finalPages);
    }, []);

    const Page = ({ pageData, isFirstPage }) => {
        const { left: leftSections, right: rightSections } = pageData;
        const headerSection = isFirstPage ? leftSections.find(s => s.id === 'header') : null;
        const leftContentSections = leftSections.filter(s => s.id !== 'header');

        return (
            <div style={{ width: '210mm', height: '297mm', backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px', boxSizing: 'border-box', padding: '12mm' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {headerSection && (
                        <div style={{ marginBottom: '20px' }}>
                            {(() => {
                                const Component = headerSection.component;
                                return <Component />;
                            })()}
                        </div>
                    )}
                    <div style={{ display: 'grid', gridTemplateColumns: '70% 30%', gap: '20px', flex: 1, minHeight: 0 }}>
                        <div>
                            {leftContentSections.map((section, idx) => {
                                const Component = section.component;
                                return <Component key={section.id} />;
                            })}
                        </div>
                        <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                            {rightSections.map((section, idx) => {
                                const Component = section.component;
                                return <Component key={section.id} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: '20px', minHeight: '100vh' }}>
            <div style={{ transformOrigin: 'top center', transform: 'scale(0.7)', width: 'fit-content', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {pages.map((pageData, idx) => (
                    <Page key={idx} pageData={pageData} isFirstPage={idx === 0} />
                ))}
            </div>
        </div>
    );
}
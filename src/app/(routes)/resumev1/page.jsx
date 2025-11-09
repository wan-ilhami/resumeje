'use client';

import React, { useState, useEffect } from 'react'
import ResumeForm from '@/components/forms/resume.form'
import ResumePreview from '@/components/forms/resume.previewv1'

const STORAGE_KEY = 'resume_form_data';

const getInitialFormData = () => ({
    profileImage: null,
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    state: "",
    linkedin: "",
    portfolio: "",
    professionalSummary: "",
    education: [{ school: "", degree: "", field: "", graduationYear: "" }],
    experience: [{ company: "", position: "", startDate: "", endDate: "", description: "" }],
    skills: [{ category: "", skills: "" }],
    certifications: [""],
    projects: [{ title: "", technologies: "", description: "" }],
    languages: [""],
});

const ResumePage = () => {
    const [formData, setFormData] = useState(getInitialFormData())
    const [isMounted, setIsMounted] = useState(false)

    // Load from localStorage only after mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const saved = localStorage.getItem(STORAGE_KEY)
                if (saved) {
                    const parsed = JSON.parse(saved)
                    // Merge with defaults to ensure all fields exist
                    setFormData(prev => ({ ...getInitialFormData(), ...parsed }))
                }
            } catch (e) {
                console.error('Failed to load saved form data:', e)
            }
        }
        setIsMounted(true)
    }, [])

    // Save to localStorage whenever form data changes
    useEffect(() => {
        if (isMounted && typeof window !== 'undefined') {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
            } catch (e) {
                console.error('Failed to save form data:', e)
            }
        }
    }, [formData, isMounted])

    const handleFormChange = (updates) => {
        setFormData((prev) => ({ ...prev, ...updates }))
    }

    return (
        <div className="w-full">
            <header className='mb-10'>
                <h1 className='text-4xl font-bold text-center pt-8'>Resume Builder</h1>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                <div className="space-y-4">
                    <ResumeForm
                        formData={formData}
                        onFormChange={handleFormChange}
                    />
                </div>

                {/* Desktop Preview */}
                <div className="hidden lg:block">
                    <div className="sticky top-4">
                        <ResumePreview formData={formData} />
                    </div>
                </div>

                {/* Mobile Preview */}
                <div className="lg:hidden">
                    <div className="mt-8">
                        <ResumePreview formData={formData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePage
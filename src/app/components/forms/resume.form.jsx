import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Upload, User } from "lucide-react"
import { useState, useEffect } from "react"

export default function ResumeForm({ formData, onFormChange }) {
    const [isMounted, setIsMounted] = useState(false)
    const fileInputRef = useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        onFormChange({ [name]: value })
    }

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                onFormChange({ profileImage: event.target?.result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = () => {
        onFormChange({ profileImage: null })
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const handleArrayChange = (section, index, field, value) => {
        const updated = [...formData[section]]
        updated[index] = { ...updated[index], [field]: value }
        onFormChange({ [section]: updated })
    }

    const handleStringArrayChange = (section, index, value) => {
        const updated = [...formData[section]]
        updated[index] = value
        onFormChange({ [section]: updated })
    }

    const addItem = (section) => {
        const newItem = ['certifications', 'languages'].includes(section) ? "" : {}
        onFormChange({ [section]: [...formData[section], newItem] })
    }

    const removeItem = (section, index) => {
        const updated = formData[section].filter((_, i) => i !== index)
        onFormChange({ [section]: updated })
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div className="space-y-6">
            {/* Contact Information */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isMounted && (
                        <div>
                            <Label>Profile Picture</Label>
                            <div className="mt-4 flex flex-col items-center gap-4">
                                {formData.profileImage ? (
                                    <div className="relative">
                                        <img
                                            src={formData.profileImage}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-lg object-cover border border-gray-200"
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-black/0 hover:bg-black/10 transition-colors" />
                                    </div>
                                ) : (
                                    <div className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                                        <User size={48} className="text-gray-400" />
                                    </div>
                                )}

                                <label className="cursor-pointer w-full max-w-xs">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full gap-2"
                                        asChild
                                    >
                                        <span>
                                            <Upload size={16} />
                                            Upload Image
                                        </span>
                                    </Button>
                                </label>

                                {formData.profileImage && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={handleRemoveImage}
                                        className="text-destructive hover:text-destructive"
                                    >
                                        <Trash2 size={16} /> Remove
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="grid gap-2">
                        <Label htmlFor="fullName">Full Name <span style={{ color: 'red' }}>*</span></Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="jobTitle">Job Title <span style={{ color: 'red' }}>*</span></Label>
                        <Input
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder="e.g. Full Stack Developer"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span></Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+60 (555) 123-4567"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="state">State <span style={{ color: 'red' }}>*</span></Label>
                        <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="linkedin">LinkedIn </Label>
                        <Input
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            placeholder="linkedin.com/in/yourprofile"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="portfolio">Portfolio</Label>
                        <Input
                            id="portfolio"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            placeholder="yourportfolio.com"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Professional Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Professional Summary <span style={{ color: 'red' }}>*</span></CardTitle>
                </CardHeader>
                <CardContent>
                    <Label htmlFor="summary" className="text-sm font-medium">
                        Summary
                    </Label>
                    <Textarea
                        id="summary"
                        name="professionalSummary"
                        value={formData.professionalSummary}
                        onChange={handleChange}
                        placeholder="Brief overview of your professional background and key strengths"
                        className="mt-2"
                        rows={4}
                    />
                </CardContent>
            </Card>

            {/* Experience */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Professional Experience <span style={{ color: 'red' }}>*</span></CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem("experience")}
                        >
                            <Plus className="mr-2" size={16} /> Add
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isMounted && formData.experience.map((exp, idx) => (
                        <div key={idx} className="p-4 border rounded-lg space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-2">
                                    <Label htmlFor={`position-${idx}`} className="text-sm">
                                        Position <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`position-${idx}`}
                                        value={exp.position || ""}
                                        onChange={(e) => handleArrayChange("experience", idx, "position", e.target.value)}
                                        placeholder="Job title"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor={`company-${idx}`} className="text-sm">
                                        Company <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`company-${idx}`}
                                        value={exp.company || ""}
                                        onChange={(e) => handleArrayChange("experience", idx, "company", e.target.value)}
                                        placeholder="Company name"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-2">
                                    <Label htmlFor={`startDate-${idx}`} className="text-sm">
                                        Start Date <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`startDate-${idx}`}
                                        value={exp.startDate || ""}
                                        onChange={(e) => handleArrayChange("experience", idx, "startDate", e.target.value)}
                                        placeholder="MM/YYYY"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor={`endDate-${idx}`} className="text-sm">
                                        End Date <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`endDate-${idx}`}
                                        value={exp.endDate || ""}
                                        onChange={(e) => handleArrayChange("experience", idx, "endDate", e.target.value)}
                                        placeholder="MM/YYYY or Present"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor={`expDesc-${idx}`} className="text-sm">
                                    Description <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Textarea
                                    id={`expDesc-${idx}`}
                                    value={exp.description || ""}
                                    onChange={(e) => handleArrayChange("experience", idx, "description", e.target.value)}
                                    placeholder="Key responsibilities and achievements"
                                    rows={3}
                                />
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem("experience", idx)}
                                className="text-destructive hover:text-destructive"
                            >
                                <Trash2 className="mr-2" size={16} /> Remove
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* ===== PROJECTS SECTION ===== */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Projects / Achievements </CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem("projects")}
                        >
                            <Plus className="mr-2" size={16} /> Add
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isMounted && formData.projects.map((proj, idx) => (
                        <div key={idx} className="p-4 border rounded-lg space-y-3">
                            <div className="grid gap-2">
                                <Label htmlFor={`projTitle-${idx}`} className="text-sm">
                                    Project Title
                                </Label>
                                <Input
                                    id={`projTitle-${idx}`}
                                    value={proj.title || ""}
                                    onChange={(e) => handleArrayChange("projects", idx, "title", e.target.value)}
                                    placeholder="Project name"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor={`tech-${idx}`} className="text-sm">
                                    Technologies
                                </Label>
                                <Input
                                    id={`tech-${idx}`}
                                    value={proj.technologies || ""}
                                    onChange={(e) => handleArrayChange("projects", idx, "technologies", e.target.value)}
                                    placeholder="e.g. React, Node.js, AWS"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor={`projDesc-${idx}`} className="text-sm">
                                    Description
                                </Label>
                                <Textarea
                                    id={`projDesc-${idx}`}
                                    value={proj.description || ""}
                                    onChange={(e) => handleArrayChange("projects", idx, "description", e.target.value)}
                                    placeholder="Project highlights (one per line)"
                                    rows={3}
                                />
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem("projects", idx)}
                                className="text-destructive hover:text-destructive"
                            >
                                <Trash2 className="mr-2" size={16} /> Remove
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* ===== EDUCATION SECTION ===== */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Education <span style={{ color: 'red' }}>*</span></CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem("education")}
                        >
                            <Plus className="mr-2" size={16} /> Add
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isMounted && formData.education.map((edu, idx) => (
                        <div key={idx} className="p-4 border rounded-lg space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-2">
                                    <Label htmlFor={`degree-${idx}`} className="text-sm">
                                        Level of Education <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`degree-${idx}`}
                                        value={edu.degree || ""}
                                        onChange={(e) => handleArrayChange("education", idx, "degree", e.target.value)}
                                        placeholder="Bachelor's, Master's, etc."
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor={`field-${idx}`} className="text-sm">
                                        Field of Study <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`field-${idx}`}
                                        value={edu.field || ""}
                                        onChange={(e) => handleArrayChange("education", idx, "field", e.target.value)}
                                        placeholder="Computer Science"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-2">
                                    <Label htmlFor={`school-${idx}`} className="text-sm">
                                        School/University <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`school-${idx}`}
                                        value={edu.school || ""}
                                        onChange={(e) => handleArrayChange("education", idx, "school", e.target.value)}
                                        placeholder="University name"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor={`gradYear-${idx}`} className="text-sm">
                                        Graduation Year <span style={{ color: 'red' }}>*</span>
                                    </Label>
                                    <Input
                                        id={`gradYear-${idx}`}
                                        value={edu.graduationYear || ""}
                                        onChange={(e) => handleArrayChange("education", idx, "graduationYear", e.target.value)}
                                        placeholder="YYYY"
                                    />
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem("education", idx)}
                                className="text-destructive hover:text-destructive"
                            >
                                <Trash2 className="mr-2" size={16} /> Remove
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* ===== SKILLS SECTION ===== */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Skills <span style={{ color: 'red' }}>*</span></CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem("skills")}
                        >
                            <Plus className="mr-2" size={16} /> Add
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isMounted && formData.skills.map((skill, idx) => (
                        <div key={idx} className="p-3 border rounded-lg space-y-2">
                            <Input
                                value={skill.category || ""}
                                onChange={(e) => handleArrayChange("skills", idx, "category", e.target.value)}
                                placeholder="Skill category (e.g., Programming Languages)"
                            />
                            <Textarea
                                value={skill.skills || ""}
                                onChange={(e) => handleArrayChange("skills", idx, "skills", e.target.value)}
                                placeholder="List skills separated by commas and if none, write N/A"
                                rows={2}
                            />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem("skills", idx)}
                                className="text-destructive hover:text-destructive"
                            >
                                <Trash2 className="mr-2" size={16} /> Remove
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* ===== CERTIFICATIONS SECTION ===== */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Certifications </CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem("certifications")}
                        >
                            <Plus className="mr-2" size={16} /> Add
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-2">
                    {isMounted && formData.certifications.map((cert, idx) => (
                        <div key={idx} className="flex gap-2">
                            <Input
                                value={cert || ""}
                                onChange={(e) => handleStringArrayChange("certifications", idx, e.target.value)}
                                placeholder="Certification name"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem("certifications", idx)}
                                className="text-destructive hover:text-destructive"
                            >
                                <Trash2 size={16} />
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* ===== LANGUAGES SECTION ===== */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Languages <span style={{ color: 'red' }}>*</span></CardTitle>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addItem("languages")}
                        >
                            <Plus className="mr-2" size={16} /> Add
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-2">
                    {isMounted && formData.languages.map((lang, idx) => (
                        <div key={idx} className="flex gap-2">
                            <Input
                                value={lang || ""}
                                onChange={(e) => handleStringArrayChange("languages", idx, e.target.value)}
                                placeholder="e.g. English (Fluent), Spanish (Intermediate)"
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem("languages", idx)}
                                className="text-destructive hover:text-destructive"
                            >
                                <Trash2 size={16} />
                            </Button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
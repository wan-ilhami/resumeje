import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/ui/date.picker"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SignatureCanvas } from "@/components/ui/signature.canvas"

const AttachmentItem = ({ file, onRemove }) => (
  <div className="flex items-center justify-between p-2 bg-muted rounded-md">
    <div className="flex items-center gap-2">
      <span>📎</span>
      <span className="truncate">{file.name}</span>
      <span className="text-sm text-muted-foreground">
        {(file.size / 1024 / 1024).toFixed(2)} MB
      </span>
    </div>
    <Button
      variant="ghost"
      size="sm"
      onClick={onRemove}
      className="h-8 w-8 p-0"
    >
      ✕
    </Button>
  </div>
)

export default function LetterForm({ formData, onFormChange }) {
  const [attachments, setAttachments] = useState([])

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    setAttachments([...attachments, ...files])
  }

  const handleRemoveAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  const ClearButton = ({ onClick, fields }) =>
    fields.some((field) => formData[field]) ? (
      <Button
        variant="outline"
        size="sm"
        onClick={onClick}
        className="text-xs text-muted-foreground hover:text-destructive border-muted-foreground/30 hover:border-destructive/50 hover:bg-transparent flex items-center gap-1.5"
      >
        🗑 Clear Form
      </Button>
    ) : null

  return (
    <div className="space-y-6">
      {/* 1️⃣ Parent’s Address */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">1</span>
              Parent’s Address
            </div>
            <ClearButton
              fields={["parentName", "address", "postcode", "city", "state"]}
              onClick={() =>
                onFormChange({
                  parentName: "",
                  address: "",
                  postcode: "",
                  city: "",
                  state: "",
                })
              }
            />
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Label className="text-lg">Parent Name *</Label>
          <Input
            className="text-lg h-12"
            value={formData.parentName}
            onChange={(e) => onFormChange({ parentName: e.target.value })}
            placeholder="Enter parent's full name"
            required
          />

          <Label className="text-lg">Address *</Label>
          <Input
            className="text-lg h-12"
            value={formData.address}
            onChange={(e) => onFormChange({ address: e.target.value })}
            placeholder="Enter home address"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-lg">Postcode *</Label>
              <Input
                className="text-lg h-12"
                value={formData.postcode}
                onChange={(e) => onFormChange({ postcode: e.target.value })}
                placeholder="Enter postcode"
                required
              />
            </div>
            <div>
              <Label className="text-lg">City *</Label>
              <Input
                className="text-lg h-12"
                value={formData.city}
                onChange={(e) => onFormChange({ city: e.target.value })}
                placeholder="Enter city"
                required
              />
            </div>
            <div>
              <Label className="text-lg">State *</Label>
              <Input
                className="text-lg h-12"
                value={formData.state}
                onChange={(e) => onFormChange({ state: e.target.value })}
                placeholder="Enter state"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2️⃣ School Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">2</span>
              School Information
            </div>
            <ClearButton
              fields={[
                "teacherName",
                "schoolName",
                "schoolAddress",
                "schoolPostcode",
                "schoolCity",
                "schoolState",
                "includeSchoolAddress",
              ]}
              onClick={() =>
                onFormChange({
                  teacherName: "",
                  schoolName: "",
                  schoolAddress: "",
                  schoolPostcode: "",
                  schoolCity: "",
                  schoolState: "",
                  includeSchoolAddress: false,
                })
              }
            />
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Label className="text-lg">Teacher’s Name (Optional)</Label>
          <Input
            className="text-lg h-12"
            value={formData.teacherName}
            onChange={(e) => onFormChange({ teacherName: e.target.value })}
            placeholder="Enter teacher's name"
          />

          <Label className="text-lg">School Name *</Label>
          <Input
            className="text-lg h-12"
            value={formData.schoolName}
            onChange={(e) => onFormChange({ schoolName: e.target.value })}
            placeholder="Enter school name"
            required
          />

          <div className="flex items-center space-x-2">
            <Checkbox
              id="includeAddress"
              checked={formData.includeSchoolAddress}
              onCheckedChange={(checked) => onFormChange({ includeSchoolAddress: checked })}
            />
            <Label htmlFor="includeAddress" className="text-lg font-normal">
              Include school address
            </Label>
          </div>

          {formData.includeSchoolAddress && (
            <>
              <Label className="text-lg">School Address *</Label>
              <Input
                className="text-lg h-12"
                value={formData.schoolAddress}
                onChange={(e) => onFormChange({ schoolAddress: e.target.value })}
                placeholder="Enter school address"
                required
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-lg">Postcode *</Label>
                  <Input
                    className="text-lg h-12"
                    value={formData.schoolPostcode}
                    onChange={(e) => onFormChange({ schoolPostcode: e.target.value })}
                    placeholder="Enter postcode"
                    required
                  />
                </div>
                <div>
                  <Label className="text-lg">City *</Label>
                  <Input
                    className="text-lg h-12"
                    value={formData.schoolCity}
                    onChange={(e) => onFormChange({ schoolCity: e.target.value })}
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div>
                  <Label className="text-lg">State *</Label>
                  <Input
                    className="text-lg h-12"
                    value={formData.schoolState}
                    onChange={(e) => onFormChange({ schoolState: e.target.value })}
                    placeholder="Enter state"
                    required
                  />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* 3️⃣ Letter Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">3</span>
            Letter Details
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Label className="text-lg">Student’s Name *</Label>
          <Input
            className="text-lg h-12"
            value={formData.studentName}
            onChange={(e) => onFormChange({ studentName: e.target.value })}
            placeholder="Enter student’s full name"
            required
          />

          <Label className="text-lg">Class *</Label>
          <Input
            className="text-lg h-12"
            value={formData.studentClass}
            onChange={(e) => onFormChange({ studentClass: e.target.value })}
            placeholder="Enter class (e.g. 3 Amanah)"
            required
          />

          <Label className="text-lg">Reason for Absence *</Label>
          <Textarea
            className="text-lg"
            value={formData.reason}
            onChange={(e) => onFormChange({ reason: e.target.value })}
            placeholder="Explain the reason for absence"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-lg">Start Date *</Label>
              <DatePicker
                date={formData.startDate}
                onSelect={(date) => onFormChange({ startDate: date })}
              />
            </div>
            <div>
              <Label className="text-lg">End Date *</Label>
              <DatePicker
                date={formData.endDate}
                onSelect={(date) => onFormChange({ endDate: date })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 4️⃣ Attachments */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">4</span>
            Attachments (Optional)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-muted-foreground"
          />
          <div className="space-y-2">
            {attachments.map((file, i) => (
              <AttachmentItem
                key={i}
                file={file}
                onRemove={() => handleRemoveAttachment(i)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 5️⃣ Signature */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">5</span>
            Parent’s Signature
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignatureCanvas
            onSave={(signature) => onFormChange({ signature })}
            language="english"
          />
        </CardContent>
      </Card>
    </div>
  )
}

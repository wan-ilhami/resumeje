'use client'

import { useState, useEffect } from 'react'
import { Trash2, Send, LogOut } from 'lucide-react'
import AuthSection from '../../components/forms/login.auth'
import Loading from '@/loading'

export default function FeedbackPage() {
    const [messages, setMessages] = useState([])
    const [user, setUser] = useState(null)
    const [formData, setFormData] = useState({ message: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)
    const [deletingId, setDeletingId] = useState(null)
    const [initialLoading, setInitialLoading] = useState(true)
    const [mounted, setMounted] = useState(false)

    // Initialize feedback (load messages and user)
    useEffect(() => {
        const initializeFeedback = async () => {
            try {
                setInitialLoading(true)

                // Load messages from database
                const messagesRes = await fetch('/api/messages')
                if (!messagesRes.ok) throw new Error('Failed to fetch messages')
                const messagesData = await messagesRes.json()
                console.log('Messages data:', messagesData)
                setMessages(messagesData)

                // Load user from localStorage
                const savedUser = localStorage.getItem('feedback_user')
                if (savedUser) {
                    try {
                        setUser(JSON.parse(savedUser))
                    } catch (error) {
                        console.error('Error loading user from cache:', error)
                        localStorage.removeItem('feedback_user')
                    }
                }
            } catch (error) {
                console.error('Failed to initialize feedback:', error)
                setMessages([])
            } finally {
                setInitialLoading(false)
                setMounted(true)
            }
        }

        initializeFeedback()
    }, [])

    const handleGoogleSuccess = async (credentialResponse) => {
        setAuthLoading(true)
        try {
            const response = await fetch('/api/auth/validate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential: credentialResponse.credential })
            })

            const data = await response.json()

            if (data.success) {
                const userData = {
                    name: data.user.name,
                    email: data.user.email,
                    picture: data.user.picture,
                    provider: 'google'
                }
                setUser(userData)
                localStorage.setItem('feedback_user', JSON.stringify(userData))
            } else {
                console.error('Authentication failed:', data.error)
            }
        } catch (error) {
            console.error('Error validating token:', error)
        } finally {
            setAuthLoading(false)
        }
    }

    const handleGoogleError = () => {
        console.log('Google login failed')
        setAuthLoading(false)
    }

    const handleLogout = () => {
        setUser(null)
        setFormData({ message: '' })
        localStorage.removeItem('feedback_user')
    }

    const handleInputChange = (e) => {
        const { value } = e.target
        setFormData(prev => ({ ...prev, message: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.message.trim() || !user) return

        setLoading(true)
        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    message: formData.message,
                    picture: user.picture,
                    provider: user.provider
                })
            })


            if (!res.ok) throw new Error('Failed to post message')
            const newMessage = await res.json()
            setMessages(prev => [newMessage, ...prev])
            setFormData({ message: '' })
            setSuccess(true)
            setTimeout(() => setSuccess(false), 3000)
        } catch (error) {
            console.error('Failed to post message:', error)
        } finally {
            setLoading(false)
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffMs = now - date
        const diffMins = Math.floor(diffMs / 60000)
        const diffHours = Math.floor(diffMs / 3600000)
        const diffDays = Math.floor(diffMs / 86400000)

        if (diffMins < 1) return 'just now'
        if (diffMins < 60) return `${diffMins}m ago`
        if (diffHours < 24) return `${diffHours}h ago`
        if (diffDays < 7) return `${diffDays}d ago`

        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    if (!mounted) return <Loading />

    return (
        <div className="w-full">
            <header className='mb-10'>
                <h1 className='text-4xl font-bold text-center pt-8'>Share Your Feedback</h1>
            </header>

            <div className="">
                <div className="w-full mx-auto px-4">
                    {/* Intro Section */}
                    <div className="flex items-center justify-center mb-8 text-center flex-col">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Your insights help us improve. Tell us what's working well and where we can do better.
                        </p>
                    </div>

                    {/* Form Section */}
                    <section className="mb-5">
                        {!user ? (
                            <AuthSection
                                handleGoogleSuccess={handleGoogleSuccess}
                                handleGoogleError={handleGoogleError}
                            />
                        ) : (
                            <div
                                key="form"
                                className="rounded-lg p-8"
                                style={{
                                    backgroundColor: 'var(--muted)',
                                    border: '1px solid var(--border)'
                                }}
                            >
                                <div
                                    className="flex items-center justify-between mb-8 pb-6 border-b"
                                    style={{ borderColor: 'var(--border)' }}
                                >
                                    <div className="flex items-center gap-4">
                                        {user.picture ? (
                                            <img
                                                src={user.picture}
                                                alt={user.name}
                                                onError={(e) => {
                                                    e.target.src = '/static/images/default-avatar.jpg'
                                                }}
                                                className="w-12 h-12 rounded-full"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                                                {user.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <p
                                                className="font-semibold text-lg"
                                                
                                            >
                                                {user.name}
                                            </p>
                                            <p className="text-sm text-slate-800 dark:text-slate-300" >
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-colors hover:bg-red-600 hover:text-white"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Sign Out
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Share your thoughts..."
                                            className="w-full p-4 rounded-lg resize-none border-2 transition-all focus:outline-none"
                                            style={{
                                                backgroundColor: 'var(--background)',
                                                color: 'var(--foreground)',
                                                borderColor: 'var(--border)'
                                            }}
                                            rows="5"
                                            maxLength="500"
                                        />
                                        <div
                                            className="absolute bottom-3 right-3 text-xs"
                                            style={{ color: 'var(--secondary)' }}
                                        >
                                            {formData.message.length} / 500
                                        </div>
                                    </div>

                                    {success && (
                                        <div
                                            className="rounded-lg p-4 text-sm font-medium flex items-center gap-3"
                                            style={{
                                                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                                color: '#22c55e',
                                                border: '1px solid rgba(34, 197, 94, 0.3)'
                                            }}
                                        >
                                            <span className="text-lg">✓</span>
                                            Message posted successfully!
                                        </div>
                                    )}

                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading || !formData.message.trim()}
                                        className="w-full font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{
                                            backgroundColor:
                                                loading || !formData.message.trim()
                                                    ? 'var(--border)'
                                                    : 'var(--foreground)',
                                            color: 'var(--background)'
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="animate-spin">⌛</span>
                                                Posting...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Post Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </section>


                    {/* Messages Section */}
                    <section>
                        <div className="space-y-4">
                            {initialLoading ? (
                                <div className="rounded-lg p-12 text-center bg-[var(--background)] border-2 border-dashed border-[var(--border)]">
                                    <p className="text-[var(--secondary)]">
                                        Loading messages...
                                    </p>
                                </div>
                            ) : messages.length === 0 ? (
                                <div className="rounded-lg p-12 text-center bg-[var(--background)] border-2 border-dashed border-[var(--border)]">
                                    <p className="text-[var(--secondary)]">
                                        No messages yet. Be the first to share your thoughts.
                                    </p>
                                </div>
                            ) : (
                                messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        style={{
                                            backgroundColor: 'var(--muted)',
                                            border: '1px solid var(--border)'
                                        }}
                                        className={`group rounded-lg p-6 border bg-[var(--background)] border-[var(--border)] transition-all ${deletingId === msg.id ? 'opacity-50 scale-95' : ''}`}
                                    >
                                        <div className="flex items-start justify-between gap-3 mb-4">
                                            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                                                {msg.name}
                                            </h3>
                                            <time className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                                {formatDate(msg.createdAt)}
                                            </time>
                                        </div>

                                        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 break-words">
                                            {msg.message}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
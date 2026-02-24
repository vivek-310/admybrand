import { useState } from 'react'
import { motion } from 'framer-motion'
import Input from './Input'
import Button from './Button'

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  console.log("HELLO")

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      onSubmit?.(formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          disabled={isSubmitting}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          disabled={isSubmitting}
        />
      </div>

      <Input
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        disabled={isSubmitting}
      />

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
          <span className="text-red-400 ml-1">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`
            w-full bg-white/5 border rounded-lg px-4 py-2 text-white 
            placeholder-gray-400 transition-all duration-200
            focus:outline-none focus:ring-2
            ${
              errors.message
                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
            }
          `}
          disabled={isSubmitting}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-green-500"
          >
            Message sent successfully!
          </motion.p>
        )}

        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-red-500"
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </div>
    </motion.form>
  )
}

export default ContactForm 
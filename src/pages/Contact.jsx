import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 German Street\nBerlin, Germany 10115',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+49 30 1234 5678',
      link: 'tel:+493012345678'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@dasnashwerk.de',
      link: 'mailto:info@dasnashwerk.de'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sat: 11AM-10PM\nSunday: 12PM-9PM'
    }
  ]

  const businessHours = [
    { day: 'Monday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 9:00 PM' }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-20" style={{ background: 'var(--matcha-green)' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=600&fit=crop)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact Fro
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto bg-black/50"
          >
            We'd love to hear from you. Get in touch with us for questions, 
            feedback, or just to say hello!
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16" style={{ background: '#f4f1ea' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--matcha-green)', fontFamily: 'Playfair Display, serif' }}>
              Get in Touch
            </h2>
            <p className="text-xl" style={{ color: '#1a2f1f' }}>
              We're here to help with any questions or feedback
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'var(--matcha-green)' }}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--matcha-green)' }}>{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="block" 
                    style={{ color: '#1a2f1f' }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {info.content.split('\n').map((line, i) => (
                      <p key={i} className="text-sm">{line}</p>
                    ))}
                  </a>
                ) : (
                  <div style={{ color: '#1a2f1f' }}>
                    {info.content.split('\n').map((line, i) => (
                      <p key={i} className="text-sm">{line}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1a2f1f 0%, var(--matcha-green) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Send us a Message
              </h3>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-6 py-3 text-lg font-semibold text-white rounded-lg transition-colors duration-200"
                    style={{ background: '#ffd700', color: 'var(--matcha-green)' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Business Hours
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-white/20"
                  >
                    <span className="text-white font-medium">{schedule.day}</span>
                    <span className="text-white/80">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <h4 className="text-xl font-semibold mb-4 text-white">Special Notes</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Happy Hour: 4:00 PM - 6:00 PM</li>
                  <li>• Private events available</li>
                  <li>• Catering services offered</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16" style={{ background: '#f4f1ea' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--matcha-green)', fontFamily: 'Playfair Display, serif' }}>
              Find Us
            </h2>
            <p className="text-xl" style={{ color: '#1a2f1f' }}>
              Located in the heart of Berlin's culinary district
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.6358904115623!2d8.0167554!3d50.8749402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc1c92d2173007%3A0xa8fb7295a357024f!2sAm%20Bahnhof%2017%2C%2057072%20Siegen%2C%20Germany!5e0!3m2!1sen!2sin!4v1755204772293!5m2!1sen!2sin'
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409748304355!2d13.377705!3d52.516275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMwJzU4LjYiTiAxM8KwMjInNDAuMCJF!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact 
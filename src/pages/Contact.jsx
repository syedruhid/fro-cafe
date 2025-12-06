import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Am Bahnhof 17, 57072\n Siegen, Germany',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+49 271 74128666',
      link: 'tel:+493012345678'
    },
    // {
    //   icon: Mail,
    //   title: 'Email',
    //   content: 'info@dasnashwerk.de',
    //   link: 'mailto:info@dasnashwerk.de'
    // },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Sat: 9AM-7PM\nSunday: 9AM-6PM'
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-20" style={{ background: 'var(--matcha-green)' }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
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
            className="text-xl max-w-2xl mx-auto"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
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
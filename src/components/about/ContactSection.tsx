import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('about.location'),
      content: t('about.locationText'),
    },
    {
      icon: Mail,
      title: t('about.email'),
      content: 'info@navjyotivikas.org',
      link: 'mailto:info@navjyotivikas.org',
    },
    {
      icon: Phone,
      title: t('about.phone'),
      content: '+91-1234567890',
      link: 'tel:+911234567890',
    },
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            {t('about.contact')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-custom overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <div className="lg:w-1/3 bg-primary-900 text-white p-8">
              <h3 className="text-2xl font-semibold mb-8">
                {t('footer.contact')}
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary-800 w-12 h-12 rounded-full flex items-center justify-center">
                        <item.icon size={20} className="text-secondary-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-primary-200 hover:text-white transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-primary-200">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 p-8">
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                {t('about.contact')}
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-green-800">{t('about.formSuccess')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                        {t('about.formName')} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        {...register('name', { required: true })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">This field is required</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                        {t('about.formEmail')} *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        {...register('email', { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                        })}
                      />
                      {errors.email?.type === 'required' && (
                        <p className="mt-1 text-sm text-red-500">This field is required</p>
                      )}
                      {errors.email?.type === 'pattern' && (
                        <p className="mt-1 text-sm text-red-500">Please enter a valid email</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">
                      {t('about.formSubject')} *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register('subject', { required: true })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">This field is required</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                      {t('about.formMessage')} *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register('message', { required: true })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">This field is required</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-lg flex items-center transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        <span>{t('about.formSubmit')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
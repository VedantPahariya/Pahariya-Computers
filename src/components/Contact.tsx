import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">Get in touch with our expert team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 h-6 w-6" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 9425141067</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 h-6 w-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@techfixpro.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 h-6 w-6" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">Sora Road, Mahoba Tiraha, Chhatarpur 471001</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
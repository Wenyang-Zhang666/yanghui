import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">上海阳惠洋科技有限公司</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {dict.home.slogan}
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{dict.navigation.services}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{dict.navigation.shipServices}</li>
              <li>{dict.navigation.portTech}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{dict.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{dict.footer.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{dict.footer.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{dict.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

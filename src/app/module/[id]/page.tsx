'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.id as string;
  
  const getModulePath = (id: string) => {
    const moduleMap: { [key: string]: string } = {
      '1': 'introduction',
      '2': 'leadership',
      '3': 'communication',
      '4': 'module-4',
      '5': 'module-5',
      '6': 'module-6',
      '7': 'module-7',
      '8': 'module-8'
    };
    return moduleMap[id] || `module-${id}`;
  };

  const handleLaunchModule = () => {
    const modulePath = getModulePath(moduleId);
    window.open(`/modules/${modulePath}/index.html`, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 text-white bg-royal-blue hover:bg-blue-600 rounded-lg transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-royal-blue mb-6">
            eLearning Module {moduleId}
          </h1>
          
          <div className="bg-lavender-blue/20 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-royal-blue mb-3">
              Module Content Area
            </h2>
            <p className="text-gray-700 mb-4">
              This is where your eLearning content will be embedded. You can:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Embed HTML-based learning modules</li>
              <li>Load SCORM packages</li>
              <li>Display interactive content</li>
              <li>Include videos, quizzes, and other learning materials</li>
            </ul>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleLaunchModule}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-beige to-royal-blue text-white font-semibold text-lg rounded-lg hover:from-royal-blue hover:to-lavender-blue transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Launch Module {moduleId} in New Window
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Opens the interactive learning content in a new browser window for the best experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
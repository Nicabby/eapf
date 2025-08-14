'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.id as string;

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
          
          <div className="border-2 border-dashed border-gold-beige rounded-lg p-12 text-center">
            <div className="text-gold-beige text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Ready for Your Content
            </h3>
            <p className="text-gray-600">
              Replace this placeholder with your eLearning module content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
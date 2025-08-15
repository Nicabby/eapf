import Link from 'next/link';

export default function Home() {
  const modules = [
    { id: 1, title: 'Introduction' },
    { id: 2, title: 'Leadership' },
    { id: 3, title: 'Communication' },
    { id: 4, title: 'Module 4' },
    { id: 5, title: 'Module 5' },
    { id: 6, title: 'Module 6' },
    { id: 7, title: 'Module 7' },
    { id: 8, title: 'Module 8' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            eLearning Preview Site
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Select any module below to explore interactive learning content
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={`/module/${module.id}`}
              className="group relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-beige to-royal-blue rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:from-royal-blue group-hover:to-lavender-blue transition-all duration-300">
                  {module.id}
                </div>
                <h3 className="text-xl font-semibold text-royal-blue mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Interactive Learning Experience
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-beige rounded-lg transition-colors duration-300"></div>
            </Link>
          ))}
        </div>

        <footer className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-royal-blue mb-3">
              Ready to Learn?
            </h2>
            <p className="text-gray-700 mb-4">
              Each module contains engaging content designed to enhance your learning experience.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center text-gold-beige">
                <span className="text-2xl mr-2">🎯</span>
                <span className="text-sm font-medium">Interactive</span>
              </div>
              <div className="flex items-center text-royal-blue">
                <span className="text-2xl mr-2">📱</span>
                <span className="text-sm font-medium">Responsive</span>
              </div>
              <div className="flex items-center text-lavender-blue">
                <span className="text-2xl mr-2">🚀</span>
                <span className="text-sm font-medium">Modern</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

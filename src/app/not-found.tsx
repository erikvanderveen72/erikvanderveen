import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-orange-50 px-4">
      <div className="max-w-md w-full">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="w-20 h-20 text-purple-600" strokeWidth={1.5} />
          </div>

          <h1 className="text-5xl font-bold text-purple-900 mb-2">404</h1>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Pagina niet gevonden
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            De pagina die je zoekt bestaat niet of is verplaatst. Geen zorgen, we helpen je graag verder.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}

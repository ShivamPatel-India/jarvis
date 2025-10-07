import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="h-svh">
            <Twin />
          </div>

          <footer className="mt-4 text-center text-sm text-gray-500">
            <p>&copy; 2025 · All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
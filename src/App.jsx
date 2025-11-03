import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import TechSection from './components/TechSection'
import PricingSection from './components/PricingSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-lg font-semibold">ShowUp</a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a href="#features" className="hover:text-gray-900">Producto</a>
            <a href="#pricing" className="hover:text-gray-900">Precios</a>
            <a href="#cta" className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-800">Contactar</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ProblemSolution />
        <TechSection />
        <PricingSection />
        <section id="cta" className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-8">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">¿Listo para reducir no-shows y llenar huecos?</h3>
                <p className="mt-2 text-gray-600">Integramos en días, sin cambiar tu operación. Preséntanos tu clínica y agenda una demo.</p>
              </div>
              <form className="grid gap-3">
                <input type="text" name="name" placeholder="Nombre" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 focus:ring" />
                <input type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 focus:ring" />
                <input type="tel" name="phone" placeholder="WhatsApp" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 focus:ring" />
                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">Quiero una demo</button>
                <p className="text-xs text-gray-500">Usamos tus datos solo para contactarte sobre ShowUp.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-gray-600 lg:px-8">
          <p>© {new Date().getFullYear()} ShowUp. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Términos</a>
            <a href="#" className="hover:text-gray-900">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

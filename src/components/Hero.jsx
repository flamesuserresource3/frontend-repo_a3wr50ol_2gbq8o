import { Rocket, Shield, CreditCard } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 text-sm font-medium">
              <Shield className="h-4 w-4" />
              Sin prepago. Garantía anti no-show.
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              ShowUp — agenda con garantía, sin prepago
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-700">
              Tomamos COF/hold al agendar por WhatsApp, liberamos al asistir y capturamos solo si no-show. Rellenamos huecos en minutos y conciliamos automático. No cambias tu EMR/POS ni el cobro presencial. Fees vía Stripe con Connect directo a tu clínica.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
              >
                <Rocket className="h-5 w-5" />
                Empezar ahora
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-indigo-700 ring-1 ring-inset ring-indigo-200 transition hover:ring-indigo-300"
              >
                <CreditCard className="h-5 w-5" />
                Cómo funciona
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" />Stripe Connect</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" />WhatsApp Cloud API</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" />NFC check-in</div>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-xl backdrop-blur">
              <div className="grid gap-4 text-sm">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">WA-native</p>
                  <p className="mt-1 text-gray-600">Agenda, recordatorios y backfill 1-a-1 por WhatsApp. Sin apps.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">COF/Hold seguro</p>
                  <p className="mt-1 text-gray-600">COF ≥ 7 días · Hold < 7 días. Void al asistir, capture solo si no-show.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Conciliación automática</p>
                  <p className="mt-1 text-gray-600">Match de monto/ref/fecha y dashboard de extremo a extremo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

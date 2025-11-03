import { Check, BarChart3, Wallet } from 'lucide-react'

export default function PricingSection() {
  const kpis = [
    'Show-rate / no-show',
    'Fees cobrados vs. holds liberados',
    'Backfill rate y tiempo de llenado',
    'Ingreso asegurado (Stripe Connect)',
    'CTR/Reply en WhatsApp y calidad de canal'
  ]

  const includes = [
    'WhatsApp incluido: 1,000 mensajes/mes (extra $0.30 MXN c/u)',
    'Incluye 2 tags NFC y 1 payout/semana',
    'Conciliación automática y dashboard',
    'Soporte por chat/email',
    'Garantía de ROI en el Mes 1'
  ]

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Plan único (público)</h2>
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-end gap-3">
              <p className="text-4xl font-extrabold text-gray-900">$1,990 MXN</p>
              <span className="text-gray-500">/ mes</span>
            </div>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• No-show cobrado: $5 MXN + 10% del fee (tope $149 MXN/transacción)</li>
              <li>• Backfill exitoso: $15 MXN por hueco asistido</li>
              <li>• Stripe referencial MX: 3.6% + $3 por transacción</li>
              <li>• Holds que vencen: &lt; 7d ⇒ hold; ≥ 7d ⇒ COF + re-auth previo</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
              <Wallet className="h-5 w-5" />
              Quiero implementar
            </a>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includes.map((i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-indigo-50 p-3 text-indigo-900">
                  <Check className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-indigo-600">
            <BarChart3 className="h-5 w-5" />
            <h3 className="text-xl font-semibold">KPIs que movemos</h3>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {kpis.map((k) => (
              <li key={k} className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                {k}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 p-6 text-indigo-50">
            <p className="text-sm uppercase tracking-wider opacity-90">¿Por qué ShowUp es distinto?</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Sin prepago: garantía al agendar; sigues cobrando presencial.</li>
              <li>Backfill 1-a-1 con TTL: llenamos huecos en minutos.</li>
              <li>Evidencia completa: WA → hold/COF → check-in → capture/void → conciliación.</li>
              <li>Cero trabajo manual del front desk.</li>
              <li>Políticas por servicio/sucursal/VIP y reporting accionable.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Smartphone, CreditCard, RefreshCcw, Cpu, Database, ShieldCheck } from 'lucide-react'

export default function TechSection() {
  const items = [
    {
      icon: Smartphone,
      title: 'Canales',
      text: 'WhatsApp Cloud API (email fallback). Recordatorios y backfill nativos en WA.'
    },
    {
      icon: CreditCard,
      title: 'Pagos',
      text: 'Stripe + Stripe Connect: COF (SetupIntent) y hold (PaymentIntent). Capture/void condicionado.'
    },
    {
      icon: RefreshCcw,
      title: 'Orquestación',
      text: 'Temporal / n8n para holds, expiraciones, backfill secuencial y re-auth.'
    },
    {
      icon: Database,
      title: 'Datos & Auditoría',
      text: 'Citas, políticas, holds, check-ins y conciliación; audit trail completo.'
    },
    {
      icon: Cpu,
      title: 'Compatibilidad',
      text: 'Overlay sobre tu EMR/POS. No migras agenda ni cambias tu caja.'
    },
    {
      icon: ShieldCheck,
      title: 'Riesgo & Cumplimiento',
      text: 'Plantillas aprobadas, KYC/AML con Stripe, Radar/3DS, límites y re-auth.'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Producto / Tech</h2>
        <p className="mt-2 max-w-3xl text-gray-600">Todo lo crítico para operar sin fricción y con evidencia de punta a punta.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

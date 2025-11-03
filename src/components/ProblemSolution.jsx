import { AlertTriangle, CheckCircle2, Zap } from 'lucide-react'

export default function ProblemSolution() {
  const problems = [
    'No-shows y cancelaciones tardías ⇒ horas ociosas, ingreso perdido.',
    'Huecos liberados no se rellenan a tiempo.',
    'Anticipos/confirmaciones manuales ⇒ trabajo y conciliación engorrosa.',
    'Cero visibilidad real: show-rate, fees cobrados, backfill, ingreso asegurado.'
  ]

  const solutions = [
    'Gate al agendar: link de COF/hold + política clara en WhatsApp.',
    'Recordatorios T-48 / T-24 / T-2h con Confirmar / Reagendar (1-tap).',
    'Auto-Backfill 1-a-1 (TTL 5–10 min): ofertas secuenciales por WhatsApp hasta llenar.',
    'Check-in NFC (NTAG424): tap + 4 últimos dígitos ⇒ asistencia validada → void del hold.',
    'Conciliación automática: match de monto/ref/fecha y dashboard end-to-end.'
  ]

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-rose-600">
            <AlertTriangle className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Problema (hoy)</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-lg bg-rose-50 p-3 text-rose-800">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-emerald-600">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Solución (WA-native)</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-lg bg-emerald-50 p-3 text-emerald-900">
                <Zap className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-emerald-200 bg-white p-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-900">Política anti no-show (A/B)</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>B (todos): recordatorios + confirmación.</li>
              <li>A (según servicio/primera cita): <span className="font-medium">&lt; 7 días</span>: hold (se libera al asistir). <span className="font-medium">≥ 7 días</span>: COF (se cobra solo si no asiste).</li>
              <li>Sugerido: 1ª cita A+B, recurrentes B (si falla, A).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Contact.tsx
 * Página de contato com formulário (nome, e-mail, mensagem),
 * informações de contato e validação básica.
 */

import { useState, type FormEvent } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '../../components/Button/Button'

interface FormData {
  nome:     string
  email:    string
  assunto:  string
  mensagem: string
}

const initialForm: FormData = { nome: '', email: '', assunto: '', mensagem: '' }

const contactInfo = [
  {
    Icon: FiMail,
    label: 'E-mail',
    value: 'contato@exoticpetsstore.com.br',
    href: 'mailto:contato@exoticpetsstore.com.br',
  },
  {
    Icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '(34) 99999-0001',
    href: 'https://wa.me/5534999990001',
  },
  {
    Icon: FiPhone,
    label: 'Telefone',
    value: '(34) 3333-0001',
    href: 'tel:+553433330001',
  },
  {
    Icon: FiMapPin,
    label: 'Endereço',
    value: 'Rua das Bromélias, 247 — Uberaba, MG',
    href: '#',
  },
]

export default function Contact() {
  const [form,        setForm]        = useState<FormData>(initialForm)
  const [errors,      setErrors]      = useState<Partial<FormData>>({})
  const [submitted,   setSubmitted]   = useState(false)
  const [isLoading,   setIsLoading]   = useState(false)

  // ── Validação ───────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!form.nome.trim())
      newErrors.nome = 'Nome é obrigatório.'
    if (!form.email.trim())
      newErrors.email = 'E-mail é obrigatório.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Informe um e-mail válido.'
    if (!form.mensagem.trim())
      newErrors.mensagem = 'Mensagem é obrigatória.'
    else if (form.mensagem.trim().length < 20)
      newErrors.mensagem = 'Mensagem deve ter ao menos 20 caracteres.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    // Simula envio (sem backend real neste projeto)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 1200)
  }

  // ── Helper para atualizar campo e limpar erro ───────────────────────────────
  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  return (
    <div className="min-h-screen bg-forest-950 font-body pt-20">

      {/* ── Hero ── */}
      <div
        className="relative py-24 text-center"
        style={{
          backgroundImage: 'url(/images/page-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-forest-950/88" />
        <div className="relative z-10 px-4">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Fale Conosco</p>
          <h1 className="font-display text-4xl lg:text-5xl text-white mb-4">Contato</h1>
          <p className="text-forest-300 text-base max-w-lg mx-auto">
            Tire dúvidas, solicite informações sobre animais ou fale com nossa equipe
            de suporte especializado.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* ── Formulário ── */}
          <div className="lg:col-span-2">
            {submitted ? (
              /* Sucesso */
              <div className="bg-forest-900/50 border border-green-700/40 rounded-2xl p-10 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="text-green-400 text-3xl" />
                </div>
                <h2 className="text-white font-display text-2xl mb-2">Mensagem enviada!</h2>
                <p className="text-forest-300 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                  Obrigado pelo contato! Nossa equipe retornará em até 24 horas úteis.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              /* Formulário */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-forest-900/40 border border-forest-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
                aria-label="Formulário de contato"
              >
                <h2 className="text-white font-semibold text-lg">Envie sua mensagem</h2>

                {/* Nome */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nome" className="text-forest-200 text-sm font-medium">
                    Nome <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={form.nome}
                    onChange={e => handleChange('nome', e.target.value)}
                    placeholder="Seu nome completo"
                    autoComplete="name"
                    className={`bg-forest-950/60 border rounded-xl px-4 py-3 text-white placeholder:text-forest-600 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.nome ? 'border-red-500 focus:ring-red-500' : 'border-forest-700 focus:border-gold focus:ring-gold'
                    }`}
                  />
                  {errors.nome && <p className="text-red-400 text-xs">{errors.nome}</p>}
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-forest-200 text-sm font-medium">
                    E-mail <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    autoComplete="email"
                    className={`bg-forest-950/60 border rounded-xl px-4 py-3 text-white placeholder:text-forest-600 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-forest-700 focus:border-gold focus:ring-gold'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                </div>

                {/* Assunto */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="assunto" className="text-forest-200 text-sm font-medium">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    value={form.assunto}
                    onChange={e => handleChange('assunto', e.target.value)}
                    className="bg-forest-950/60 border border-forest-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all cursor-pointer"
                  >
                    <option value="">Selecione um assunto...</option>
                    <option>Informações sobre um animal</option>
                    <option>Documentação IBAMA</option>
                    <option>Cuidados e alimentação</option>
                    <option>Envio e logística</option>
                    <option>Suporte pós-venda</option>
                    <option>Outro assunto</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensagem" className="text-forest-200 text-sm font-medium">
                    Mensagem <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    value={form.mensagem}
                    onChange={e => handleChange('mensagem', e.target.value)}
                    placeholder="Escreva sua mensagem aqui..."
                    className={`bg-forest-950/60 border rounded-xl px-4 py-3 text-white placeholder:text-forest-600 text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.mensagem ? 'border-red-500 focus:ring-red-500' : 'border-forest-700 focus:border-gold focus:ring-gold'
                    }`}
                  />
                  <div className="flex justify-between items-center">
                    {errors.mensagem
                      ? <p className="text-red-400 text-xs">{errors.mensagem}</p>
                      : <span />
                    }
                    <span className="text-forest-600 text-xs">{form.mensagem.length} caracteres</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isLoading}
                >
                  {isLoading ? (
                    'Enviando...'
                  ) : (
                    <><FiSend /> Enviar Mensagem</>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* ── Informações de contato ── */}
          <aside className="flex flex-col gap-4">
            <h2 className="text-white font-semibold text-lg">Outras formas de contato</h2>
            {contactInfo.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-3 p-4 bg-forest-900/40 border border-forest-800 rounded-xl hover:border-gold/40 transition-all group"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon className="text-gold text-base" />
                </div>
                <div>
                  <p className="text-forest-300 text-xs">{label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-gold-light transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Horário de atendimento */}
            <div className="p-4 bg-gold/5 border border-gold/20 rounded-xl mt-2">
              <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-2">Horário de Atendimento</p>
              <p className="text-forest-200 text-sm">Segunda a Sexta: 9h – 18h</p>
              <p className="text-forest-200 text-sm">Sábado: 9h – 13h</p>
              <p className="text-forest-600 text-xs mt-1">Domingos e feriados: fechado</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

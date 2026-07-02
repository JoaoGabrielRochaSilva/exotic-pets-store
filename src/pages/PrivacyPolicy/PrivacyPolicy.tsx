/**
 * PrivacyPolicy.tsx
 * Página estática de Política de Privacidade (texto fictício completo).
 */

export default function PrivacyPolicy() {
  const lastUpdated = '01 de março de 2026'

  const sections = [
    {
      title: '1. Quem Somos',
      content: `A Exotic Pets Store é uma empresa especializada na comercialização de animais exóticos legalizados, terrários e acessórios, registrada sob o CNPJ 00.000.000/0001-00, com sede na Rua das Bromélias, 247, Uberaba – MG, CEP 38000-000. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.`,
    },
    {
      title: '2. Informações que Coletamos',
      content: `Podemos coletar as seguintes informações pessoais quando você utiliza nosso site:\n\n• Dados de identificação: nome completo, CPF e data de nascimento.\n• Dados de contato: endereço de e-mail, número de telefone e endereço postal.\n• Dados de navegação: endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.\n• Dados de compra: histórico de pedidos, produtos adquiridos e informações de pagamento (não armazenamos dados de cartão de crédito integralmente).\n• Dados fornecidos voluntariamente: mensagens enviadas pelo formulário de contato e avaliações de produtos.`,
    },
    {
      title: '3. Como Usamos suas Informações',
      content: `Utilizamos suas informações para as seguintes finalidades:\n\n• Processar e entregar pedidos de compra de animais e produtos;\n• Emitir documentação legal (notas fiscais, certificados IBAMA/CITES);\n• Enviar confirmações de pedido, atualizações de rastreamento e suporte pós-venda;\n• Responder a dúvidas e solicitações enviadas pelo formulário de contato;\n• Melhorar a experiência do usuário em nosso site;\n• Cumprir obrigações legais e regulatórias, incluindo as exigências do IBAMA;\n• Enviar comunicações de marketing, caso você tenha dado consentimento expresso.`,
    },
    {
      title: '4. Base Legal para o Tratamento',
      content: `O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses previstas na Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018):\n\n• Execução de contrato: para processar e entregar seus pedidos;\n• Cumprimento de obrigação legal: para emissão de documentação exigida pelo IBAMA e pelos órgãos fiscalizadores;\n• Consentimento: para o envio de comunicações de marketing, quando aplicável;\n• Interesse legítimo: para melhorar nossos serviços e garantir a segurança de nossas operações.`,
    },
    {
      title: '5. Compartilhamento de Informações',
      content: `Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais próprios desses terceiros. Podemos compartilhar dados nas seguintes situações:\n\n• Com parceiros logísticos e transportadoras especializadas, exclusivamente para fins de entrega dos animais;\n• Com o IBAMA, SISPASS e outros órgãos regulatórios, conforme exigido pela legislação;\n• Com processadores de pagamento, para fins de cobrança segura;\n• Com prestadores de serviços de TI (hospedagem, e-mail), vinculados por obrigações de confidencialidade;\n• Em caso de determinação judicial ou solicitação de autoridade competente.`,
    },
    {
      title: '6. Armazenamento e Segurança',
      content: `Seus dados são armazenados em servidores seguros localizados no Brasil, protegidos por criptografia SSL/TLS em trânsito e controles de acesso rígidos em repouso. Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda, alteração ou divulgação indevida.\n\nInformações de cartão de crédito são processadas diretamente pelos gateways de pagamento (Stripe, PagSeguro), sem armazenamento em nossos servidores.`,
    },
    {
      title: '7. Retenção de Dados',
      content: `Mantemos seus dados pessoais pelo tempo necessário para as finalidades descritas nesta Política, ou conforme exigido por lei:\n\n• Dados de compra: 5 anos (obrigação fiscal);\n• Dados de cadastro: enquanto sua conta estiver ativa;\n• Comunicações de marketing: até a revogação do consentimento;\n• Logs de acesso: 6 meses (Marco Civil da Internet).`,
    },
    {
      title: '8. Seus Direitos',
      content: `Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:\n\n• Confirmação da existência de tratamento;\n• Acesso aos dados;\n• Correção de dados incompletos, inexatos ou desatualizados;\n• Anonimização, bloqueio ou eliminação de dados desnecessários;\n• Portabilidade dos dados;\n• Eliminação dos dados tratados com base no consentimento;\n• Informação sobre compartilhamento com terceiros;\n• Revogação do consentimento;\n• Oposição ao tratamento.\n\nPara exercer seus direitos, entre em contato pelo e-mail privacidade@exoticpetsstore.com.br.`,
    },
    {
      title: '9. Cookies',
      content: `Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação, analisar o tráfego do site e personalizar conteúdos. Você pode gerenciar as preferências de cookies nas configurações do seu navegador. A desativação de alguns cookies pode afetar a funcionalidade do site.`,
    },
    {
      title: '10. Menores de Idade',
      content: `Nosso site não é destinado a menores de 18 anos. Não coletamos intencionalmente dados pessoais de crianças ou adolescentes. Se você acredita que coletamos dados de um menor, entre em contato imediatamente para que possamos excluí-los.`,
    },
    {
      title: '11. Alterações nesta Política',
      content: `Podemos atualizar esta Política periodicamente. Sempre que houver alterações relevantes, notificaremos você por e-mail ou por aviso destacado em nosso site. A data de última atualização é exibida no topo desta página. Recomendamos que você revise esta Política regularmente.`,
    },
    {
      title: '12. Contato e DPO',
      content: `Em caso de dúvidas sobre esta Política ou sobre o tratamento de seus dados pessoais, entre em contato:\n\nE-mail: privacidade@exoticpetsstore.com.br\nEncarregado de Dados (DPO): Dr. Felipe Andrade\nTelefone: (34) 3333-0001\nEndereço: Rua das Bromélias, 247 — Uberaba, MG — CEP 38000-000`,
    },
  ]

  return (
    <div className="min-h-screen bg-forest-950 font-body pt-20">

      {/* ── Header da página ── */}
      <div className="bg-forest-900/50 border-b border-forest-800 py-16 text-center">
        <h1 className="font-display text-3xl lg:text-4xl text-white mb-3">
          Política de Privacidade
        </h1>
        <p className="text-forest-300 text-sm">
          Última atualização: {lastUpdated}
        </p>
      </div>

      {/* ── Conteúdo ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Resumo */}
        <div className="bg-gold/5 border border-gold/20 rounded-2xl p-6 mb-10">
          <p className="text-forest-200 text-sm leading-relaxed">
            <strong className="text-gold">Resumo:</strong> Respeitamos sua privacidade e tratamos seus dados
            pessoais de forma transparente, nos termos da Lei Geral de Proteção de Dados
            (LGPD – Lei nº 13.709/2018). Esta política descreve quais dados coletamos, como
            os utilizamos e quais são os seus direitos como titular.
          </p>
        </div>

        {/* Seções */}
        <div className="flex flex-col gap-10">
          {sections.map(({ title, content }) => (
            <section key={title} aria-labelledby={title}>
              <h2
                id={title}
                className="text-white font-semibold text-base mb-3 pb-2 border-b border-forest-800"
              >
                {title}
              </h2>
              <div className="text-forest-200 text-sm leading-relaxed whitespace-pre-line">
                {content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

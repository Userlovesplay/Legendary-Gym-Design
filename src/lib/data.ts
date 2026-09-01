import {
  Dumbbell, Flame, Zap, Trophy, Users, Clock,
  Bike, Swords, Weight, Waves, Target, Activity, HeartPulse,
} from "lucide-react";

export const stats = [
  { value: "12K+", label: "Membros Ativos" },
  { value: "15+", label: "Anos no Mercado" },
  { value: "50+", label: "Professores" },
  { value: "98%", label: "Satisfação" },
];

export const features = [
  { icon: Dumbbell, title: "Equipamentos Premium", desc: "Mais de 300 equipamentos de última geração para treinos de alto desempenho." },
  { icon: Flame, title: "Treinos Intensivos", desc: "Programas personalizados criados por especialistas para máximos resultados." },
  { icon: Trophy, title: "Campeões Formados", desc: "Metodologia vencedora que já formou dezenas de campeões e atletas profissionais." },
  { icon: Zap, title: "Resultados Rápidos", desc: "Protocolos comprovados que entregam transformações visíveis em semanas." },
  { icon: Users, title: "Comunidade Forte", desc: "Uma família que se apoia, motiva e cresce junta todos os dias." },
  { icon: Clock, title: "Aberto 24h", desc: "Treino no seu horário. Abertos 24 horas, 7 dias por semana, sem exceção." },
];

export const modalities = [
  { icon: Weight, name: "Musculação", desc: "Sala completa com mais de 300 equipamentos premium.", sessions: "340/mês" },
  { icon: Flame, name: "HIIT & Cardio", desc: "Alta intensidade para queimar gordura e aumentar resistência.", sessions: "180/mês" },
  { icon: Bike, name: "Spinning", desc: "Aulas em grupo com música, energia e muito suor.", sessions: "120/mês" },
  { icon: Activity, name: "Funcional", desc: "Movimentos funcionais para performance total do corpo.", sessions: "96/mês" },
  { icon: Swords, name: "Muay Thai", desc: "Luta e condicionamento com instrutores faixa preta.", sessions: "80/mês" },
  { icon: Waves, name: "Mobilidade", desc: "Flexibilidade, postura e recuperação ativa.", sessions: "64/mês" },
  { icon: Target, name: "CrossFit", desc: "Força, velocidade e condicionamento em circuitos variados.", sessions: "96/mês" },
  { icon: HeartPulse, name: "Pilates", desc: "Equilíbrio, core e controle muscular profundo.", sessions: "72/mês" },
];

export const coaches = [
  {
    name: "Ana Ferreira", role: "Head de HIIT & Cardio", exp: "12 anos", abbr: "AF",
    photo: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=700&q=85&auto=format&fit=crop&crop=faces",
    bio: "Campeã estadual de CrossFit, Ana transforma corpos com protocolos de alta intensidade que provaram resultados em mais de 800 alunas. Especializada em periodização feminina e emagrecimento funcional.",
    stats: [{ label: "Alunos formados", val: "800+" }, { label: "Anos de atuação", val: "12" }, { label: "Certificações", val: "6" }],
    tags: ["HIIT", "CrossFit", "Emagrecimento", "Periodização"],
    cert: "CREF 012345-G/BA",
  },
  {
    name: "Bruno Titan", role: "Especialista em Força & Hipertrofia", exp: "9 anos", abbr: "BT",
    photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=85&auto=format&fit=crop&crop=faces",
    bio: "Multicampeão regional de levantamento de peso, Bruno domina cada detalhe da hipertrofia muscular. Sua metodologia progressiva já transformou centenas de atletas amadores em corpos de elite.",
    stats: [{ label: "Alunos formados", val: "600+" }, { label: "Anos de atuação", val: "9" }, { label: "Certificações", val: "4" }],
    tags: ["Força", "Hipertrofia", "Powerlifting", "Biomecânica"],
    cert: "CREF 023456-G/BA",
  },
  {
    name: "Rafa Iron", role: "Coach de Performance & Resistência", exp: "14 anos", abbr: "RI",
    photo: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=85&auto=format&fit=crop&crop=faces",
    bio: "Atleta profissional aposentado com passagens por seleções nacionais. Rafa é referência em preparação física de elite, formando atletas que competem em nível nacional com consistência.",
    stats: [{ label: "Alunos formados", val: "1.200+" }, { label: "Anos de atuação", val: "14" }, { label: "Certificações", val: "8" }],
    tags: ["Performance", "Resistência", "Atletismo", "Funcional"],
    cert: "CREF 034567-G/BA",
  },
  {
    name: "Lia Storm", role: "Mestre de Spinning & Ciclismo Indoor", exp: "7 anos", abbr: "LS",
    photo: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=700&q=85&auto=format&fit=crop&crop=faces",
    bio: "Lia transforma cada aula de spinning em uma experiência imersiva de performance. Com técnica apurada e música no sangue, suas turmas são as mais disputadas da IRONFORCE.",
    stats: [{ label: "Aulas por mês", val: "80+" }, { label: "Anos de atuação", val: "7" }, { label: "Certificações", val: "3" }],
    tags: ["Spinning", "Cardio", "Ritmo", "Indoor Cycling"],
    cert: "CREF 045678-G/BA",
  },
  {
    name: "Nina Strike", role: "Muay Thai, Luta & Defesa Pessoal", exp: "11 anos", abbr: "NS",
    photo: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=700&q=85&auto=format&fit=crop&crop=faces",
    bio: "Faixa preta em Muay Thai com representações internacionais, Nina une técnica marcial e condicionamento físico para criar um treinamento único que desafia limites físicos e mentais.",
    stats: [{ label: "Alunos formados", val: "450+" }, { label: "Anos de atuação", val: "11" }, { label: "Títulos", val: "7" }],
    tags: ["Muay Thai", "Kickboxing", "Defesa Pessoal", "Condicionamento"],
    cert: "CREF 056789-G/BA",
  },
  {
    name: "Carlos Vaz", role: "Nutrição Esportiva & Performance", exp: "8 anos", abbr: "CV",
    photo: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&q=85&auto=format&fit=crop&crop=faces",
    bio: "Nutricionista esportivo com MBA em Fisiologia do Exercício, Carlos é o elo entre o treino e a mesa. Seus planos alimentares personalizados são o segredo por trás dos resultados mais impressionantes da IRONFORCE.",
    stats: [{ label: "Planos criados", val: "900+" }, { label: "Anos de atuação", val: "8" }, { label: "Certificações", val: "5" }],
    tags: ["Nutrição", "Suplementação", "Emagrecimento", "Ganho de Massa"],
    cert: "CRN 078901-BA",
  },
];

export const plans = [
  {
    name: "Starter", price: "89", highlight: false, badge: null,
    description: "Perfeito para quem está começando a jornada.",
    features: ["Área de musculação", "Avaliação física inicial", "App de treinos", "Vestiários premium", "Suporte por chat"],
    cta: "Começar Agora",
  },
  {
    name: "Elite", price: "149", highlight: true, badge: "Mais Popular",
    description: "Para quem quer resultados sérios e rápidos.",
    features: ["Tudo do Starter", "Aulas coletivas ilimitadas", "Personal trainer 2x/semana", "Plano nutricional", "Acesso 24h", "Prioridade em agendamentos"],
    cta: "Quero ser Elite",
  },
  {
    name: "Black", price: "249", highlight: false, badge: null,
    description: "O mais completo para atletas de alta performance.",
    features: ["Tudo do Elite", "Personal trainer ilimitado", "Suplementos mensais", "Aulas VIP exclusivas", "Composição corporal", "Coach de performance"],
    cta: "Seja Black",
  },
];

export const testimonials = [
  { name: "Rafael Mendes", role: "Atleta Amador", avatar: "RM", stars: 5, months: "6 meses", result: "−18kg", text: "Em 6 meses perdi 18kg e ganhei uma definição que nunca imaginei ter. A metodologia da academia é diferente de tudo que já vi." },
  { name: "Juliana Costa", role: "Profissional de TI", avatar: "JC", stars: 5, months: "4 meses", result: "−12kg", text: "Depois de 3 academias diferentes, finalmente encontrei um lugar que entrega resultado de verdade. A comunidade te motiva todo dia." },
  { name: "Diego Alves", role: "Empresário", avatar: "DA", stars: 5, months: "2 anos", result: "Campeão Regional", text: "Sou membro Black há 2 anos. O nível de atenção personalizada é absurdo. Hoje compito em campeonatos regionais. Minha vida mudou." },
  { name: "Camila Rocha", role: "Nutricionista", avatar: "CR", stars: 5, months: "8 meses", result: "+8kg músculo", text: "Como profissional da saúde, vejo a qualidade técnica dos treinadores aqui. Resultados mensuráveis desde a primeira semana." },
  { name: "Lucas Torres", role: "Estudante de Ed. Física", avatar: "LT", stars: 5, months: "1 ano", result: "Aprovado no CREF", text: "A experiência prática aqui dentro foi decisiva para minha aprovação. Ambiente técnico e humano de primeiro nível." },
  { name: "Fernanda Lima", role: "Médica", avatar: "FL", stars: 5, months: "3 meses", result: "−8% gordura", text: "Com minha agenda corrida, a flexibilidade 24h foi essencial. Os resultados em apenas 3 meses superaram tudo que esperei." },
];

export const schedule = [
  { time: "06:00", name: "HIIT Burn", coach: "Ana Ferreira", duration: "45min", color: "#e02020" },
  { time: "07:30", name: "Funcional Extreme", coach: "Bruno Titan", duration: "60min", color: "#b01818" },
  { time: "10:00", name: "Spinning Power", coach: "Lia Storm", duration: "50min", color: "#e02020" },
  { time: "12:15", name: "Strength Lab", coach: "Rafa Iron", duration: "60min", color: "#b01818" },
  { time: "17:00", name: "Mobilidade & Core", coach: "Nina Strike", duration: "45min", color: "#e02020" },
  { time: "18:30", name: "Power Cycling", coach: "Lia Storm", duration: "50min", color: "#b01818" },
  { time: "20:00", name: "Fight Cardio", coach: "Nina Strike", duration: "55min", color: "#e02020" },
];

export const faqs = [
  { q: "Como funciona a primeira semana gratuita?", a: "Você acessa a academia por 7 dias completos sem pagar nada. Sem cartão de crédito, sem compromisso de adesão." },
  { q: "Tem personal trainer incluso nos planos?", a: "Os planos Elite e Black incluem sessões com personal. No Elite são 2x/semana e no Black o acompanhamento é ilimitado." },
  { q: "Posso cancelar a qualquer momento?", a: "Sim. Sem multa, sem burocracia. Cancele quando quiser diretamente pelo nosso aplicativo em menos de 2 minutos." },
  { q: "Como funciona o acesso 24 horas?", a: "Com o plano Elite ou Black você recebe um cartão magnético que libera o acesso em qualquer horário, mesmo sem funcionários presentes." },
  { q: "Vocês oferecem plano corporativo?", a: "Sim. Para empresas com 5 ou mais colaboradores, temos condições especiais. Entre em contato pelo formulário abaixo." },
];

export const tickerItems = [
  "12.000+ MEMBROS", "15 ANOS DE EXPERIÊNCIA", "98% DE SATISFAÇÃO", "50+ PROFESSORES CERTIFICADOS",
  "ABERTO 24 HORAS", "SEM TAXA DE MATRÍCULA", "PRIMEIRA SEMANA GRÁTIS", "CANCELE QUANDO QUISER",
];

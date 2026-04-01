'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle, BarChart3, Loader2, Send, Sparkles, Target, TrendingUp, Award } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'Hoe gebruikt jullie team momenteel AI-tools?',
    options: [
      { label: 'We gebruiken geen AI-tools', score: 1 },
      { label: 'Enkele medewerkers experimenteren zelfstandig', score: 2 },
      { label: 'Meerdere teamleden gebruiken AI regelmatig', score: 3 },
      { label: 'AI is geïntegreerd in onze dagelijkse werkprocessen', score: 4 },
    ],
  },
  {
    id: 2,
    question: 'Welk percentage van jullie team heeft ervaring met AI-tools?',
    options: [
      { label: '0 – 10%', score: 1 },
      { label: '10 – 30%', score: 2 },
      { label: '30 – 60%', score: 3 },
      { label: 'Meer dan 60%', score: 4 },
    ],
  },
  {
    id: 3,
    question: 'Hebben jullie richtlijnen of beleid voor AI-gebruik?',
    options: [
      { label: 'Nee, daar hebben we nog niet over nagedacht', score: 1 },
      { label: 'We zijn het aan het verkennen', score: 2 },
      { label: 'We hebben basisrichtlijnen opgesteld', score: 3 },
      { label: 'We hebben uitgebreid AI-beleid met governance', score: 4 },
    ],
  },
  {
    id: 4,
    question: 'Hoe staat het management tegenover AI-adoptie?',
    options: [
      { label: 'Niet actief mee bezig', score: 1 },
      { label: 'Bewust van AI, maar nog geen actie', score: 2 },
      { label: 'Ondersteunend en stimulerend', score: 3 },
      { label: 'Management is actieve AI-champion', score: 4 },
    ],
  },
  {
    id: 5,
    question: 'Welke AI-tools worden er gebruikt?',
    options: [
      { label: 'Geen', score: 1 },
      { label: 'Gratis versies van ChatGPT, Gemini of Copilot', score: 2 },
      { label: 'Betaalde versies van AI-tools', score: 3 },
      { label: 'Enterprise AI-oplossingen met integraties', score: 4 },
    ],
  },
  {
    id: 6,
    question: 'Hoe pakken jullie AI-training en kennisdeling aan?',
    options: [
      { label: 'We doen niets op dit gebied', score: 1 },
      { label: 'Medewerkers leren zelf bij', score: 2 },
      { label: 'We hebben incidenteel een training gehad', score: 3 },
      { label: 'We hebben een structureel opleidingsprogramma', score: 4 },
    ],
  },
  {
    id: 7,
    question: 'Meten jullie de productiviteitswinst door AI?',
    options: [
      { label: 'Nee, we meten dit niet', score: 1 },
      { label: 'Alleen op basis van gevoel en anekdotes', score: 2 },
      { label: 'We hebben enkele meetpunten', score: 3 },
      { label: 'We hebben KPI\'s en rapportages voor AI-impact', score: 4 },
    ],
  },
  {
    id: 8,
    question: 'Hoe gaan jullie om met dataprivacy en AI?',
    options: [
      { label: 'Hier hebben we niet over nagedacht', score: 1 },
      { label: 'We zijn ons bewust maar hebben geen beleid', score: 2 },
      { label: 'We hebben basisafspraken over data en AI', score: 3 },
      { label: 'We hebben volledige data-governance voor AI', score: 4 },
    ],
  },
];

type ResultLevel = {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Target;
  color: string;
  bgColor: string;
  borderColor: string;
  tips: string[];
  training: string;
  trainingHref: string;
};

const resultLevels: ResultLevel[] = [
  {
    key: 'starter',
    title: 'Starter',
    subtitle: 'Jullie staan aan het begin van de AI-reis',
    description: 'Jullie organisatie heeft nog weinig ervaring met AI. Dat is geen probleem — het betekent dat er enorm veel potentieel is! Met de juiste training kan jullie team snel grote stappen maken.',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    tips: [
      'Start met een brede AI-introductietraining voor het hele team',
      'Laat medewerkers experimenteren met gratis AI-tools',
      'Stel basisrichtlijnen op voor veilig AI-gebruik',
      'Identificeer quick wins: taken die AI direct kan versnellen',
    ],
    training: 'ChatGPT Training — de ideale start',
    trainingHref: '/chatgpt',
  },
  {
    key: 'explorer',
    title: 'Explorer',
    subtitle: 'Jullie experimenteren, maar missen structuur',
    description: 'Er wordt al geëxperimenteerd met AI, maar het is nog niet gestructureerd. Met gerichte training en duidelijke richtlijnen kunnen jullie de stap maken van experimenten naar echte productiviteitswinst.',
    icon: Sparkles,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    tips: [
      'Organiseer een hands-on training afgestemd op jullie werkprocessen',
      'Stel een AI-champion aan die collega\'s begeleidt',
      'Maak AI-richtlijnen en deel best practices',
      'Kies 2-3 kernprocessen waar AI de meeste impact heeft',
    ],
    training: 'Training op maat voor jullie team',
    trainingHref: '/contact',
  },
  {
    key: 'adopter',
    title: 'Adopter',
    subtitle: 'Goede voortgang — tijd om op te schalen',
    description: 'Jullie team maakt al goed gebruik van AI. De volgende stap is professionalisering: geavanceerde technieken, integraties en meetbare KPI\'s om de impact te maximaliseren.',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    tips: [
      'Investeer in geavanceerde prompt-engineering training',
      'Integreer AI in bestaande workflows en systemen',
      'Stel KPI\'s op om AI-productiviteit te meten',
      'Verken enterprise AI-oplossingen voor meer controle',
    ],
    training: 'Geavanceerde AI Training',
    trainingHref: '/contact',
  },
  {
    key: 'leader',
    title: 'Leader',
    subtitle: 'AI is goed geïntegreerd — focus op innovatie',
    description: 'Jullie lopen voorop met AI-adoptie. Focus nu op het bijblijven met de nieuwste ontwikkelingen, het trainen van nieuwe medewerkers en het verkennen van de volgende generatie AI-tools.',
    icon: Award,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    tips: [
      'Blijf up-to-date met de nieuwste AI-ontwikkelingen',
      'Train nieuwe teamleden structureel in jullie AI-aanpak',
      'Verken nieuwe tools zoals Claude en Gemini voor specifieke taken',
      'Deel jullie succesverhaal en inspireer andere afdelingen',
    ],
    training: 'Verdiepende Claude of Gemini Training',
    trainingHref: '/claude',
  },
];

function getResult(score: number): ResultLevel {
  if (score <= 14) return resultLevels[0];
  if (score <= 21) return resultLevels[1];
  if (score <= 28) return resultLevels[2];
  return resultLevels[3];
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current) / total) * 100;
  return (
    <div className="w-full bg-stone-200 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function AiReadinessScan() {
  const [step, setStep] = useState(0); // 0 = intro, 1-8 = questions, 9 = email, 10 = result
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState('');
  const [naam, setNaam] = useState('');
  const [organisatie, setOrganisatie] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showResult, setShowResult] = useState(false);

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const result = getResult(totalScore);
  const scorePercentage = Math.round((totalScore / 32) * 100);

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    if (step < questions.length) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('loading');

    try {
      const res = await fetch('/api/ai-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          naam,
          organisatie,
          score: totalScore,
          level: result.key,
          answers,
        }),
      });

      if (!res.ok) {
        throw new Error('Er ging iets mis');
      }

      setEmailStatus('success');
      setShowResult(true);
      setStep(10);
    } catch {
      setEmailStatus('error');
    }
  };

  const skipEmail = () => {
    setShowResult(true);
    setStep(10);
  };

  // Intro screen
  if (step === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <BarChart3 className="w-10 h-10 text-violet-600" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
          Hoe AI-klaar is jouw organisatie?
        </h2>
        <p className="text-stone-500 text-lg mb-3">
          Beantwoord 8 korte vragen en ontdek binnen 2 minuten:
        </p>
        <ul className="text-stone-600 text-left max-w-md mx-auto mb-8 space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <span>Jullie AI-readiness niveau (Starter tot Leader)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <span>Concrete tips om AI beter te benutten</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <span>Welke training het beste past bij jullie fase</span>
          </li>
        </ul>
        <button
          onClick={() => setStep(1)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 group"
        >
          Start de scan
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-stone-400 text-sm mt-4">Gratis en vrijblijvend — duurt slechts 2 minuten</p>
      </div>
    );
  }

  // Questions
  if (step >= 1 && step <= questions.length) {
    const q = questions[step - 1];
    const selectedScore = answers[q.id];

    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-stone-500 mb-3">
            <span>Vraag {step} van {questions.length}</span>
            <span>{Math.round((step / questions.length) * 100)}%</span>
          </div>
          <ProgressBar current={step} total={questions.length} />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-8">
          {q.question}
        </h2>

        <div className="space-y-3 mb-8">
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(q.id, option.score)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                selectedScore === option.score
                  ? 'border-violet-500 bg-violet-50 shadow-md'
                  : 'border-stone-200 hover:border-violet-300 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ${
                  selectedScore === option.score
                    ? 'border-violet-500 bg-violet-500 text-white'
                    : 'border-stone-300 text-stone-400'
                }`}>
                  {String.fromCharCode(65 + i)}
                </div>
                <span className={`font-medium ${selectedScore === option.score ? 'text-violet-900' : 'text-stone-700'}`}>
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setStep(step - 1)}
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {step === 1 ? 'Terug' : 'Vorige vraag'}
          </button>

          {selectedScore && step < questions.length && (
            <button
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors"
            >
              Volgende
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {selectedScore && step === questions.length && (
            <button
              onClick={() => setStep(9)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Bekijk resultaat
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Email capture
  if (step === 9 && !showResult) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BarChart3 className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Jullie resultaat is klaar!</h2>
        <p className="text-stone-500 mb-8">
          Vul je gegevens in voor het volledige rapport met persoonlijke aanbevelingen. Of bekijk direct je score.
        </p>

        <form onSubmit={handleEmailSubmit} className="space-y-4 text-left mb-6">
          <div>
            <label htmlFor="scan-naam" className="block text-sm font-medium text-stone-700 mb-1">Naam</label>
            <input
              id="scan-naam"
              type="text"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              placeholder="Je naam"
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500"
            />
          </div>
          <div>
            <label htmlFor="scan-organisatie" className="block text-sm font-medium text-stone-700 mb-1">Organisatie</label>
            <input
              id="scan-organisatie"
              type="text"
              value={organisatie}
              onChange={(e) => setOrganisatie(e.target.value)}
              placeholder="Je organisatie"
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500"
            />
          </div>
          <div>
            <label htmlFor="scan-email" className="block text-sm font-medium text-stone-700 mb-1">E-mailadres *</label>
            <input
              id="scan-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="je@organisatie.nl"
              required
              className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500"
            />
          </div>
          <button
            type="submit"
            disabled={emailStatus === 'loading'}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all disabled:opacity-50"
          >
            {emailStatus === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>Ontvang rapport <Send className="w-4 h-4" /></>
            )}
          </button>
          {emailStatus === 'error' && (
            <p className="text-red-500 text-sm text-center">Er ging iets mis. Probeer het opnieuw.</p>
          )}
        </form>

        <button
          onClick={skipEmail}
          className="text-stone-400 hover:text-stone-600 text-sm underline transition-colors"
        >
          Sla over en bekijk alleen de score
        </button>
      </div>
    );
  }

  // Results
  if (showResult || step === 10) {
    const Icon = result.icon;
    return (
      <div className="max-w-2xl mx-auto">
        {/* Score overview */}
        <div className={`${result.bgColor} ${result.borderColor} border-2 rounded-2xl p-8 mb-8 text-center`}>
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Icon className={`w-8 h-8 ${result.color}`} />
          </div>
          <p className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-2">Jullie niveau</p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-2 ${result.color}`}>{result.title}</h2>
          <p className="text-stone-600 font-medium mb-4">{result.subtitle}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-stone-500">
            <span>Score: <strong className="text-stone-900">{totalScore}/32</strong></span>
            <span className="w-1 h-1 bg-stone-300 rounded-full" />
            <span>Top <strong className="text-stone-900">{scorePercentage}%</strong></span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-stone-600 text-lg leading-relaxed">{result.description}</p>
        </div>

        {/* Tips */}
        <div className="bg-white border border-stone-200 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold text-stone-900 mb-5">Aanbevelingen voor jullie organisatie</h3>
          <div className="space-y-4">
            {result.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-violet-600 text-sm font-bold">{i + 1}</span>
                </div>
                <p className="text-stone-600">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">Klaar voor de volgende stap?</h3>
            <p className="text-stone-300 mb-6">
              Aanbevolen training: <strong className="text-white">{result.training}</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={result.trainingHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-xl font-semibold hover:bg-stone-100 transition-all group"
              >
                Bekijk training
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-stone-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-stone-800 transition-all"
              >
                Vrijblijvend adviesgesprek
              </Link>
            </div>
          </div>
        </div>

        {/* Retake */}
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setStep(0);
              setAnswers({});
              setShowResult(false);
              setEmail('');
              setNaam('');
              setOrganisatie('');
              setEmailStatus('idle');
            }}
            className="text-stone-400 hover:text-stone-600 text-sm underline transition-colors"
          >
            Scan opnieuw doen
          </button>
        </div>
      </div>
    );
  }

  return null;
}

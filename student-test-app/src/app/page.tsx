
'use client';

import React, { useState } from 'react';
import { VariantSelection } from '@/components/VariantSelection';
import { QuizInterface } from '@/components/QuizInterface';
import { ResultSummary } from '@/components/ResultSummary';
import { variantA, variantB, Question } from '@/data/questions';

type AppState = 'NAME_INPUT' | 'VARIANT_SELECTION' | 'QUIZ' | 'SUBMITTING' | 'RESULT';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('NAME_INPUT');
  const [studentName, setStudentName] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<'A' | 'B' | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      setAppState('VARIANT_SELECTION');
    }
  };

  const handleVariantSelect = (variant: 'A' | 'B') => {
    setSelectedVariant(variant);
    const questions = variant === 'A' ? variantA : variantB;
    setCurrentQuestions(questions);
    setTotalQuestions(questions.length);
    setAppState('QUIZ');
  };

  const handleQuizComplete = async (answers: Record<number, number>) => {
    setAppState('SUBMITTING');

    // Calculate score
    let calculatedScore = 0;
    currentQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);

    // Send result to API
    try {
      const response = await fetch('/api/send-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentName,
          variant: selectedVariant,
          score: calculatedScore,
          total: currentQuestions.length,
          answers: answers // Detailed answers
        }),
      });

      if (!response.ok) {
        console.error('Failed to send email');
      }
    } catch (err) {
      console.error('Error sending result:', err);
    } finally {
      // Show result regardless of email success (best effort)
      setAppState('RESULT');
    }
  };

  const handleRestart = () => {
    // This function is effectively disabled for the user as the button is removed,
    // but kept for type compatibility or admin debug if needed.
    setStudentName('');
    setSelectedVariant(null);
    setCurrentQuestions([]);
    setScore(0);
    setAppState('NAME_INPUT');
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-10 pb-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          <span className="text-indigo-600">Шалгалтын</span>Систем
        </h1>
        {studentName && (
          <div className="text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            Сурагч: <span className="text-gray-900">{studentName}</span>
          </div>
        )}
      </header>

      {/* Content Area */}
      <div className="w-full max-w-4xl">
        {appState === 'NAME_INPUT' && (
          <div className="flex flex-col items-center justify-center min-h-[50vh] animate-in fade-in zoom-in duration-500">

            {/* Rules Section */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm mb-8 max-w-md w-full">
              <h3 className="text-lg font-bold text-red-800 mb-3">Шалгалтын дүрэм</h3>
              <p className="text-sm text-red-700 mb-2">Шалгалтанд оролцож буй сурагчид шалгалтын хуудаснаас өөр зүйл орсон тохиолдолд оноо хасна:</p>
              <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                <li>ChatGPT гэх мэт AI ашигласан: <strong>-15 оноо</strong></li>
                <li>YouTube орвол: <strong>-10 оноо</strong></li>
                <li>Тоглоом тогловол: <strong>-10 оноо</strong></li>
                <li>Бусад веб хуудас руу орсон: <strong>-5 оноо</strong></li>
                <li>Хоорондоо ярьсан: <strong>-10 оноо</strong></li>
                <li><strong>Сурагч 1 л удаа хариулт илгээх боломжтой.</strong></li>
                <li><span className="text-red-600 font-bold">Санамж:</span> Шалгалтын хуудсаас гарсан тохиолдолд хариулт хадгалагдахгүй!</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Мэдээллээ оруулна уу</h2>
              <form onSubmit={handleNameSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Овог Нэр</label>

                  {/* Specific Name Instruction */}
                  <p className="text-xs text-indigo-600 mb-2 italic">
                    Нэрээ зөвхөн <strong>латин</strong> үсгээр бичнэ үү. Овог эхэлж, нэр дараа нь. Жишээлбэл: Boldbaatar Tsog
                  </p>

                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none text-gray-900 placeholder-gray-400 bg-white"
                    placeholder="Жишээ: Boldbaatar Tsog"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-bold text-white transition-all shadow-md ${studentName.trim() ? 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  disabled={!studentName.trim()}
                >
                  Шалгалтыг эхлүүлэх
                </button>
              </form>
            </div>
          </div>
        )}

        {appState === 'VARIANT_SELECTION' && (
          <VariantSelection onSelect={handleVariantSelect} />
        )}

        {appState === 'QUIZ' && (
          <QuizInterface
            questions={currentQuestions}
            onComplete={handleQuizComplete}
            onCancel={handleRestart}
          />
        )}

        {appState === 'SUBMITTING' && (
          <div className="flex flex-col items-center justify-center min-h-[50vh] animate-pulse">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
            <h2 className="text-xl font-medium text-gray-600">Илгээж байна...</h2>
          </div>
        )}

        {appState === 'RESULT' && (
          <ResultSummary
            score={score}
            total={totalQuestions}
            studentName={studentName}
            variant={selectedVariant || ''}
            onRestart={handleRestart}
          />
        )}
      </div>

      <footer className="mt-auto pt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} School Test System
      </footer>
    </main>
  );
}

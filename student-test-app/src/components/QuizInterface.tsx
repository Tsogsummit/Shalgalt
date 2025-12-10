
import React, { useState } from 'react';
import { Question } from '../data/questions';

type QuizInterfaceProps = {
    questions: Question[];
    onComplete: (answers: Record<number, number>) => void;
    onCancel: () => void;
};

export function QuizInterface({ questions, onComplete, onCancel }: QuizInterfaceProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    const currentQuestion = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;
    const isAnswered = answers[currentQuestion.id] !== undefined;

    const handleOptionSelect = (optionIndex: number) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            onComplete(answers);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                    <span>Асуулт {currentIndex + 1} / {questions.length}</span>
                    <span>{Math.round(progress)}% Дууссан</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
                <div className="p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
                        {currentQuestion.id}. {currentQuestion.text}
                    </h2>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(index)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center group ${answers[currentQuestion.id] === index
                                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-medium shadow-sm'
                                        : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50 text-gray-600'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors ${answers[currentQuestion.id] === index
                                        ? 'border-indigo-600 bg-indigo-600'
                                        : 'border-gray-300 group-hover:border-indigo-400'
                                    }`}>
                                    {answers[currentQuestion.id] === index && (
                                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                    )}
                                </div>
                                <span>{option}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="bg-gray-50 p-6 flex justify-between items-center border-t border-gray-100">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${currentIndex === 0
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                            }`}
                    >
                        Өмнөх
                    </button>

                    {currentIndex === questions.length - 1 ? (
                        <button
                            onClick={handleNext}
                            disabled={!isAnswered}
                            className={`px-8 py-3 rounded-lg font-bold shadow-lg transition-all transform ${isAnswered
                                    ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-xl hover:-translate-y-0.5'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            Дуусгах & Илгээх
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            Дараагийн асуулт
                        </button>
                    )}

                </div>
            </div>

            <div className="mt-8 text-center">
                <button onClick={onCancel} className="text-sm text-red-400 hover:text-red-600 transition-colors">
                    Шалгалтыг орхих
                </button>
            </div>
        </div>
    );
}

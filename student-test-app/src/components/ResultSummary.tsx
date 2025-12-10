
import React from 'react';

type ResultSummaryProps = {
    score: number;
    total: number;
    studentName: string;
    variant: string;
    // onRestart prop is removed since we don't want them to restart
    onRestart: () => void;
};

// We keep onRestart in props type to avoid breaking parent component immediately if we don't change it, 
// but we won't use it.
export function ResultSummary({ studentName }: ResultSummaryProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] animate-in zoom-in duration-500">
            <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-indigo-500" />

                <h2 className="text-3xl font-bold text-gray-800 mb-6">Шалгалт дууслаа</h2>

                <div className="mb-8">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p className="text-xl font-medium text-gray-800 mb-2">Баярлалаа, {studentName}!</p>
                    <p className="text-gray-600">
                        Таны хариултыг багш руу илгээлээ.<br />
                        Амжилт хүсье!
                    </p>
                </div>
            </div>
        </div>
    );
}

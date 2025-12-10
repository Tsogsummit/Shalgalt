
import React from 'react';

type VariantSelectionProps = {
    onSelect: (variant: 'A' | 'B') => void;
};

export function VariantSelection({ onSelect }: VariantSelectionProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in zoom-in duration-500">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
                Шалгалтанд тавтай морил
            </h1>
            <p className="text-gray-600 text-lg mb-8">Шалгалтын хувилбараа сонгоно уу.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4">
                <button
                    onClick={() => onSelect('A')}
                    className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 hover:border-indigo-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">Хувилбар А</h2>
                        <p className="text-gray-500">HTML & CSS Үндэс - Хэсэг 1</p>
                    </div>
                </button>

                <button
                    onClick={() => onSelect('B')}
                    className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 hover:border-indigo-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">Хувилбар B</h2>
                        <p className="text-gray-500">HTML & CSS Үндэс - Хэсэг 2</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

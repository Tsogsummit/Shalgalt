
import React from 'react';

type VariantSelectionProps = {
    onSelect: (variant: 'A' | 'B') => void;
    gradeLevel: '6' | '11' | null;
};

export function VariantSelection({ onSelect, gradeLevel }: VariantSelectionProps) {
    const getDescriptions = () => {
        if (gradeLevel === '6') {
            return {
                titleA: "Хувилбар А",
                descA: "Робот технологи & Вэб хөгжүүлэлт - Хэсэг 1",
                titleB: "Хувилбар B",
                descB: "Робот технологи & Вэб хөгжүүлэлт - Хэсэг 2"
            };
        }
        if (gradeLevel === '11') {
            return {
                titleA: "Хувилбар А",
                descA: "Python хэл & Програмчлал - Хэсэг 1",
                titleB: "Хувилбар B",
                descB: "Python хэл & Програмчлал - Хэсэг 2"
            };
        }
        return {
            titleA: "Хувилбар А",
            descA: "Шалгалтын хэсэг 1",
            titleB: "Хувилбар B",
            descB: "Шалгалтын хэсэг 2"
        };
    };

    const content = getDescriptions();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-in fade-in zoom-in duration-500">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-2">
                Шалгалтанд тавтай морил
            </h1>
            <p className="text-gray-600 text-lg mb-8">Шалгалтын хувилбараа сонгоно уу. ({gradeLevel}-р анги)</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4">
                <button
                    onClick={() => onSelect('A')}
                    className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 hover:border-indigo-300 text-left"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">{content.titleA}</h2>
                        <p className="text-gray-500">{content.descA}</p>
                    </div>
                </button>

                <button
                    onClick={() => onSelect('B')}
                    className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100 hover:border-indigo-300 text-left"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">{content.titleB}</h2>
                        <p className="text-gray-500">{content.descB}</p>
                    </div>
                </button>
            </div>
        </div>
    );
}

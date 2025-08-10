"use client";
import { BarChart3 } from "lucide-react";

const AnalysisCard = ({ analysisText }: { analysisText: string }) => {
  if (!analysisText) return null;

  const styleKeywords = (paragraph: string) => {
    return paragraph
      .replace(
        /موفقیت\s+(\d+)/g,
        `<strong class="text-green-400 font-semibold" dir="ltr">موفقیت $1</strong>`
      )
      .replace(
        /success[:：]?\s*(\d+)/gi,
        `<strong class="text-green-400 font-semibold" dir="ltr">success: $1</strong>`
      )
      .replace(
        /شکست\s+(\d+)/g,
        `<strong class="text-red-400 font-semibold" dir="ltr">شکست $1</strong>`
      )
      .replace(
        /failed[:：]?\s*(\d+)/gi,
        `<strong class="text-red-400 font-semibold" dir="ltr">failed: $1</strong>`
      )
      .replace(
        /میانگین\s+تأخیر\s*(\d+(\.\d+)?)/g,
        `میانگین تأخیر <strong class="text-yellow-400 font-semibold" dir="ltr">$1</strong>`
      )
      .replace(
        /avgLatency\s*(\d+(\.\d+)?)/gi,
        `<strong class="text-yellow-400 font-semibold" dir="ltr">avgLatency $1</strong>`
      )
      .replace(
        /RPS[:：]?\s*(\d+(\.\d+)?)/gi,
        `<strong class="text-purple-400 font-semibold" dir="ltr">RPS $1</strong>`
      )
      .replace(
        /(\d+)\s+کاربر\s+همزمان/g,
        `<strong class="text-pink-400 font-semibold" dir="ltr">$1 کاربر همزمان</strong>`
      )
      .replace(
        /مدت\s+زمان\s+(\d+(\.\d+)?)/g,
        `مدت زمان <strong class="text-blue-400 font-semibold" dir="ltr">$1</strong>`
      )
      .replace(
        /durationMs\s*(\d+(\.\d+)?)/gi,
        `<strong class="text-blue-400 font-semibold" dir="ltr">durationMs $1</strong>`
      );
  };

  return (
    <div
      dir="rtl"
      className="mt-8 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-8 rounded-3xl shadow-2xl border border-gray-700/60 font-sans"
    >
      {/* Header */}
      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-tr from-blue-600 to-sky-500 rounded-full flex items-center justify-center shadow-lg text-white">
          <BarChart3 size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white tracking-wide">
            Smart Analysis Results
          </h3>
          <p className="text-sm text-blue-300 opacity-80 mt-1">
            Summary of performance and key insights
          </p>
          <div className="mt-1 h-1 w-20 rounded bg-blue-400" />
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
        {analysisText.split(/\n\s*\n?/).map((paragraph, index) => (
          <p
            key={index}
            className="break-words"
            dangerouslySetInnerHTML={{ __html: styleKeywords(paragraph) }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalysisCard;

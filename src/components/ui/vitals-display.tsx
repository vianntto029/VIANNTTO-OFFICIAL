import { webVitals } from "@/lib/web-vitals";

interface VitalsDisplayProps {
  className?: string;
}

export const VitalsDisplay = ({ className = '' }: VitalsDisplayProps) => {
  const report = webVitals.getReport();
  const score = webVitals.getOverallScore();
  const grade = webVitals.getPerformanceGrade();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-yellow-600';
      case 'C': return 'text-orange-600';
      case 'D': return 'text-red-600';
      case 'F': return 'text-red-800';
      default: return 'text-gray-600';
    }
  };

  const formatValue = (value: number | undefined, unit: string = '') => {
    if (value === undefined) return 'N/A';
    return `${value.toFixed(2)}${unit}`;
  };

  return (
    <div className={`fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">Web Vitals</span>
        <span className={`font-bold ${getGradeColor(grade)}`}>
          {grade} ({score}%)
        </span>
      </div>
      
      <div className="space-y-1">
        {report.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={report.fcp.rating === 'good' ? 'text-green-400' : report.fcp.rating === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}>
              {formatValue(report.fcp.value, 's')}
            </span>
          </div>
        )}
        
        {report.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={report.lcp.rating === 'good' ? 'text-green-400' : report.lcp.rating === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}>
              {formatValue(report.lcp.value, 's')}
            </span>
          </div>
        )}
        
        {report.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={report.fid.rating === 'good' ? 'text-green-400' : report.fid.rating === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}>
              {formatValue(report.fid.value, 'ms')}
            </span>
          </div>
        )}
        
        {report.cls && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={report.cls.rating === 'good' ? 'text-green-400' : report.cls.rating === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}>
              {formatValue(report.cls.value)}
            </span>
          </div>
        )}
        
        {report.ttfb && (
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={report.ttfb.rating === 'good' ? 'text-green-400' : report.ttfb.rating === 'needs-improvement' ? 'text-yellow-400' : 'text-red-400'}>
              {formatValue(report.ttfb.value, 'ms')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VitalsDisplay;
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
}

interface VitalsReport {
  cls: Metric | null;
  inp: Metric | null;
  fcp: Metric | null;
  lcp: Metric | null;
  ttfb: Metric | null;
}

export class WebVitalsMonitor {
  private static instance: WebVitalsMonitor;
  private report: VitalsReport = {
    cls: null,
    inp: null,
    fcp: null,
    lcp: null,
    ttfb: null,
  };

  private constructor() {
    this.initializeMonitoring();
  }

  public static getInstance(): WebVitalsMonitor {
    if (!WebVitalsMonitor.instance) {
      WebVitalsMonitor.instance = new WebVitalsMonitor();
    }
    return WebVitalsMonitor.instance;
  }

  private initializeMonitoring(): void {
    // Cumulative Layout Shift (CLS)
    onCLS((metric) => {
      this.report.cls = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      };
      this.logMetric(metric);
      this.sendToAnalytics(metric);
    });

    // Interaction to Next Paint (INP)
    onINP((metric) => {
      this.report.inp = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      };
      this.logMetric(metric);
      this.sendToAnalytics(metric);
    });

    // First Contentful Paint (FCP)
    onFCP((metric) => {
      this.report.fcp = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      };
      this.logMetric(metric);
      this.sendToAnalytics(metric);
    });

    // Largest Contentful Paint (LCP)
    onLCP((metric) => {
      this.report.lcp = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      };
      this.logMetric(metric);
      this.sendToAnalytics(metric);
    });

    // Time to First Byte (TTFB)
    onTTFB((metric) => {
      this.report.ttfb = {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      };
      this.logMetric(metric);
      this.sendToAnalytics(metric);
    });
  }

  private logMetric(metric: any): void {
    const rating = metric.rating.toUpperCase();
    const value = metric.value.toFixed(2);

    console.log(
      `%c📊 ${metric.name}: ${value} (${rating})`,
      metric.rating === 'good'
        ? 'color: #10b981; font-weight: bold'
        : metric.rating === 'needs-improvement'
          ? 'color: #f59e0b; font-weight: bold'
          : 'color: #ef4444; font-weight: bold'
    );
  }

  private sendToAnalytics(metric: any): void {
    // Send to your analytics service
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        value: Math.round(metric.value),
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
        metric_rating: metric.rating,
      });
    }

    // You can also send to your own backend
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      }).catch(() => {
        // Silently fail analytics requests
      });
    }
  }

  public getReport(): VitalsReport {
    return { ...this.report };
  }

  public getOverallScore(): number {
    const metrics = Object.values(this.report).filter(Boolean);
    if (metrics.length === 0) return 0;

    const goodCount = metrics.filter(metric => metric!.rating === 'good').length;
    return Math.round((goodCount / metrics.length) * 100);
  }

  public getPerformanceGrade(): 'A' | 'B' | 'C' | 'D' | 'F' {
    const score = this.getOverallScore();
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }
}

export const webVitals = WebVitalsMonitor.getInstance();
export default webVitals;
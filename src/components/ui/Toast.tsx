import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

const Toast = ({ message, type, duration = 3000, onClose }: ToastProps) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, duration);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - (100 / (duration / 100));
        return newProgress < 0 ? 0 : newProgress;
      });
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onClose]);
  
  if (type === 'success') {
    return (
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        <div className="relative bg-white dark:bg-gray-800 rounded-lg p-8 transform transition-all duration-500 scale-110 rotate-0">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center animate-bounce-slow">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Thank You!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-sm">
              {message}
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-4">
              <div 
                className="bg-green-500 h-1 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const styles = type === 'error' 
    ? {
        bg: 'bg-red-50 dark:bg-red-900',
        border: 'border-red-500',
        text: 'text-red-800 dark:text-red-200',
        icon: <AlertCircle className="w-5 h-5 text-red-500" />,
        progress: 'bg-red-500'
      }
    : {
        bg: 'bg-blue-50 dark:bg-blue-900',
        border: 'border-blue-500',
        text: 'text-blue-800 dark:text-blue-200',
        icon: <AlertCircle className="w-5 h-5 text-blue-500" />,
        progress: 'bg-blue-500'
      };
  
  return (
    <div 
      className={`fixed top-4 right-4 max-w-xs z-50 transform transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
      <div className={`border-l-4 ${styles.border} ${styles.bg} p-4 rounded-md shadow-lg`}>
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            {styles.icon}
          </div>
          <div className="flex-1">
            <p className={`text-sm ${styles.text} font-medium`}>{message}</p>
          </div>
          <div>
            <button onClick={() => {
              setVisible(false);
              setTimeout(onClose, 300);
            }} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
          <div 
            className={`${styles.progress} h-1 rounded-full`} 
            style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Toast;
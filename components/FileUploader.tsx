import React from 'react';
import { HistoryIcon, GradientBookOpenIcon, UploadIcon, RomanTempleIcon, SearchIcon } from './icons';

interface FileUploaderProps {
  onStartInteractiveBook: () => void;
  onLoadLastBook: () => void;
  hasLastBook: boolean;
  onSmartSearch: () => void;
}

const PortalCard: React.FC<{
    onClick: () => void;
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}> = ({ onClick, icon, title, description, gradient }) => (
    <div
        onClick={onClick}
        className="w-64 h-80 rounded-2xl p-[2px] cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        style={{ backgroundImage: gradient }}
    >
        <div className="w-full h-full bg-[var(--color-background-primary)] rounded-[calc(1rem-2px)] p-6 flex flex-col justify-between items-center text-center">
            <div className="mt-4">{icon}</div>
            <div>
                <h3
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                        fontFamily: "'Marhey', 'Tajawal', sans-serif",
                        backgroundImage: gradient,
                    }}
                >
                    {title}
                </h3>
                <p className="mt-2 text-sm text-gold-brown">{description}</p>
            </div>
        </div>
    </div>
);


const FileUploader: React.FC<FileUploaderProps> = ({ 
    onStartInteractiveBook, 
    onLoadLastBook, 
    hasLastBook,
    onSmartSearch
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden p-4">
      
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-8 py-8">
            
            <PortalCard
                onClick={onSmartSearch}
                icon={<SearchIcon className="w-20 h-20 text-[var(--color-accent-primary)]" />}
                title="Smart Search"
                description="Search inside any file to find specific information quickly."
                gradient="linear-gradient(to bottom right, #FBBF24, #a37b16)"
            />

            <div className="flex flex-col items-center">
                <div 
                    className="mb-2 whitespace-nowrap"
                    style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontSize: '28px',
                        color: '#4682B4',
                        fontWeight: 'bold',
                    }}
                >
                    Lord of the books
                </div>
                <div
                    className="relative z-10 w-full max-w-lg rounded-lg p-[2px] h-80"
                    style={{ 
                        backgroundImage: 'var(--color-background-container-gradient)',
                    }}
                >
                    <div className="bg-[var(--color-background-primary)] rounded-[calc(0.5rem-2px)] p-6 flex flex-col items-center justify-around h-full text-center">
                        <div className="space-y-2">
                            <p className="text-lg font-medium text-[var(--color-text-secondary)]">More interaction. More explanation. More questions.</p>
                            <p className="text-2xl font-bold text-[var(--color-text-primary)]">Start your scientific treasure hunt with</p>
                        </div>
                        
                        <div className="my-4">
                             <p className="text-4xl font-bold golden-text" style={{ fontFamily: "'Marhey', 'Tajawal', sans-serif" }}>
                                English Version
                             </p>
                             <p className="text-3xl font-bold text-[var(--color-text-primary)] mt-2 flex items-center justify-center gap-2" style={{ fontFamily: "'Marhey', 'Tajawal', sans-serif" }}>
                                 <RomanTempleIcon className="w-8 h-8 inline-block" /> 
                                 <span>Booksy</span>
                             </p>
                        </div>

                        <div className="text-center">
                            <p className="text-base text-[var(--color-text-tertiary)]">AI PDF Community Tools</p>
                            <p className="text-sm text-[var(--color-text-tertiary)] mt-1">Implemented by Nagiz.net</p>
                        </div>
                    </div>
                </div>
            </div>

            <PortalCard
                onClick={onStartInteractiveBook}
                icon={<GradientBookOpenIcon className="w-20 h-20" gradientId="book-portal-icon-gradient" />}
                title="Your Interactive Book"
                description="Analysis, explanations, and deep tests."
                gradient="linear-gradient(to bottom right, #FBBF24, #a37b16)"
            />
        </div>
        
        {hasLastBook && (
          <button
            onClick={onLoadLastBook}
            style={{ backgroundImage: 'linear-gradient(to bottom right, #FBBF24, #262626)' }}
            className="relative z-10 mt-6 w-full max-w-md flex items-center justify-center gap-3 px-6 py-3 text-base font-bold text-white rounded-lg shadow-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            <HistoryIcon className="w-5 h-5"/>
            Load Last Book
          </button>
        )}
      </div>
  );
};

export default FileUploader;
'use client';

interface InfoPanelProps {
  title: string;
  icon: string;
  description: string;
  link?: string;
  linkText?: string;
}

export default function InfoPanel({ title, icon, description, link, linkText }: InfoPanelProps) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <div className="text-4xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-400 mb-4">{description}</p>
          {link && linkText && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm font-bold"
            >
              {linkText} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

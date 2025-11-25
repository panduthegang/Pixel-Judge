import React from 'react';

interface ToggleSwitchProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: Array<{ value: T; label: string }>;
}

export function ToggleSwitch<T extends string>({ value, onChange, options }: ToggleSwitchProps<T>) {
  return (
    <div className="inline-flex border-2 border-vintage-border bg-white shadow-retro">
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-8 py-3 font-mono text-sm uppercase tracking-wider transition-all ${
            value === option.value
              ? 'bg-vintage-charcoal text-vintage-cream'
              : 'bg-white text-vintage-charcoal hover:bg-vintage-paper'
          } ${index > 0 ? 'border-l-2 border-vintage-border' : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

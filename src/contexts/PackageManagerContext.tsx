'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type PackageManager = 'pnpm' | 'npm' | 'yarn';

interface PackageManagerInfo {
  name: string;
  command: string;
  icon: string;
}

interface PackageManagerContextType {
  selectedManager: PackageManager;
  setSelectedManager: (manager: PackageManager) => void;
  getInstallCommand: () => string;
  getPackageManagerInfo: () => PackageManagerInfo;
}

const packageManagers: Record<PackageManager, PackageManagerInfo> = {
  pnpm: {
    name: 'pnpm',
    command: 'pnpm add -g path-fast',
    icon: '📦'
  },
  npm: {
    name: 'npm',
    command: 'npm install -g path-fast',
    icon: '📦'
  },
  yarn: {
    name: 'yarn',
    command: 'yarn global add path-fast',
    icon: '🧶'
  }
};

const PackageManagerContext = createContext<PackageManagerContextType | undefined>(undefined);

interface PackageManagerProviderProps {
  children: ReactNode;
}

export function PackageManagerProvider({ children }: PackageManagerProviderProps) {
  const [selectedManager, setSelectedManager] = useState<PackageManager>('pnpm');

  const getInstallCommand = () => {
    return packageManagers[selectedManager].command;
  };

  const getPackageManagerInfo = () => {
    return packageManagers[selectedManager];
  };

  const value = {
    selectedManager,
    setSelectedManager,
    getInstallCommand,
    getPackageManagerInfo
  };

  return (
    <PackageManagerContext.Provider value={value}>
      {children}
    </PackageManagerContext.Provider>
  );
}

export function usePackageManager() {
  const context = useContext(PackageManagerContext);
  if (context === undefined) {
    throw new Error('usePackageManager deve ser usado dentro de um PackageManagerProvider');
  }
  return context;
}
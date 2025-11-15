import React from "react"

/**
 * Logo Component - Services.Net
 * Logo provisória: círculo com '</> _' no centro
 * EDITÁVEL: Substitua este componente pela sua logo final
 */
const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo círculo com código */}
      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
        <span className="text-white font-mono text-sm font-bold">&lt;/&gt;_</span>
      </div>
      
      {/* Nome da empresa */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">Services.Net</span>
        <span className="text-xs text-gray-400">Tecnologia Inteligente</span>
      </div>
    </div>
  )
}

export default Logo

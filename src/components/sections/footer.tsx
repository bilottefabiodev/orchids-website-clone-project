import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/10 font-body">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8 text-center text-[#999999]">
          
          <div className="max-w-4xl space-y-3">
            <p className="text-sm leading-relaxed">
              © 2025 Amanda Lourenço | Todos os direitos reservados
            </p>
            <p className="text-xs leading-relaxed">
              "Atenção: Nós não compartilharemos seu contato com terceiros. O tratamento de dados nesta empresa acontece em conformidade com a Lei Geral de Proteção de Dados (LGPD). Você está seguro(a) e poderá se descadastrar a qualquer momento."
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">
              Desenvolvido por:
            </p>
            <a href="https://agenciaecom.com.br/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <img 
                width="180" 
                height="23" 
                src="https://amandalourenco.com/wp-content/uploads/2025/11/logo-agencia-ecom.svg" 
                alt="Logo da Agência Ecom"
                className="h-auto w-[144px]"
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
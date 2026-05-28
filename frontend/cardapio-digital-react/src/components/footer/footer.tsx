export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-1 small">
          <strong>Disciplina:</strong> Desenvolvimento Web
        </p>
        <p className="mb-1 small">
          <strong>Integrantes:</strong> [Kevin Willian], [Matheus Henrique], [Kaiky Lobo] &nbsp;|&nbsp;
          <strong>Ano:</strong> {currentYear}
        </p>
        <p className="mb-0 small text-secondary">
          Cardapio Digital - Painel Administrativo
        </p>
      </div>
    </footer>
  );
}

import { FoodData } from "../../interface/FoodData";

interface DashboardProps {
  foods: FoodData[];
}

export function Dashboard({ foods }: DashboardProps) {
  const total = foods.length;
  const totalValue = foods.reduce((sum, f) => sum + f.price, 0);
  const avgPrice = total > 0 ? totalValue / total : 0;
  const mostExpensive = total > 0
    ? foods.reduce((max, f) => (f.price > max.price ? f : max), foods[0])
    : null;

  return (
    <div className="row g-3 mb-4">
      <div className="col-6 col-md-3">
        <div className="card border-0 bg-danger text-white text-center shadow-sm">
          <div className="card-body py-3">
            <div className="fs-2 fw-bold">{total}</div>
            <div className="small">Itens no Cardapio</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card border-0 bg-success text-white text-center shadow-sm">
          <div className="card-body py-3">
            <div className="fs-4 fw-bold">
              R$ {(totalValue / 100).toFixed(2)}
            </div>
            <div className="small">Valor Total</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card border-0 bg-primary text-white text-center shadow-sm">
          <div className="card-body py-3">
            <div className="fs-4 fw-bold">
              R$ {(avgPrice / 100).toFixed(2)}
            </div>
            <div className="small">Preco Medio</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card border-0 bg-warning text-dark text-center shadow-sm">
          <div className="card-body py-3">
            <div className="fs-6 fw-bold text-truncate">
              {mostExpensive ? mostExpensive.title : "-"}
            </div>
            <div className="small">Mais Caro</div>
          </div>
        </div>
      </div>
    </div>
  );
}

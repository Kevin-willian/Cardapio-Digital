import { FoodData } from "../../interface/FoodData";

interface CardProps {
  food: FoodData;
  onEdit: (food: FoodData) => void;
  onDelete: (id: number) => void;
}

export function Card({ food, onEdit, onDelete }: CardProps) {
  const handleDelete = () => {
    if (confirm(`Deseja excluir "${food.title}" do cardapio?`)) {
      onDelete(food.id);
    }
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={food.image}
        alt={food.title}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://via.placeholder.com/300x180?text=Sem+Imagem";
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{food.title}</h5>
        <p className="card-text text-success fw-semibold fs-5 mt-auto">
          R$ {(food.price / 100).toFixed(2)}
        </p>
        <div className="d-flex gap-2 mt-2">
          <button
            className="btn btn-outline-primary btn-sm flex-fill"
            onClick={() => onEdit(food)}
          >
            Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm flex-fill"
            onClick={handleDelete}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useFoodData } from "./hooks/useFoodData";
import { useFoodDataDelete } from "./hooks/useFoodDataDelete";
import { FoodData } from "./interface/FoodData";
import { Card } from "./components/card/card";
import { CreateModal } from "./components/create-modal/create-modal";
import { EditModal } from "./components/edit-modal/edit-modal";
import { Dashboard } from "./components/dashboard/dashboard";
import { Footer } from "./components/footer/footer";

function App() {
  const { data: foods, isLoading, isError } = useFoodData();
  const { mutate: deleteFood } = useFoodDataDelete();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [foodToEdit, setFoodToEdit] = useState<FoodData | null>(null);

  const handleEdit = (food: FoodData) => setFoodToEdit(food);
  const handleDelete = (id: number) => deleteFood(id);

  return (
    <>
      <nav className="navbar navbar-dark bg-danger shadow">
        <div className="container">
          <span className="navbar-brand fs-4 fw-bold">Cardapio Digital</span>
          <button
            className="btn btn-light fw-semibold"
            onClick={() => setShowCreateModal(true)}
          >
            + Novo Item
          </button>
        </div>
      </nav>

      <main className="container my-4">
        <h4 className="mb-3 text-secondary">Painel Administrativo</h4>

        {foods && <Dashboard foods={foods} />}

        {isLoading && (
          <div className="text-center py-5">
            <div className="spinner-border text-danger" role="status" />
            <p className="mt-2 text-muted">Carregando cardapio...</p>
          </div>
        )}

        {isError && (
          <div className="alert alert-danger" role="alert">
            Erro ao carregar o cardapio. Verifique se o backend esta rodando em
            <strong> http://localhost:8080</strong>.
          </div>
        )}

        {foods && foods.length === 0 && (
          <div className="text-center py-5 text-muted">
            <p className="fs-5">Nenhum item cadastrado ainda.</p>
            <button
              className="btn btn-danger"
              onClick={() => setShowCreateModal(true)}
            >
              Cadastrar primeiro item
            </button>
          </div>
        )}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {foods?.map((food) => (
            <div className="col" key={food.id}>
              <Card food={food} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {showCreateModal && (
        <CreateModal onClose={() => setShowCreateModal(false)} />
      )}

      {foodToEdit && (
        <EditModal food={foodToEdit} onClose={() => setFoodToEdit(null)} />
      )}
    </>
  );
}

export default App;

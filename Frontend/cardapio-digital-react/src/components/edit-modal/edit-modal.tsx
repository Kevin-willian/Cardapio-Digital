import { useState, useEffect } from "react";
import { FoodData } from "../../interface/FoodData";
import { useFoodDataUpdate } from "../../hooks/useFoodDataUpdate";

interface InputProps {
  label: string;
  value: string | number;
  updateValue: (value: string) => void;
  type?: string;
}

const Input = ({ label, value, updateValue, type = "text" }: InputProps) => (
  <div className="mb-3">
    <label className="form-label fw-semibold">{label}</label>
    <input
      type={type}
      className="form-control"
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      placeholder={label}
    />
  </div>
);

interface EditModalProps {
  food: FoodData;
  onClose: () => void;
}

export function EditModal({ food, onClose }: EditModalProps) {
  const [title, setTitle] = useState(food.title);
  const [image, setImage] = useState(food.image);
  const [price, setPrice] = useState(String(food.price));

  const { mutate, isSuccess, isPending } = useFoodDataUpdate();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  const handleSubmit = () => {
    if (!title || !image || !price) {
      alert("Preencha todos os campos!");
      return;
    }
    mutate({ id: food.id, data: { title, image, price: parseInt(price) } });
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Editar: {food.title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <Input label="Nome do prato" value={title} updateValue={setTitle} />
            <Input label="URL da imagem" value={image} updateValue={setImage} />
            <Input
              label="Preco em centavos"
              value={price}
              updateValue={setPrice}
              type="number"
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={isPending}
            >
              {isPending ? "Salvando..." : "Atualizar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

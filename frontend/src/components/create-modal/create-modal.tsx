import { useState, useEffect } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";

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

interface ModalProps {
  onClose: () => void;
}

export function CreateModal({ onClose }: ModalProps) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const { mutate, isSuccess, isPending } = useFoodDataMutate();

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
    mutate({ title, image, price: parseInt(price) });
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Novo Item no Cardapio</h5>
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
              label="Preco em centavos (ex: 2990 = R$29,90)"
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
              className="btn btn-danger"
              onClick={handleSubmit}
              disabled={isPending}
            >
              {isPending ? "Salvando..." : "Cadastrar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

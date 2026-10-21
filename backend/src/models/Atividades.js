import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Atividade = conn.define('Atividade', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "O título da atividade não pode ser vazio." }
    }
  },
  descricao_atividade: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: { msg: "A descrição da atividade é obrigatória." }
    }
  },
  reflexao_pessoal: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: { msg: "A reflexão pessoal é obrigatória para o portfólio." }
    }
  },
  bimestre: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: "O bimestre deve ser um número inteiro." },
      min: { args:[1], msg: "O bimestre mínimo é 1." },
      max: { args:[4], msg: "O bimestre máximo é 4." }
    }
  },
  usuario_id: {
    type: DataTypes.STRING, 
    allowNull: false
  }
});

export default Atividade
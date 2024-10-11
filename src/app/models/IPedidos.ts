import { UUID } from "crypto";

enum Status {
    Aguardando = 'Aguardando',
    EmAndamento = 'Em Andamento',
    Entregue = 'Entregue',
    Cancelado = 'Cancelado'
}

interface Pedidos {
    id: String;
    solicitante: string;
    descricao: string;
    servico: string;
    status: Status;
    data_criacao?: Date;
    data_entrega?: Date;
}

export default Pedidos
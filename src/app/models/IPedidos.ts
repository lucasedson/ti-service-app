enum Status {
    Aguardando = 'Aguardando',
    EmAndamento = 'Em Andamento',
    Entregue = 'Entregue',
    Cancelado = 'Cancelado'
}

interface Pedidos {
    solicitante: string;
    descricao: string;
    servico: string;
    status: Status;
    data_criacao: Date;
    data_entrega?: Date;
}

export default Pedidos
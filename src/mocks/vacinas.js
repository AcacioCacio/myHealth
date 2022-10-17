import comprovante from '../assets/vacinas/comprovante.png'

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomDateStart = () => {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}

const dose = gerarNumeroAleatorio(1, 4)

const qtdDose = (dose) => {
  if (dose == 1){
    return 'Dose única';
  }else{
    return `${dose}ª dose`;
  }
}

const proximaDose = (dose) => {
  if(dose == 1){
    return 'Não há próxima dose'
  }else{
    return `Próxima dose em: ${(new randomDateStart()).toLocaleDateString('pt-BR')}`
  }
}

const vacinas = {
    lista: [
        {
            vacina: 'BCG',
            data: (new randomDateStart()).toLocaleDateString('pt-BR'),
            dose: qtdDose(dose),
            image: comprovante,
            proximaVacina: proximaDose(dose),
          },
          {
            vacina: 'COVID',
            data: (new randomDateStart()).toLocaleDateString('pt-BR'),
            dose: qtdDose(dose),
            image: comprovante,
            proximaVacina: proximaDose(dose),
          },
          {
            vacina: 'SARAMPO',
            data: (new randomDateStart()).toLocaleDateString('pt-BR'),
            dose: qtdDose(dose),
            image: comprovante,
            proximaVacina: proximaDose(dose),
          },
          {
            vacina: 'POLIO',
            data: (new randomDateStart()).toLocaleDateString('pt-BR'),
            dose: qtdDose(dose),
            image: comprovante,
            proximaVacina: proximaDose(dose),
          }
    ]
}

export default vacinas;
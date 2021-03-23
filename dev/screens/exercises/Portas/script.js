const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
const questions = [
  {
    title: 'Marque a porta lógica que corresponde ao seguinte circuito:',
    title_image: { width: 'unset', height: 'unset' },
    items_image: false,
    type: 'default',
    items: ['E/AND', 'OU/OR', 'XOR', 'NÃO/NOT', 'NOR'],
    resp: 'a',
  },
  {
    title: 'A que tipo de oeprador lógico corresponde a seguinte Tabela Verdade?:',
    title_image: { width: 'unset', height: 'unset' },
    items_image: false,
    type: 'default',
    items: ['E/AND', 'OU/OR', 'XOR', 'NÃO/NOT', 'NOR'],
    resp: 'b',
  },
  {
    title: '(DCTAE-2009) considere o circuito digital a seguir.',
    title_image: { width: 'unset', height: 'unset' },
    items_image: false,
    type: 'default',
    items: ['É equivalente a uma porta XOU.', 'É equivalente a uma porta XNOU.', 'Caso A =0 e B =1, S = 0.', 'Caso A e B sejam iguais, a saída S será igual a 1.', 'Caso A e B sejam iguais a 0, a saída será a 1.'],
    resp: 'a',
  },
  {
    title: '(IFMG-2014) Dada a tabela-verdade abaixo, escolha a expressão lógica que equivale a expressão mais simplificada possível:',
    title_image: { width: 'unset', height: 'unset' },
    items_image: true,
    type: 'default',
    items: [[30, 100], [30, 100], [30, 100], [30, 100], [30, 100]],
    resp: 'd',
  },
  {
    title: '(CAGECE-2010) A tabela verdade correspondente ao circuito representado a seguir é:',
    title_image: { width: 'unset', height: 'unset' },
    items_image: true,
    type: 'default',
    items: [[110, 100], [110, 100], [110, 100], [110, 110]],
    resp: 'c',
  },
  {
    title: '(PETROQUÍMICASUAPE-2010) No circuito lógico acima, a tabela verdade, que representa a relação entre as entradas A e B e a saída S, é a que se apresenta em',
    title_image: { width: 'unset', height: 'unset' },
    items_image: true,
    type: 'default',
    items: [[100, 100], [100, 100], [100, 100], [100, 100]],
    resp: 'b',
  },
  {
    title: '(Liquigás -2018) Pretende-se que o circuito lógico combinacional da figura abaixo realize a função lógica Booleana S. Para tal propósito, qual deve ser a porta lógica a ser inserida no circuito, em substituição ao bloco indicado na Figura?',
    title_image: { width: 'unset', height: 'unset' },
    items_image: true,
    type: 'default',
    items: [[60, 100], [60, 100], [60, 100], [60, 100], [70, 100]],
    resp: 'c',
  },
  {
    title: '(Liquigás -2018) A figura abaixo apresenta um circuito digital. Qual a função lógica booleana que tal circuito realiza para obter a saída S?',
    title_image: { width: 'unset', height: 'unset' },
    items_image: true,
    type: 'default',
    items: [[30, 100], [30, 100], [30, 100], [30, 100], [30, 100]],
    resp: 'e',
  },
];

function toggleHelp(prop, text) {
  window.document.getElementById('popUpText').innerText = text;
  window.document.getElementsByName('pop').forEach((e) => {
    e.style.display = prop;
  });
}

const toggleGabarito = () => {
  const i = window.document.getElementById('innerGabarito');
  const gabarito = window.document.getElementById('gabarito');
  i.className = i.className === 'fa fa-eye-slash' ? 'fa fa-eye' : 'fa fa-eye-slash';
  gabarito.style.display = gabarito.style.display === 'none' ? 'block' : 'none';
};

// eslint-disable-next-line no-unused-vars
const generateQuestions = () => {
  questions.forEach((question, i) => {
    const box = document.createElement('div');
    box.className = 'boxed';
    box.id = `q${i + 1}`;
    document.getElementsByClassName('main')[0].appendChild(box);
    const title = document.createElement('p');
    const titleQuest = document.createElement('p');
    titleQuest.className = 'titleQuest';
    titleQuest.innerText = question.title;
    title.innerText = (question.title_second || '');
    title.className = 'secondText';
    let img;
    if (question.title_image) {
      img = document.createElement('img');
      img.src = `images/q${i + 1}.jpg`;
      img.style.width = question.title_image.width;
      img.style.height = question.title_image.height;
    }
    box.appendChild(titleQuest);
    box.appendChild(img);
    box.appendChild(title);
    let items; let
      inputSubj;
    switch (question.type) {
      case 'default':
        items = document.createElement('div');
        items.className = 'items';
        box.appendChild(items);
        question.items.forEach((itemText, j) => {
          const item = document.createElement('div');
          item.className = 'item';
          items.appendChild(item);
          const input = document.createElement('input');
          input.type = 'radio';
          input.id = `${alfabeto[j]}${i + 1}`;
          input.name = `q${i + 1}`;
          input.value = `${alfabeto[j]}`;
          item.appendChild(input);
          const label = document.createElement('LABEL');
          label.setAttribute('for', `${alfabeto[j]}${i + 1}`);
          label.id = `l${alfabeto[j]}${i + 1}`;
          label.innerText = alfabeto[j];
          label.className = 'itemLabel';
          item.appendChild(label);
          let pDiv;
          if (question.items_image) {
            pDiv = document.createElement('img');
            pDiv.src = `images/q${i + 1}/${alfabeto[j]}.jpg`;
            [pDiv.height, pDiv.width] = itemText;
          } else {
            const itemP = document.createElement('p');
            itemP.innerText = itemText;
            pDiv = document.createElement('div');
            pDiv.className = 'pDiv';
            pDiv.appendChild(itemP);
          }
          item.appendChild(pDiv);
        });
        break;
      case 'subj':
        inputSubj = document.createElement('input');
        inputSubj.type = 'text';
        inputSubj.name = `q${i + 1}`;
        box.appendChild(inputSubj);
        break;
      case 'itemsSubj':
        question.items.forEach((itemText, j) => {
          const divInput = document.createElement('div');
          divInput.className = 'divInput';
          const labelInput = document.createElement('label');
          labelInput.innerText = `${itemText}   =   `;
          labelInput.className = 'subjLabel';
          inputSubj = document.createElement('input');
          inputSubj.type = 'text';
          inputSubj.name = `q${i + 1}`;
          inputSubj.id = `${alfabeto[j]}${i + 1}`;
          labelInput.setAttribute('for', `${alfabeto[j]}${i + 1}`);
          divInput.appendChild(labelInput);
          divInput.appendChild(inputSubj);
          box.appendChild(divInput);
        });
        break;
      default:
        break;
    }
  });
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'Corrigir';
  button.className = 'button';
  // eslint-disable-next-line no-use-before-define
  button.onclick = takeSelected;
  document.getElementsByClassName('main')[0].appendChild(button);

  const gabaritoButton = document.createElement('button');
  gabaritoButton.className = 'button';
  gabaritoButton.onclick = toggleGabarito;
  gabaritoButton.style.marginTop = '10px';
  const innerGabarito = document.createElement('i');
  innerGabarito.className = 'fa fa-eye-slash';
  innerGabarito.id = 'innerGabarito';
  innerGabarito.style.marginRight = '10px';
  const textGabarito = document.createElement('span');
  textGabarito.innerText = 'Gabarito';
  gabaritoButton.appendChild(innerGabarito);
  gabaritoButton.appendChild(textGabarito);
  document.getElementsByClassName('main')[0].appendChild(gabaritoButton);
  const gabarito = document.createElement('p');
  let text = '';
  questions.forEach((quest, index) => {
    text += `${index + 1}-${quest.resp}    `;
  });
  gabarito.innerText = text;
  gabarito.style.fontSize = '20px';
  gabarito.style.display = 'none';
  gabarito.id = 'gabarito';
  document.getElementsByClassName('main')[0].appendChild(gabarito);
};

const toggleClassCerto = (elemento) => {
  elemento.classList.add('boxedCerto');
};

const toggleClassErrado = (elemento) => {
  elemento.classList.add('boxedErrado');
};

const toggleClassFalta = (elemento) => {
  elemento.classList.add('boxedFalta');
};

const retornaMarcado = (lisRadios) => {
  for (let j = 0; j < lisRadios.length; j += 1) {
    if (lisRadios[j].checked) {
      return lisRadios[j].value;
    }
  } return false;
};

const avaliaResposta = (resposta, questao) => {
  if (!resposta || resposta === 'nenhuma') {
    return 'falta';
  }
  if (typeof (resposta) === 'object') {
    if (resposta === questions[questao - 1].resp) {
      return 'allTrue';
    }
    return 'notAllTrue';
  }
  if (resposta === questions[questao - 1].resp.toString()) {
    return true;
  }
  return false;
};

const disableAllInputs = () => {
  const inputs = window.document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].disabled = !((inputs[i].id === 'fechar' || inputs[i].id === 'help'));
  }
};

const takeSelected = () => {
  let contResp = 0;
  let contCert = 0;
  const resList = [];
  let resposta;
  let res;
  questions.forEach((value, i) => {
    const input = document.getElementsByName(`q${i + 1}`);
    if (value.type === 'default') {
      res = retornaMarcado(input);
    } else if (value.type === 'subj') {
      res = input[0].value.toUpperCase().replace(/\s/g, '');
    } else if (value.type === 'itemsSubj') {
      res = [];
      input.forEach((element, index) => {
        const resp = element.value.toUpperCase().replace(/\s/g, '');
        if (resp === questions[i].resp[index]) {
          toggleClassCerto(element);
          contResp += 1;
          contCert += 1;
        } else if (resp !== '') {
          toggleClassErrado(element);
          contResp += 1;
        }
        if (resp !== '') res.push(resp);
      });
      if (res.length === 0) {
        res = 'nenhuma';
      }
    }
    resposta = avaliaResposta(res, i + 1);
    resList.push(resposta);
  });
  resList.forEach((resp, index) => {
    const questao = document.getElementById(`q${index + 1}`);
    if (resp === true) {
      toggleClassCerto(questao);
      contResp += 1;
      contCert += 1;
    } else if (resp === 'falta') {
      toggleClassFalta(questao);
    } else if (resp === 'allTrue') {
      toggleClassCerto(questao);
    } else if (resp === 'notAllTrue') {
      toggleClassErrado(questao);
    } else {
      toggleClassErrado(questao);
      contResp += 1;
    }
  });
  let text = '';
  if (contResp === 0) {
    text = 'Você precisa responder ao menos uma questão!';
  } else {
    if (contCert === 0) {
      text = 'Você errou todas as questões que respondeu :/';
    } else if (contCert === contResp) {
      text = 'Você acertou todas as questões que respondeu! Seu desempenho é de 100%!';
    } else {
      text = `Você acertou ${contCert} das ${contResp} questões que respondeu. Seu desempenho é de ${Math.floor((contCert / contResp) * 100)}%!`;
    }
    disableAllInputs();
  }
  toggleHelp('block', text);
};

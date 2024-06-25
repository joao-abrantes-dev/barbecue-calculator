function calcular() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);


    const consumo = {
        carne: { homens: 500, mulheres: 300, criancas: 200 },
        frango: { homens: 200, mulheres: 200, criancas: 100 },
        linguica: { homens: 200, mulheres: 200, criancas: 200 },
        refrigerante: { homens: 300, mulheres: 400, criancas: 200 },
        cerveja: { homens: 800, mulheres: 500, criancas: 0 }
    };

    const totalCarne = homens * consumo.carne.homens + mulheres * consumo.carne.mulheres + criancas * consumo.carne.criancas;
    const totalFrango = homens * consumo.frango.homens + mulheres * consumo.frango.mulheres + criancas * consumo.frango.criancas;
    const totalLinguica = homens * consumo.linguica.homens + mulheres * consumo.linguica.mulheres + criancas * consumo.linguica.criancas;
    const totalRefrigerante = homens * consumo.refrigerante.homens + mulheres * consumo.refrigerante.mulheres + criancas * consumo.refrigerante.criancas;
    const totalCerveja = homens * consumo.cerveja.homens + mulheres * consumo.cerveja.mulheres;

    function formatarUnidade(valor, unidade) {
        if (valor >= 1000) {
          if (unidade === 'g') {
            return `${(valor / 1000).toFixed(2)} kg`;
          } else if (unidade === 'ml') {
            return `${(valor / 1000).toFixed(2)} L`;
          }
        } else {
          return `${valor} ${unidade}`;
        }
      }


      document.getElementById('carne').innerText = `Carne bovina: ${formatarUnidade(totalCarne, 'g')}`;
      document.getElementById('frango').innerText = `Frango: ${formatarUnidade(totalFrango, 'g')}`;
      document.getElementById('linguica').innerText = `Linguiça: ${formatarUnidade(totalLinguica, 'g')}`;
      document.getElementById('refrigerante').innerText = `Refrigerante: ${formatarUnidade(totalRefrigerante, 'ml')}`;
      document.getElementById('cerveja').innerText = `Cerveja: ${formatarUnidade(totalCerveja, 'ml')}`;

    document.getElementById('resultados').style.display = 'block';
  document.getElementById('churrasco-form').style.display = 'none';


document.getElementById('voltarBtn').addEventListener('click', function() {
  document.getElementById('resultados').style.display = 'none';
  document.getElementById('churrasco-form').style.display = 'flex';
});

}
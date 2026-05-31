import ServicoDePagamento from '../src/servicoDePagamentosBancarios.js';
import assert from 'node:assert';

describe('Classe de Serviço de Pagamento', () => {

    it('Validar que um pagamento acima de 100 recebe categoria cara', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar(
            '0987-7656-3475',
            'Sabesp',
            180.37
        );

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Sabesp');
        assert.equal(ultimoPagamento.valor, 180.37);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Validar que um pagamento de menor que 100 recebe categoria padrão', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar(
            '9874-8634-1212',
            'Enel',
            99.00
        );

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '9874-8634-1212');
        assert.equal(ultimoPagamento.empresa, 'Enel');
        assert.equal(ultimoPagamento.valor, 99.00);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    it('Validar que a consulta retorna apenas o último pagamento realizado',  () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar(
            '0987-7656-3475',
            'Sabesp',
            180.37
        );

        servicoDePagamento.pagar(
            '9874-8634-1212',
            'Enel',
            99.00
        );

        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '9874-8634-1212');
        assert.equal(ultimoPagamento.empresa, 'Enel');
        assert.equal(ultimoPagamento.valor, 99.00);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

});
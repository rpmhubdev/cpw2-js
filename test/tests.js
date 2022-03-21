var index = require('../index.js');
var assert = require('assert');

describe('Correção', function () {

  // Issue 1

  describe('invert', function () {
    it('Invert com cinco elementos', function () {
      var people = ['Dora', 'Ari', 'Maria', 'Rodrigo', 'Cristiane'];
        assert.deepEqual(index._test.invert(people), ['Cristiane', 'Rodrigo', 'Maria', 'Ari', 'Dora']);
    });
  });

  describe('invert', function () {
    it('Invert com um elemento', function () {
      var people = ['Rodrigo'];
        assert.deepEqual(index._test.invert(people), ['Rodrigo']);
    });
  });

  describe('invert', function () {
    it('Invert com dois elementos iguais', function () {
      var people = ['Rodrigo', 'Rodrigo'];
        assert.deepEqual(index._test.invert(people), ['Rodrigo', 'Rodrigo']);
    });
  });

  describe('invert', function () {
    it('Invert com um array vazio', function () {
        var people = [];
        assert.deepEqual(index._test.invert(people), []);
    });
  });


  // Issue 2

  describe('mean', function () {
    it('Mean com três valores', function () {
        var grade = [6,7,10];
        assert.deepEqual(index._test.mean(grade), 7.666666666666667);
    });
  });

  describe('isApproved', function () {
    it('isApproved: 10', function () {
        var grade = 10;
        assert.deepEqual(index._test.isApproved(grade), "aprovado");
    });
  });

  describe('isApproved', function () {
    it('isApproved: 7', function () {
        var mean = 7;
        assert.deepEqual(index._test.isApproved(mean), "aprovado");
    });
  });

  describe('isApproved', function () {
    it('isApproved: 5', function () {
        var mean = 5;
        assert.deepEqual(index._test.isApproved(mean), "reprovado");
    });
  });


  // Issue 3

  describe('wide', function () {
    it('Wide: 03/03/22', function () {
        var strDate = "03/03/22";
        assert.deepEqual(index._test.wide(strDate), "03 de março de 22");
    });
  });

  describe('wide', function () {
    it('Wide: 10/06/98', function () {
        var strDate = "06/10/98";
        assert.deepEqual(index._test.wide(strDate), "06 de outubro de 98");
    });
  });

  describe('wide', function () {
    it('Wide: 25/08/1994', function () {
        var strDate = "25/08/1994";
        assert.deepEqual(index._test.wide(strDate), "25 de agosto de 1994");
    });
  });

  describe('wide', function () {
    it('Wide: data vazia (deve retornar uma string vazia)', function () {
        var strDate = "";
        assert.deepEqual(index._test.wide(strDate), "");
    });
  });

  describe('wide', function () {
    it('Wide: formato errado 25-08-1994 (deve retornar uma string vazia)', function () {
        var strDate = "06-10-1997";
        assert.deepEqual(index._test.wide(strDate), "");
    });
  });

});
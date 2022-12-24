'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('pessoas', [{
      nome: 'Ana Souza',
      ativo: true,
      email: 'ana@ana.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Victor',
      ativo: true,
      email: 'victor@victor.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Ronaldo',
      ativo: true,
      email: 'ronaldo@ronaldo.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Joana Souza',
      ativo: true,
      email: 'joana@joana.com',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});

  }
};

'use strict';

const data = [
  {
    'kode_opd': '5.01.5.05.0.00.02.0001',
    'nama_opd': 'Badan Perencanaan, Penelitian dan Pengembangan Daerah',
  },
  {
    'kode_opd': '5.01.5.05.0.00.02.0002',
    'nama_opd': 'Dinas Pendidikan',
  },
  {
    'kode_opd': '5.01.5.05.0.00.02.0003',
    'nama_opd': 'Dinas Perhubungan',
  },
  {
    'kode_opd': '5.01.5.05.0.00.02.0004',
    'nama_opd': 'Dinas Kependudukan dan Catatan Sipil',
  },
  {
    'kode_opd': '5.01.5.05.0.00.02.0005',
    'nama_opd': 'Dinas Koperasi dan UMKM',
    'nama_kepala_dinas': 'Bahlil Lahadalia',
  },
  {
    'kode_opd': '5.01.5.05.0.00.02.0006',
    'nama_opd': 'Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu',
    'nama_kepala_dinas': 'Bahlil Lahadalia',
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

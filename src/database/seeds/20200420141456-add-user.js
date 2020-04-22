const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Ruanderson',
          last_name: 'Vieira',
          email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('123123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};

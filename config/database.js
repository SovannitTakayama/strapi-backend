module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-204-56-171.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd8ocuvok8de8tj'),
      user: env('DATABASE_USERNAME', 'wqjbsoutrisqao'),
      password: env('DATABASE_PASSWORD', '2504ae836190d18d1b19c2d1d585a33bb021b282454482b091e01e0533db27f8'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

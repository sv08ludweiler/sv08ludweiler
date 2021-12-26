module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '27c7cbe3bc85d2b92b94f8878db89708'),
  },
});

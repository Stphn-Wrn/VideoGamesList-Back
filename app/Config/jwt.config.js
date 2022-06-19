import 'dotenv/config'

const secret = process.env.JWT_SECRET;
const ttl = 1800;

export { secret, ttl }



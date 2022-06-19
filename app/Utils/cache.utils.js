import Keyv from 'keyv';

const keyv = new Keyv();

const cache = {
 set : (key, value, ttl = 0) => keyv.set(key, value, ttl),

 get : (key) => keyv.get(key),

 del : (key) => keyv.delete(key)
}
export default  cache;
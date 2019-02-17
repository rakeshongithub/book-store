import app from './App';
import { config } from './config/config';

const __PORT = config.port;
/**
 * @description App listing on defined port
 */
app.listen(__PORT, (err:Object) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${__PORT}`);
});
import * as fs from 'fs';
import * as path from 'path';
import { documentLoader } from './documentLoader';
import issuers from './issuers';

const seed = fs
  .readFileSync(path.resolve(__dirname, './wallet/seed.txt'))
  .toString();

const content = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './wallet/content.json')).toString()
);

const ldp_vc_template = JSON.parse(
  fs
    .readFileSync(path.resolve(__dirname, './credentials/ldp-vc-template.json'))
    .toString()
);

const ldp_vc = JSON.parse(
  fs
    .readFileSync(path.resolve(__dirname, './credentials/ldp-vc.json'))
    .toString()
);

const ldp_vp = JSON.parse(
  fs
    .readFileSync(path.resolve(__dirname, './credentials/ldp-vp.json'))
    .toString()
);

export {
  issuers,
  seed,
  content,
  ldp_vc_template,
  ldp_vc,
  ldp_vp,
  documentLoader,
};
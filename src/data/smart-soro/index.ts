/**
 * smart.soro · barrel export
 *
 * Use desta forma na página:
 *   import { resolveQueixas, getDominiosCount } from '../data/smart-soro';
 */

export { ATIVOS, getAtivo, type Ativo, type Via } from './ativos';
export {
  QUEIXAS,
  resolveQueixas,
  getDominiosCount,
  type Queixa,
  type AtivoEmQueixa,
  type QueixaResolvida,
  type Dominio,
} from './queixas';
